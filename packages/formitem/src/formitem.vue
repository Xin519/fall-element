<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p v-if="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
    name:'LgFormItem',
    inject: ['form'],
    props: {
      label:{
        type: String
      },
      prop:{
        type: String
      }
    },
    mounted() {
      this.$on('validate', () => {
        this.validate()
      })
    },
    data () {
      return {
        errMsg: ''
      }
    },
    methods: {
      validate() {
        if(!this.prop) return
        const val = this.form.model[this.prop]
        const rules = this.form.rules[this.prop]

        const descriptor = { [this.prop]: rules }
        const valodator = new AsyncValidator(descriptor)
        return valodator.validate({ [this.prop]: val }, errors => {
          if(errors) this.errMsg = errors[0].message
          else this.errMsg = ''
        })
      }
    }
}
</script>

<style>

</style>
