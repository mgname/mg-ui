<template>
  <label :for="name" class="mg-switch" :class="{ 'is-checked': value }" @click="handleClick">
    <input :name="name" class="mg-switch__input" type="checkbox" ref="input">
    <span class="mg-switch__core" ref="core">
      <span class="mg-switch__button"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'MgSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#dcdfe6'
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
      this.$nextTick(() => {
        // 点击修改背景色
        this.setColor()
      })
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.background = color
        this.$refs.core.style.borderColor = color
      }
      this.$refs.input.checked = this.value
    }
  },
  mounted () {
    // 修改开关的颜色
    this.setColor()
  }
}
</script>

<style scoped lang="scss">
.mg-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .mg-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .mg-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .mg-switch__button {
      content: '';
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  &.is-checked .mg-switch__core {
    background-color: #409eff;
    border-color: #409eff;
    .mg-switch__button {
      transform: translateX(20px);
    }
  }
  &.is-disabled .mg-switch__core {
    cursor: not-allowed;
  }
  &.is-mimicry .mg-switch__core {
    box-shadow: inset 4px 2px 6px #cacaca48,
      inset -4px -2px 6px rgba(255, 255, 255, 0.247);
  }
  &.is-mimicry .mg-switch__button {
    box-shadow: inset 2px 1px 3px #d9d9d9, inset -2px -1px 3px #ffffff;
  }
}
</style>
