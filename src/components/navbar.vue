<template>
  <div class="barra centralizado">
    <div class="logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="search centralizado" >
      <div class="divSearch">
        <input type="text" placeholder="Procurar Pokemon" v-model="namePokemon">
        <button class="searchButton" @click="searchPokemon()">
          <img src="../assets/search.png" alt="">
        </button>
      </div> 
    </div>
    
  </div>
</template>
  
  <script>
  export default {
    name: 'Navbar',
    data() {
    return {
      namePokemon: "",
    }
  },
    props: {

    },
    computed: {


    },
    methods: {
      searchPokemon() {
        
        this.$emit('searchPokemon', this.namePokemon);
      },
    },
  };
  </script>
  
<style lang="scss" scoped>
  .centralizado {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // color: #ff723b;
  }
  .barra{
    width: 100%;
    padding: 1%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid white;
    min-height: 50px;
    min-height: 80px;
    > .logo img{
      width: 60%;
      min-width:38px;
    }
    > .search{
      
      flex-direction: row;
      justify-content: flex-end;
      
      margin-left: 10%;

    }
    > .search .divSearch{
      border: 1px solid white;
      width: 290px;
      border-radius: 15px;
      
    }
    > .search input{
      
      background: transparent;
      color: white;
      border: 0px;
      padding-left: 1%;
      border-radius: 15px  0 0 15px;
    }
    > .search button{
      background: transparent;
      border: 0px solid white;
      border-left: 1px solid white;
      width: 60px;
      height: 30px;
      
    }
    > .search button img {
      width: 40%;
    }
  }
</style>