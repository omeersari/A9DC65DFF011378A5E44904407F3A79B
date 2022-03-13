<template>
  <div class="container">
    <nuxt-link class="btn btn--back" to="/">go back</nuxt-link>
    <div class="card">
      <div class="card__info--sm">
        <p class="card__info--h5">{{ vendor }}</p>
        <p class="card__info--h1">{{ title }}</p>
      </div>
      <div class="card__img">
        <img class="card__img--lg" :src="mainImage()" alt="Image" />
      </div>
      <div class="card__info">
        <div class="card__info--lg">
          <p class="card__info--h1">{{ title }}</p>
          <p class="card__info--h5">{{ vendor }}</p>
        </div>
        <p class="card__info--price">{{ variants[0].price }}$</p>
        <span class="seperator"></span>
        <div v-for="item in options" :key="item.id">
          <p class="card__info--h3">{{ item.name }}</p>
          <div class="card__options">
            <div
              class="btn btn-text"
              v-for="value in item.values"
              :key="value.id"
            >
              {{ value }}
            </div>
          </div>
        </div>
        <span class="seperator"></span>
        <div class="card__options">
          <div v-for="item in images" :key="item.id" @click="changeMainImage(item)">
            <img class="card__img--sm" :src="item.src" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: '',
      clickedItem: ""
    }
  },
  created() {
    const id = this.$route.params.id
    this.item = this.$store.state.productList.filter((el) => el.id == id)[0]
    this.mainImage()
  },
  computed: {
    title() {
      return this.item.title
    },
    variants() {
      return this.item.variants
    },
    options() {
      return this.item.options
    },
    image() {
        return this.item.image
    },
    images() {
      return this.item.images
    },
    vendor() {
      return this.item.vendor
    },
  },
  methods: {
    mainImage() {
        if (this.clickedItem) {
            return this.clickedItem.src
        }
        else {
            return this.image.src
        }
    },
    changeMainImage(item) {
        this.clickedItem = item
        this.mainImage()
    }
  }
}
</script>
