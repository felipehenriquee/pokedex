<template>
  <div class="resultSearch container">
    <h1 v-if="!resultSearch">Nenhum Pokémon encontrado</h1>
    <Card v-if="resultSearch" :id="resultSearch.id" :name="resultSearch.name" :types="resultSearch.types" :sprites="resultSearch.sprites"></Card>
  </div>
</template>
  
<script>
  import Card from "../components/card.vue"
  export default {
    name: 'Search',
    components: {

      Card
    },
    props: {
      resultSearch: {
        type: [String],
        default: "",
      },
    },
    computed: {


    },
    methods: {
      voltar() {
       
        this.$emit('change-page', 0);
      },
    },
  };
</script>
  
<style lang="scss" scoped>

</style>