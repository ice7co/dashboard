# NAS 导航页

基于配置文件,方便快速迭代的,一款 NAS 导航页

## 示例

演示地址：[https://dash.mozzie.cn/](https://dash.mozzie.cn/)

![演示图片](./demo.png)

## 项目结构

```
├── README.md
├── package.json
├── public
│   ├── conf.yml  # 配置文件
│   ├── favicon.ico # 站点图标
│   └── index.html # 在这里修改网页的标题
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── less # 全局less
│   │   │   └── common.less
│   │   └── theme
│   │       └── pure # 默认主题
│   │           ├── core.less # 主题核心样式文件
│   ├── components
│   │   ├── loading.vue # 加载小圈圈
│   │   └── pure.vue # pure主题
│   └── main.js
├── config
│   ├── index.js # api接口配置
├── vue.config.js
└── yarn.lock
```

## 配置文件

配置文件采用了简单易懂的`yaml`语法，序会自动解析`conf.yml`并且渲染到页面中，可参考本例项目中的`conf.yml`

 - 配置图标：使用`FontAwesome5`，访问[FontAwesome5](https://fontawesome.com/icons)找到对应图表明，配置到`conf.yml`中，注意前缀`fas`,`fab`别弄错了

## 部署

下载`dist.zip`文件部署扔到`nginx`之流的服务器上

## 下载

下载`dist.zip`
