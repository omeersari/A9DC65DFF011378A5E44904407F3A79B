const Mutations = {
    SET_PRODUCT_LIST(state, payload) {
        state.productList = payload;
    },
    SET_FILTERED_LIST(state,payload) {
      state.filteredList = payload
    },
    SLICE_FILTERED_LIST(state, payload) {
      const index = (payload - 1) * 10
      state.filteredList.slice(index, index + 10)
    },
    SORT_LIST(state, payload) {
        state.productList = state.productList.sort((a, b) => {
            if (payload) {
              return parseFloat(a.variants[0].price - b.variants[0].price)
            } else {
              return parseFloat(b.variants[0].price - a.variants[0].price)
            }
          })
    },
    SET_ITEM(state, payload) {
      state.item = payload
    }
}

export default Mutations