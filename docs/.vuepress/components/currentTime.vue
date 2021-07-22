<template>
    <div>
        <div>{{t1}}</div>
        <div>{{t2}}</div>
        <div>{{currentTime('yyyy-MM-dd')}}</div>
    </div>
</template>

<script>

  export default {

    name: 'currentTime',
    data() {
      return {
        timer: null,
        timer2: null,
        t1: this.currentTime('yyyy-MM-dd hh:mm:ss'),
        t2: this.currentTime('MM-dd hh:mm:ss')
      };
    },
    created() {
      this.time();
    },
    destroyed() {
      clearInterval(this.timer);
      clearInterval(this.timer2);
    },

    methods: {
      time() {
        this.timer = setInterval(() => {
          this.t1 = this.currentTime('yyyy-MM-dd hh:mm:ss');
        }, 1000);
        this.timer2 = setInterval(() => {
          this.t2 = this.currentTime('MM-dd hh:mm:ss');
        }, 1000);
      },
      currentTime(type) {
        let myDate = new Date();
        myDate.getYear();        // 获取当前年份(2位)
        myDate.getFullYear();    // 获取完整的年份(4位,1970-????)
        myDate.getMonth();       // 获取当前月份(0-11,0代表1月)
        myDate.getDate();        // 获取当前日(1-31)
        myDate.getDay();         // 获取当前星期X(0-6,0代表星期天)
        myDate.getTime();        // 获取当前时间(从1970.1.1开始的毫秒数)
        myDate.getHours();       // 获取当前小时数(0-23)
        myDate.getMinutes();     // 获取当前分钟数(0-59)
        myDate.getSeconds();     // 获取当前秒数(0-59)
        myDate.getMilliseconds();    // 获取当前毫秒数(0-999)
        myDate.toLocaleDateString();     // 获取当前日期
        myDate.toLocaleString();        // 获取日期与时间

        Date.prototype.Format = function (fmt) { // author: meizz
          let o = {
            'M+': this.getMonth() + 1, // 月份
            'd+': this.getDate(), // 日
            'h+': this.getHours(), // 小时
            'm+': this.getMinutes(), // 分
            's+': this.getSeconds(), // 秒
            'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
            'S': this.getMilliseconds() // 毫秒
          };
          if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
          }
          for (var k in o)
            if (new RegExp('(' + k + ')').test(fmt)) {
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
            }
          return fmt;
        };
        if (type === 'yyyy-MM-dd hh:mm:ss') {
          return new Date().Format('yyyy-MM-dd hh:mm:ss');
        }
        if (type === 'MM-dd hh:mm:ss') {
          return new Date().Format('MM-dd hh:mm:ss');
        }
        if (type === 'yyyy-MM-dd') {
          return new Date().Format('yyyy-MM-dd');
        }
      }
    }
  };
</script>

<style lang='scss' scoped>

</style>
