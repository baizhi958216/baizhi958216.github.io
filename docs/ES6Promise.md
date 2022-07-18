
#

```JavaScript
setTimeout(() => {
    console.log('广东省');
}, 1000);
setTimeout(() => {
    console.log('广东省广州市');
}, 1000);
setTimeout(() => {
    console.log('广东省广州市白云区');
}, 1000);
```
为了实现以上功能
```JavaScript
setTimeout(() => {
    console.log('广东省');
    setTimeout(() => {
        console.log('广东省广州市');
        setTimeout(() => {
            console.log('广东省广州市白云区');
        }, 1000);
    }, 1000);
}, 1000);
```
于是回调地狱就产生了  
为了解决这个问题，可以将异步请求包装成```Promise```  
```JavaScript
new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('广东省');
        resolve('广东省')
    }, 1000)
}).then(res=>{
    console.log('第一个任务...'+res);
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(res+'广州市');
            resolve(res+'广州市')
        }, 1000);
    })
}).then(res=>{
    console.log('第二个任务...'+res)
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(res+'白云区');
            resolve(res+'白云区')
        }, 1000);
    })    
}).catch(err=>{console.log(err)})
```