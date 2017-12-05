import Vue from 'vue'
import InsuranceSchema from '@/components/InsuranceSchema'

describe('InsuranceSchema.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(InsuranceSchema)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
    .toEqual('Fill out the form')
  })
})
