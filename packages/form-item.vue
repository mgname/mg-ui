
<template>
  <div class="mg-form-item">
    <label class="mg-form-item__label" :style="{ width: this.Form.labelWidth }">
      {{ label }}
    </label>
    <div class="mg-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MgFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style scoped lang="scss">
.mg-form-item {
  margin-bottom: 22px;
  &::before,
  &::after {
    display: table;
    content: '';
  }
  .mg-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .mg-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    &::before,
    &::after {
      display: table;
      content: '';
    }
  }
}
</style>
