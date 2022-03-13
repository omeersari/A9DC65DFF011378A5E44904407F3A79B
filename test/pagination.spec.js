import { mount } from '@vue/test-utils'
import Pagination from '../components/Pagination.vue'

test('check props', async () => {
    const wrapper = mount(Pagination, {
        propsData: 
            {
                currentPage: 1,
                perPage: "",
                totalPages: 10
            }
    })  
    expect(wrapper.is(Pagination)).toBe(true)
    expect(wrapper.props().currentPage).toBe(1)
    expect(wrapper.props().perPage).toBeFalsy()
})