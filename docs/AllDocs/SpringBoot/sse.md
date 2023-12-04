# 通过 SSE 实现消息推送

想要实现的功能: 前端可以监听`/sse`接口推送的消息，此过程不需要前端再发送消息，常用于网页上的新消息提示。

Vue的前端实现: [sse](/AllDocs/Frontend/sse.html)

## 启用异步任务和定时任务

在入口加入`@EnableAsync`和`@EnableScheduling`注解启用异步任务和定时任务

```java
package cn.baizhi958216.sse_backend_spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAsync
@EnableScheduling
public class SseBackendSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(SseBackendSpringApplication.class, args);
    }

}
```

## 编写sse接口并使用定时任务模拟持续发送消息

前端监听`/sse`后，`/sse/sendEvent`配置了定时任务，因此`/sse`会不断的接受到服务端的推送

```java
package cn.baizhi958216.sse_backend_spring.controller;

import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;
import java.util.Date;
import java.util.concurrent.CopyOnWriteArrayList;

@RestController
@RequestMapping("/sse")
@CrossOrigin()
public class SseController {

    private final CopyOnWriteArrayList<SseEmitter> emitters = new CopyOnWriteArrayList<>();

    @GetMapping(produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public SseEmitter handleSse() {
        SseEmitter emitter = new SseEmitter(10000L);

        // 添加新的 emitter 到列表
        emitters.add(emitter);

        // 在连接关闭时移除 emitter
        emitter.onCompletion(() -> emitters.remove(emitter));
        emitter.onTimeout(() -> emitters.remove(emitter));

        return emitter;
    }

    @GetMapping("/sendEvent")
    @Scheduled(fixedDelay = 1000)
    public void sendEvent(){
        this.sendMessage("我永远喜欢爱莉希雅 " + new Date());
    }

    // 通过调用该方法发送消息给所有连接的客户端
    public void sendMessage(String message) {
        for (SseEmitter emitter : emitters) {
            try {
                // 发送消息
                emitter.send(SseEmitter.event().reconnectTime(1000L).data(message).name("elysia"));
            } catch (IOException e) {
                // 发送失败时移除 emitter
                emitters.remove(emitter);
            }
        }
    }
}

```
