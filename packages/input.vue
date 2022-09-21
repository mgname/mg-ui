<template>
  <div class="mg-input" :class="{ 'mg-input--suffix' : showSuffix }">
    <!-- 如果传了show-password，判断是否需要切换密码分显示，如果不传，不判断 -->
    <input
      :class="['mg-input__inner', {'is-disabled':disabled}]"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="mg-input__suffix" v-show="showSuffix">
      <i class="mg-input__icon mg-icon-qian" v-show="clearable && value" @click="clear"></i>
      <i
        class="mg-input__icon mg-icon-kefu"
        :class="{ 'active' : passwordVisible }"
        v-show="showPassword && value"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MgInput',
  data () {
    return {
      // 用于控制是否显示密码
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      console.log(this.showPassword)
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style scoped lang="scss">
.mg-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  .mg-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 10px 15px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.mg-input--suffix {
  .mg-input_inner {
    padding-right: 30px;
  }
  .mg-input__suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    cursor: pointer;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645, .045, .355, 1);
    }
    .active {
      color: #666;
    }
  }
}
</style>
