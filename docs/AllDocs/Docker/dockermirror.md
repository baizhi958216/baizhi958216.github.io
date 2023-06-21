# 配置Docker镜像加速

[阿里云容器镜像服务 ACR](https://help.aliyun.com/document_detail/60750.html)

## 配置

`/etc/docker/daemon.json`:

```json
{
  "registry-mirrors": ["镜像链接"]
}
```