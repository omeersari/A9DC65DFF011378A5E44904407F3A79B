import { mount } from '@vue/test-utils'
import Header from '../components/Header.vue'


test('displays message', () => {
  const wrapper = mount(Header)
  expect(wrapper.text()).toContain('simpleshop')
})