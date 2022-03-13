<template>
  <ul class="pagination">
    <li>
      <button
        class="btn btn--pagination"
        :class="isInFirstPage ? 'btn--disabled' : ''"
        @click="onClickFirstPage"
        :disabled="isInFirstPage"
      >
        First
      </button>
    </li>

    <li v-for="page in pages" :key="page.name">
      <button
        class="btn btn--pagination"
        :disabled="page.isDisabled"
        :class="page.isDisabled ? 'btn--disabled' : ''"
        @click="onClickPage(page.name)"
      >
        {{ page.name }}
      </button>
    </li>

    <li>
      <button
        class="btn btn--pagination"
        @click="onClickLastPage"
        :disabled="isInLastPage"
        :class="isInLastPage ? 'btn--disabled' : ''"
      >
        Last
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1
      }

      // When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons
      }

      // When inbetween
      return this.currentPage - 1
    },
    pages() {
      const range = []

      for (
        let i = this.startPage;
        i <= Math.min(this.startPage + this.maxVisibleButtons , this.totalPages);
        i++
      ) {
        if (i > 0) {
          range.push({
            name: i,
            isDisabled: i === this.currentPage,
          })
        }
      }

      return range
    },
    isInFirstPage() {
      return this.currentPage === 1
    },
    isInLastPage() {
      return this.currentPage === this.totalPages
    },
  },

  // call pageChange method in parent
  methods: {
    // to go to the first page
    onClickFirstPage() {
      this.$emit('pagechanged', 1)
    },

    onClickPage(page) {
      this.$emit('pagechanged', page)
    },

    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages)
    },
  },
}
</script>