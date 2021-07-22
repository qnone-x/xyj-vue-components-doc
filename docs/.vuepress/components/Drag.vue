<template>
    <div id='box'>
        拖拽移动
    </div>
</template>

<script>
  export default {
    name: 'Drag',
    data() {
      return {
      };
    },
    mounted() {
      let el = document.querySelector('#box');
      el.style.position = 'absolute';
      el.onmousedown = function (e) {
        let x = e.clientX - el.offsetLeft;//求出鼠标到盒子距离  左
        let y = e.clientY - el.offsetTop;//求出鼠标到盒子距离   上
        document.onmousemove = function (e) {
          el.style.left = (e.clientX - x) + 'px';
          el.style.top = (e.clientY - y) + 'px';
          if (parseInt(el.style.left) <= 0) {
            el.style.left = '0px';
          }
          if (parseInt(el.style.left) >= document.body.clientWidth - parseInt(el.style.width)) {
            el.style.left = document.body.clientWidth - parseInt(el.style.width) + 'px';
          }
          if (parseInt(el.style.top) <= 0) {
            el.style.top = '0px';
          }
          if (parseInt(el.style.top) >= document.body.clientHeight - parseInt(el.style.height)) {
            el.style.top = document.body.clientHeight - parseInt(el.style.height) + 'px';
          }

        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
      };
    }
  };
</script>

<style  scoped>
    #box {
        width: 80px;
        height: 60px;
        border-radius: 8px;
        background-color: #4a759c;
        color: #fff;
        text-align: center;
        line-height: 60px;
        z-index: 9999999;
        right: 500px;
    }
</style>
