<template>
  <div class="container">
    <div class="inpt">
      <input
        v-model="search"
        class="inpt--search"
        type="text"
        placeholder="Search product name"
      />
    </div>
    <div class="table">
      <div class="table__item">
        <div class="table__item--h2">Image</div>
        <div class="table__item--h3">Name</div>
        <div class="table__item--h3">
          Price
          <div class="fas fa-sort" @click="sortByPrice()"></div>
          <span class="table__item--info"></span>
        </div>
      </div>
      <div
        class="table__item"
        v-for="item in filteredProducts"
        :key="item.id"
        @click="goToItem(item)"
      >
        <div class="table__item--lgcenter">
          <img
            class="table__item--img"
            :src="item.image.src"
            alt="item-image"
          />
        </div>
        <div class="table__item--title">{{ item.title }}</div>
        <div class="table__item--price">{{ item.variants[0].price }}$</div>
      </div>
    </div>
    <pagination
      :totalPages="getLen"
      :perPage="10"
      :currentPage="currentPage"
      @pagechanged="onPageChange"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Pagination from '~/components/Pagination.vue'
export default {
  components: { Pagination },
  name: 'IndexPage',
  async asyncData({ $axios, error }) {
    try {
      const response = await $axios.$get('products')
      return { data: response }
    } catch (e) {
      error({ statusCode: e.response.status, message: e.message })
    }
  },
  data() {
    return {
      search: '',
      sorted: false,
      currentPage: 1,
    }
  },
  created() {
    this.SET_PRODUCT_LIST(this.data.products)
  },
  computed: {
    getLen() {
      if (!this.search) {
        return this.$store.state.productList.length / 10
      }
      else {
        return Math.ceil(this.$store.state.filteredList.length / 10)
      }
      
    },
    products() {
      return this.data.products
    },
    filteredProducts() {
      const index = (this.currentPage - 1) * 10
      if (!this.search) {
        return this.products.slice(index, index + 10)
      } else {
        this.currentPage = 1
        const searchText = this.search.toLowerCase()
        const newList = this.$store.state.productList.filter((item) =>
          item.title.toLowerCase().includes(searchText)
        )
        this.SET_FILTERED_LIST(newList)
        return this.$store.state.filteredList.slice(index, index + 10)
      }
    },
  },
  methods: {
    ...mapMutations(['SET_PRODUCT_LIST', 'SORT_LIST', "SET_FILTERED_LIST"]),
    goToItem(item) {
      this.$router.push({ path: `/detail/${item.id}` })
    },
    sortByPrice() {
      this.SORT_LIST(this.sorted)
      this.sorted = !this.sorted
      this.currentPage = 1
    },
    onPageChange(page) {
      this.currentPage = page
    },
  },
}
</script>


