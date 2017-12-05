import Vue from 'vue'
import Router from 'vue-router'
import InsuranceSchema from '@/components/InsuranceSchema'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'InsuranceSchema',
      component: InsuranceSchema
    }
  ]
})
