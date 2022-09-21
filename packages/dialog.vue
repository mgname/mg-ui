<template>
  <transition name="dialog-fade">
    <!-- 对话框遮罩 -->
    <div class="mg-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="mg-dialog" :style="{ width, marginTop: top }">
        <div class="mg-dialog__header">
          <slot name="title">
            <span class="mg-dialog__title">{{ title }}</span>
          </slot>
          <button class="mg-dialog__headerbtn">
            <i class="mg-icon-ziyuan" @click="handleClose"></i>
          </button>
        </div>
        <div class="mg-dialog__body">
          <!-- 默认插槽 -->
          <slot></slot>
        </div>
        <div class="mg-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MgDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
// 重点学习遮罩的实现
.mg-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .mg-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    &__header {
      padding: 20px 20px 10px;
      display: flex;
      justify-content: space-between;
      .mg-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .mg-dialog__headerbtn {
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .mg-icon-ziyuan {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      // CSS 属性 word-break 指定了怎样在单词内断行
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      //   ::v-deep 相当less中的/deep/
      ::v-deep .mg-button:first-child {
        margin-right: 20px;
      }
    }
  }
  // 拟态风格
  .mg-dialog.is-mimicry {
    border-radius: 12px;
    box-shadow: inset 7px 14px 23px #dadada, inset -7px -14px 23px #eeeeee;
  }
}
.dialog-fade-enter-active {
  animation: fade .3s;
}
.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
