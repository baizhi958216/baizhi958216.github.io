### 1、先创建多语言配置文件夹
i18n:&nbsp&nbsp&nbsp[百度百科词条](https://baike.baidu.com/item/i18n/6771940)
```bash
# 比如说中文翻译
mkdir -p i18n/zh-CN/docusaurus-plugin-content-docs/current/
```
### 2、把相同文件名的markdown文档放进去
```bash
cp docs/docusaurus入门.md i18n/zh-CN/docusaurus-plugin-content-docs/current/docusaurus入门.md
```
### 3、在```docusaurus.config.js```添加i18n多语言配置

在config里添加
```javascript
i18n: {
    // 默认语言
    defaultLocale: 'zh-CN',
    // 语言
    locales: ['en', 'zh-CN'],
},
```
想要在导航栏上添加语言切换？
```config.themeConfig.navbar```添加
```javascript
{
    type: 'localeDropdown',
    position: 'right',
},
```

### 4、更详细的资料
[docusaurus_1.0.5](https://demopark.github.io/docusaurus-docs-Zh_CN/docs/guides-translation.html)  
[docusaurus_V1迁移至V2](https://docusaurus.io/zh-CN/docs/migration/translated-sites)