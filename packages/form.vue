<template>
  <div class="mg-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MgForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style>

</style>
