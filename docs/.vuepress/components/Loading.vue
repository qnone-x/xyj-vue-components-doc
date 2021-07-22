<template>
    <div>
        <div class="box" v-if="isShow">
            <div class="cen">
                <div class="loader" v-if="type==='loader'"></div>
                <!--            盒子走动-->
                <div class="box-rotate" v-if="type==='box-rotate'">
                    <div></div>
                    <div></div>
                </div>
                <!--            上楼梯-->
                <div class="ball-climbing" v-if="type==='ball-climbing'">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
        <button @click='onload' style='background-color: #0b0b0b;color: #fff;'>查看效果</button>
    </div>
</template>
<script>
  export default {
    name: 'Loading',
    data() {
      return {
        isShow: false,
        type: 'box-rotate'
      };
    },
    created() {

    },
    methods: {
      onload() {
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
        }, 1800);
      }
    }

  };
</script>
<style scoped>
    .box {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.71);
        z-index: 999999;
        position: absolute;
        top: 0;
        left: 0;


    }

    .cen {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    .loader {
        margin: 0 auto;
        width: 50px;
        height: 50px;
        display: inline-block;
        padding: 0;
        opacity: 0.5;
        border: 3px solid #fff;
        -webkit-animation: loader 1s ease-in-out infinite alternate;
        animation: loader 1s ease-in-out infinite alternate;
    }

    .loader:before {
        content: " ";
        position: absolute;
        z-index: -1;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border: 3px solid #79c1ff;
    }

    @keyframes loader {
        0% {
            transform: rotate(
                    0deg
            ) scale(1, 1);
            border-radius: 0px;
        }

        100% {
            transform: rotate(
                    360deg
            ) scale(0, 0);
            border-radius: 50px;
        }
    }

    /*盒子旋转*/
    .box-rotate {
        width: 50px;
        height: 50px;
    }

    .box-rotate > div {
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor
    }

    .box-rotate > div:nth-child(1) {
        top: -25%;
        z-index: 1;
        height: 100%;
        border-radius: 10%;
        -webkit-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
        -moz-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
        -o-animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
        animation: square-jelly-box-animate 0.6s -0.1s linear infinite;
    }

    .box-rotate > div:nth-child(1), .box-rotate > div:nth-child(2) {
        position: absolute;
        left: 0;
        width: 100%;
    }

    .box-rotate > div:nth-child(2) {
        bottom: -9%;
        height: 10%;
        background: #000;
        border-radius: 50%;
        opacity: .2;
        -webkit-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
        -moz-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
        -o-animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
        animation: square-jelly-box-shadow 0.6s -0.1s linear infinite;
    }

    @keyframes square-jelly-box-animate {
        17% {
            border-bottom-right-radius: 10%;
        }
        25% {
            transform: translateY(25%) rotate(
                    22.5deg
            )
        }
        50% {
            border-bottom-right-radius: 100%;
            -webkit-transform: translateY(50%) scale(1, 0.9) rotate(
                    45deg
            );
            -moz-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
            -o-transform: translateY(50%) scale(1, 0.9) rotate(45deg);
            transform: translateY(50%) scale(1, 0.9) rotate(
                    45deg
            );
        }
        75% {
            -webkit-transform: translateY(25%) rotate(
                    67.5deg
            );
            -moz-transform: translateY(25%) rotate(67.5deg);
            -o-transform: translateY(25%) rotate(67.5deg);
            transform: translateY(25%) rotate(
                    67.5deg
            );
        }
        100% {
            -webkit-transform: translateY(0) rotate(
                    90deg
            );
            -moz-transform: translateY(0) rotate(90deg);
            -o-transform: translateY(0) rotate(90deg);
            transform: translateY(0) rotate(
                    90deg
            );
        }

    }

    /*爬楼梯*/
    .ball-climbing,
    .ball-climbing > div {
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .ball-climbing {
        display: block;
        font-size: 0;
        color: #fff;
    }

    .ball-climbing.la-dark {
        color: #333;
    }

    .ball-climbing > div {
        display: inline-block;
        float: none;
        background-color: currentColor;
        border: 0 solid currentColor;
    }

    .ball-climbing {
        width: 42px;
        height: 32px;
    }

    .ball-climbing > div:nth-child(1) {
        position: absolute;
        bottom: 32%;
        left: 18%;
        width: 14px;
        height: 14px;
        border-radius: 100%;
        -webkit-transform-origin: center bottom;
        -moz-transform-origin: center bottom;
        -ms-transform-origin: center bottom;
        -o-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
        -moz-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
        -o-animation: ball-climbing-dot-jump .6s ease-in-out infinite;
        animation: ball-climbing-dot-jump .6s ease-in-out infinite;
    }

    .ball-climbing > div:not(:nth-child(1)) {
        position: absolute;
        top: 0;
        right: 0;
        width: 14px;
        height: 2px;
        border-radius: 0;
        -webkit-transform: translate(60%, 0);
        -moz-transform: translate(60%, 0);
        -ms-transform: translate(60%, 0);
        -o-transform: translate(60%, 0);
        transform: translate(60%, 0);
        -webkit-animation: ball-climbing-dot-steps 1.8s linear infinite;
        -moz-animation: ball-climbing-dot-steps 1.8s linear infinite;
        -o-animation: ball-climbing-dot-steps 1.8s linear infinite;
        animation: ball-climbing-dot-steps 1.8s linear infinite;
    }

    .ball-climbing > div:not(:nth-child(1)):nth-child(2) {
        -webkit-animation-delay: 0ms;
        -moz-animation-delay: 0ms;
        -o-animation-delay: 0ms;
        animation-delay: 0ms;
    }

    .ball-climbing > div:not(:nth-child(1)):nth-child(3) {
        -webkit-animation-delay: -600ms;
        -moz-animation-delay: -600ms;
        -o-animation-delay: -600ms;
        animation-delay: -600ms;
    }

    .ball-climbing > div:not(:nth-child(1)):nth-child(4) {
        -webkit-animation-delay: -1200ms;
        -moz-animation-delay: -1200ms;
        -o-animation-delay: -1200ms;
        animation-delay: -1200ms;
    }

    /*
     * Animations
     */
    @-webkit-keyframes ball-climbing-dot-jump {
        0% {
            -webkit-transform: scale(1, .7);
            transform: scale(1, .7);
        }
        20% {
            -webkit-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        40% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        50% {
            bottom: 125%;
        }
        46% {
            -webkit-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        80% {
            -webkit-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        90% {
            -webkit-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        100% {
            -webkit-transform: scale(1, .7);
            transform: scale(1, .7);
        }
    }

    @-moz-keyframes ball-climbing-dot-jump {
        0% {
            -moz-transform: scale(1, .7);
            transform: scale(1, .7);
        }
        20% {
            -moz-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        40% {
            -moz-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        50% {
            bottom: 125%;
        }
        46% {
            -moz-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        80% {
            -moz-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        90% {
            -moz-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        100% {
            -moz-transform: scale(1, .7);
            transform: scale(1, .7);
        }
    }

    @-o-keyframes ball-climbing-dot-jump {
        0% {
            -o-transform: scale(1, .7);
            transform: scale(1, .7);
        }
        20% {
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        40% {
            -o-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        50% {
            bottom: 125%;
        }
        46% {
            -o-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        80% {
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        90% {
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        100% {
            -o-transform: scale(1, .7);
            transform: scale(1, .7);
        }
    }

    @keyframes ball-climbing-dot-jump {
        0% {
            -webkit-transform: scale(1, .7);
            -moz-transform: scale(1, .7);
            -o-transform: scale(1, .7);
            transform: scale(1, .7);
        }
        20% {
            -webkit-transform: scale(.7, 1.2);
            -moz-transform: scale(.7, 1.2);
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        40% {
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -o-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        50% {
            bottom: 125%;
        }
        46% {
            -webkit-transform: scale(1, 1);
            -moz-transform: scale(1, 1);
            -o-transform: scale(1, 1);
            transform: scale(1, 1);
        }
        80% {
            -webkit-transform: scale(.7, 1.2);
            -moz-transform: scale(.7, 1.2);
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        90% {
            -webkit-transform: scale(.7, 1.2);
            -moz-transform: scale(.7, 1.2);
            -o-transform: scale(.7, 1.2);
            transform: scale(.7, 1.2);
        }
        100% {
            -webkit-transform: scale(1, .7);
            -moz-transform: scale(1, .7);
            -o-transform: scale(1, .7);
            transform: scale(1, .7);
        }
    }

    @-webkit-keyframes ball-climbing-dot-steps {
        0% {
            top: 0;
            right: 0;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            top: 100%;
            right: 100%;
            opacity: 0;
        }
    }

    @-moz-keyframes ball-climbing-dot-steps {
        0% {
            top: 0;
            right: 0;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            top: 100%;
            right: 100%;
            opacity: 0;
        }
    }

    @-o-keyframes ball-climbing-dot-steps {
        0% {
            top: 0;
            right: 0;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            top: 100%;
            right: 100%;
            opacity: 0;
        }
    }

    @keyframes ball-climbing-dot-steps {
        0% {
            top: 0;
            right: 0;
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
        100% {
            top: 100%;
            right: 100%;
            opacity: 0;
        }
    }

</style>
