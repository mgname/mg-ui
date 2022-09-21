<template>
  <div class="mg-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MgCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      checkboxGroup: this
    }
  }
}
</script>

<style>

</style>
