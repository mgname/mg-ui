<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MgRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>

</style>
