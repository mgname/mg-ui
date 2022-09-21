// 整个包的入口

// 统一导入
import MgButton from './button.vue'
import MgDialog from './dialog.vue'
import MgInput from './input.vue'
import MgSwitch from './switch.vue'
import MgRadio from './radio.vue'
import MgRadioGroup from './radio-group.vue'
import MgCheckbox from './checkbox.vue'
import MgCheckboxGroup from './checkbox-group.vue'
import MgForm from './form.vue'
import MgFormItem from './form-item.vue'
import './fonts/font.scss'

// 存储组件列表
const components = [
  MgButton,
  MgDialog,
  MgInput,
  MgSwitch,
  MgRadio,
  MgRadioGroup,
  MgCheckbox,
  MgCheckboxGroup,
  MgForm,
  MgFormItem
]

function install (Vue) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}

// 判断是否是直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
