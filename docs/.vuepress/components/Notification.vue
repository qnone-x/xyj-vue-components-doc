<template>
    <div>
        <button style='background-color: #0b0b0b;color: #fff;' @click='timeBar()'>查看效果</button>
        <div class="my-notify" v-if="form.isShow">
            <div :style="{top:340*index+'px'}" class="notify" v-for="(form,index) in list">
                <div :class="form.type==='success'?'time-bar-success':(form.type==='error'?'time-bar-error':'time-bar-warning')"
                     class="close"></div>
                <div class="tip">
                    <span class="success" v-if="form.type==='success'">{{form.title}}</span>
                    <span class="error" v-if="form.type==='error'">{{form.title}}</span>
                    <span class="warning" v-if="form.type==='warning'">{{form.title}}</span>
                </div>
                <div class="content"> {{content}}</div>
                <div :class="form.type==='success'?'time-bar-success':(form.type==='error'?'time-bar-error':'time-bar-warning')"
                     :ref="timeBar+index"
                     :style="{width:form.count+'px'}"
                     class="time-bar"></div>
            </div>

        </div>
    </div>

</template>

<script>
  export default {
    name: 'Notification',
    data() {
      return {
        form: {
          isShow: true, // 是否显示
          isBtnClose: true, // 是否显示可关闭按钮
          time: '1500',//时间
          type: 'success', // 类型
          title: '成功' // 类型
        },
        content: null,
        num: 0,
        height: '',
        list: []
      };
    },

    created() {

    },
    mounted() {
      this.timeBar();
    },
    updated() {

    },
    methods: {
      // enter() {
      //   clearInterval(this.timer);
      // },
      close() {
        clearInterval(this.timer);
        document.body.removeChild(this.$el);
      },
      timeBar() {
        this.list.push(Object.assign({
          timer: () => {
          },
          count: 0
        }, this.form));
        this.list.forEach((i, index) => {
          i.timer = setInterval(() => {
            i.count += 1;
            if (i.count >= 340) {
              i.count = 340;
              this.list.splice(index, 1);
              // document.body.removeChild(this.$el);
              clearInterval(i.timer);
            }
          }, i.time / 340);
        });

      }
    }
  };
</script>

<style  scoped>
    .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        transition: .3s;
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }

    .my-notify:hover .close {
        transform: scale(1.5);
    }

    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(10px);
        opacity: 0;
    }

    .notify-wrap {
        background-color: #00bb7d;
    }

    .my-notify {
        margin: 10px;
        width: 350px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9999999999;
    }

    .notify {
        box-shadow: 0 2px 12px 0 rgba(204, 204, 204, .8);
        position: relative;
        right: 10px;
        padding: 0 10px 25px 10px;
        width: 320px;
        border-radius: 4px;
        background-color: #fff;
        animation: show cubic-bezier(.18, .89, .32, 1.28) .4s;
    }

    .success {
        position: relative;

    }

    .success:before {
        display: block;
        content: '';
        clear: both;
        width: 0;
        height: 0;
        border-width: 10px 10px 0;
        transform: rotate(130deg);
        border-style: solid;
        border-color: #00bb7d transparent transparent; /*灰 透明 透明 */
        position: absolute;
        top: -28px;
        left: -19px;
    }

    .error {
        position: relative;
    }

    .error:before {
        display: block;
        content: '';
        clear: both;
        width: 0;
        height: 0;
        border-width: 10px 10px 0;
        transform: rotate(130deg);
        border-style: solid;
        border-color: #f94d54 transparent transparent; /*灰 透明 透明 */
        position: absolute;
        top: -8px;
        left: -19px;
    }

    .warning {
        position: relative;
    }

    .warning:before {
        display: block;
        content: '';
        clear: both;
        width: 0;
        height: 0;
        border-width: 10px 10px 0;
        transform: rotate(130deg);
        border-style: solid;
        border-color: #f4a028 transparent transparent; /*灰 透明 透明 */
        position: absolute;
        top: -8px;
        left: -19px;
    }

    .notify .tip {
        height: 30px;
        margin-bottom: 5px;
        line-height: 30px;
    }

    .notify .tip span {
        line-height: 30px;
        font-size: 16px;
        font-weight: bold;
        padding-left: 5px;
    }

    .notify .content {
        width: 320px;
        font-size: 15px;
    }

    .time-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
    }

    .time-bar-success {
        background-color: #00bb7d;
    }

    .time-bar-error {
        background-color: #f94d54;
    }

    .time-bar-warning {
        background-color: #f4a028;
    }

    @keyframes show {
        0% {
            right: -350px;
        }
        100% {
            right: 10px;
        }
    }

</style>
