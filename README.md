# vue-app-base

1. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
2. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
3. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
4. 尽可能的使用上所有你了解到的功能和特性

# 项目简介

```js
- npm install    //依赖安装
- npm run serve //启动一个静态服务器
- npm run build //打包项目文件
- npm run lint  //项目eslint检测
```

1. 模拟 vue-cli 实现,利用 webpack 的 webpack-dev-server 启动静态服务器
2. 本地调试代码,本地服务器上代码实时更新,实现热更新
3. vue-loader 和 vue-template-compiler 将 vue 模板渲染成浏览器可识别的代码片段
4. less-loader,css-loader,style-css-loader 将 vue 的 less 语法进行编译转换
5. file-loader,url-loader 处理图片字体资源文件
6. html-webpack-plugin 配合 html-loader 完成自定义 public 下 index.html 模板
7. babel 相关插件将生产代码进行 js 代码转换,实现在低版本浏览器也能运行
8. uglifyjs-webpack-plugin 进行生产代码压缩,减少打包体积
9. eslint,eslint-loader,eslint-plugin-vue 配合.eslint 文件进行代码风格校验
10. eslint 检验错误,devServer 服务启动失败,将错误信息显示在静态服务器,.eslint 常用规则校验

### 作业地址分两个模块
- https://github.com/PeculiarCode/module_4_cli
- https://github.com/PeculiarCode/module_4