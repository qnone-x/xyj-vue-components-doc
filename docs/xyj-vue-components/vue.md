# Vue

## 文件基本结构
``` vue
<template>
    <div class="contailer">
      <!--必须在div中编写页面-->
    </div>
</template>
<script>
export default {
  name: 'xxxx', // 必须与文件名称一致
  components : {
  },
  data () {
    return {
    }
  },
  mounted() {
  }，
  methods: {
  }
}
</script>
//  1、声明语言，并且添加scoped 2、lang 必须等于 scss
<style lang="scss" scoped>
  .contailer {}
</style>
```

## 模板语法规范
``` vue
<!-- bad -->
<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
<my-component foo="a" bar="b" baz="c"></my-component>

<!-- good -->
<img
  alt="Vue Logo"
  src="https://vuejs.org/images/logo.png"
>
<my-component
  foo="a"
  bar="b"
  baz="c"
/>
```

## 组件选项顺序
- name
- components
- props
- data
- computed
- created
- mounted
- metods
- filter
- watch

## 指令规范
1. 指令有缩写一律采用缩写形式
``` html
<!-- bad -->
<div
    v-bind:class="{'show-left'：true}"
    v-on:click="getListData"
/>

<!-- good -->
<div
    :class="{'show-left'：true}"
    @click="getListData"
/>
```
2. v-for 循环必须加上 key 属性，在整个 for 循环中 key 需要唯一
``` html
<!-- bad -->
<ul>
    <li v-for="todo in todos">
        {{ todo.text }}
    </li>
</ul>

<!-- good -->
<ul>
    <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
    </li>
</ul>
```
3. 避免 v-if 和 v-for 同时用在一个元素上（性能问题）
``` html
<!-- 将数据替换为一个计算属性，让其返回过滤后的列表 -->
<!-- bad -->
<ul>
    <li v-for="user in users" v-if="user.isActive" :key="user.id">
        {{ user.name }}
    </li>
</ul>

<!-- good -->
<ul>
    <li v-for="user in activeUsers" :key="user.id">
        {{ user.name }}
    </li>
</ul>

<script>
computed: {
    activeUsers: function () {
        return this.users.filter((user) => user.isActive)
    }
}
</script>

<!--将 v-if 移动至容器元素上 (比如 ul, ol) -->
<!-- bad -->
<ul>
    <li v-for="user in users" v-if="shouldShowUsers" :key="user.id">
        {{ user.name }}
    </li>
</ul>

<!-- good -->
<ul v-if="shouldShowUsers">
    <li v-for="user in users" :key="user.id">
        {{ user.name }}
    </li>
</ul>
```

## Props 规范
``` js
// bad
props: ['status']

// good 必选并且必须是 0，1，2
props: {
  status: {
    type: Number,
    required: true,
    validator: (value) => [0, 1, 2].indexOf(value) !== -1
  }
}

// good 非必选
props: {
  status: {
    type: Number,
    default: 0,
  }
}
```
