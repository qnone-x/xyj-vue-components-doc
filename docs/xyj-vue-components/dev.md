### npm or yarn 安装
__推荐使用 npm or yarn 的方式安装，它能更好地和 webpack 打包工具配合使用。__
```js
npm i xyj-vue-components -S 
yarn add xyj-vue-components -S
```

__在 main.js 中写入以下内容：__
```js
import Vue from "vue";
import XYJ from 'xyj-vue-components'
import "xyj-vue-components/css/index.scss";
Vue.use(XYJ)
```

__以上代码便完成了 XYJ 的引入。需要注意的是，样式文件需要单独引入。__
