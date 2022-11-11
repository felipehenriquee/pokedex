<template>
    <div class="pagination">
        <button
        v-if="showPrevious"
        class="item prev"
        @click="changePage(0)"
      >
        início
      </button>
      <button
        v-if="showPrevious"
        class="item prev"
        @click="changePage(current - 1)"
      >
        &laquo;
      </button>
      <div         v-for="(page, index) in pages"
        :key="page">
        <button
        v-if="page<current+3 && page>current-3"
        class="item"
        :class="{ current: page === current }"
        @click="changePage(index)"
        >
        {{ page }}
        </button>
      </div>

      <button v-if="showNext" class="item next" @click="changePage(current + 1)">
        &raquo;
      </button>
      <button v-if="showNext" class="item next" @click="changePage(pages.length-1)">
        final
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
      offset: {
        type: [String, Number],
        default: 0,
      },
      total: {
        type: [String, Number],
        required: true,
      },
      limit: {
        type: [String, Number],
        default: 10,
      },
    },
    computed: {
      showPrevious() {
        return this.current > 1;
      },
      showNext() {
        return this.total > this.limit * this.current;
      },
      current() {
        console.log(this.offset/20 + 1)
        return this.offset ? this.offset/this.limit + 1 : 1;
      },
      pages() {
        const qty = Math.ceil(this.total / this.limit);
        if (qty <= 1) return [1];
        return Array.from(Array(qty).keys(), (i) => i + 1);
      },

    },
    methods: {
      changePage(offset) {
        console.log(offset, this.current)
        this.$emit('change-page', offset);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  $light-grey: #cccccc;
  $dark-grey: #333333;

  .pagination {
    display: flex;
    justify-content: center;
    .item {
      padding: 0.5rem 0.75rem;
      background: transparent;
      border: 1px solid white;
      color: white;
      cursor: pointer;
      
      &:hover {
        color: black;
        background-color: $light-grey;
        border-color: lighten($dark-grey, 50%);
        z-index: 3;
      }
      &.current {
        cursor: default;
        color: black;
        background-color: white;
        
        z-index: 2;
      }
      + .item {
        margin-left: -1px;
        margin-right: 0;
      }
    }
  }
  </style>