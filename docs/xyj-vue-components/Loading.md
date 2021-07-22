# Loading (等待加载)
```js
开启
   this.$TT_loading.open();//默认'box-rotate'动画
       可填值
       "ball-climbing"
       "loader"
       "box-rotate"
   this.$TT_loading.open('loader');
关闭
        //模拟异步操作
        setTimeout(() => {
          this.$TT_loading.close();
        }, 3000);
```
<Loading/>
