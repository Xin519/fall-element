import LgFormItem from './src/formitem.vue'

LgFormItem.install = Vue => {
  Vue.component(LgFormItem.name, LgFormItem)
}
console.log('test')
export default LgFormItem
