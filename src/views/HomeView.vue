<template>
  <div class="home">
    <header class="header">
      <Navbar @search-pokemon="searchPokemon"></Navbar>
    </header>
    
    <main class="main container" v-if="pokemons.length>0">
      <section class="pokemonCard centralizado">
        <div v-for="pokemon in pokemons" :key="pokemon">
          <Card :id="pokemon.status?.id" :name="pokemon.name" :types="pokemon.status.types" :sprites="pokemon.status.sprites"></Card>
        </div>

      </section>
    </main>
    <Search :resultSearch="resultSearch" v-if="pokemons.length==0"></Search>
    <Pagination :limit="limit" :offset="offset" :total="total" @change-page="changePage" v-if="pokemons.length>0"></Pagination>
  </div>
  
</template>

<script>
// @ is an alias to /src
import PokedexService from "@/services/pokedex.service"
import Pagination from '../components/pagination.vue'
import Navbar from '../components/navbar.vue'
import Search from '../components/search.vue'
import Card from '../components/card.vue'

export default {
  name: 'HomeView',
  components: {
    Pagination,
    Navbar,
    Search,
    Card
  },
  data() {
    return {
      pokemons: [],
      resultSearch:"",
      colors: [
        {
          name: "grass",
          color1: "#78C850",
          color2: "#6D6D4E",
        },
        {
          name: "fire",
          color1: "#F08030",
          color2: " #9C531F",
        },
        {
          name: "water",
          color1: "#6890F0",
          color2: " #445E9C",
        }, 
        { 
          name: "electric",
          color1: "#F8D030",
          color2: "#A1871F",
        },
        { 
          name: "ice" ,
          color1: "#98D8D8",
          color2: "#638D8D",
        },

        { 
          name: "ground",
          color1: "#E0C068",
          color2: "#927D44",
        },

        { 
          name: "flying",
          color1: "#A890F0",
          color2: "#6D5E9C",
        },

        { 
          name: "ghost",
          color1: "#705898",
          color2: "#493963",
        },

        { 
          name: "rock",
          color1: "#B8A038",
          color2: "#786824",
        },

        { 
          name: "fighting",
          color1: "#C03028",
          color2: "#7D1F1A",
        },

        { 
          name: "poison",
          color1: "#A040A0",
          color2: "#682A68",
        },

        { 
          name: "psychic",
          color1: "#F85888",
          color2: "#A13959",
        },

        { 
          name: "bug",
          color1: "#A8B820",
          color2: "#6D7815",
        },

        { 
          name: "dark",
          color1: "#705848",
          color2: "#49392F",
        },

        { 
          name: "steel",
          color1: "#B8B8D0",
          color2: "#787887",
        },

        { 
          name: "dragon",
          color1: "#7038F8",
          color2: "#4924A1",
        },
        {
          name: "normal",
          color1: "#A8A878",
          color2:  "#6D6D4E",
      }
      ],
      offset: 0,
      limit: 21,
      total: 0,
    }
  },
  mounted () {
    this.getPokemon();
    
  },
  methods: {

    changePage(value){
      console.log(value)
      this.offset = (value)*this.limit;
      console.log(this.offset)
      this.getPokemon();
    },
    searchPokemon(value){
      console.log(value)
      PokedexService.getOne(value).then((res) =>{
        this.resultSearch = res.data;
        this.pokemons = []
      }).catch((err) =>{
        console.log(err)
        this.resultSearch = ""
        this.pokemons = []
      })
    },
    getPokemon(){
      PokedexService.getAll(this.offset, this.limit).then((res) =>{
      this.pokemons = res.data.results;
      this.total = res.data.count;
      console.log(res.data)
      this.pokemons.map((resPokemons) => {
        
        PokedexService.getUrl(resPokemons.url).then(res2 =>{
          resPokemons.status = res2.data
        })
      })
    });
    }
  }


}
</script>

<style lang="scss">
  .centralizado {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // color: #ff723b;
  }
  .pokemonCard{
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-top: 2%;
    margin-bottom: 2%;
    overflow: auto;
    height: 80vh;
    overflow-x: hidden;
  }
  .pokemonCard::-webkit-scrollbar-track {
    background-color: #F4F4F4;
  }
  .pokemonCard::-webkit-scrollbar {
      height: 5px;
      width: 2px;
      background: #F4F4F4;
  }
  ::-webkit-scrollbar-thumb {
      background: rgb(114, 114, 114);
  } 


  @media screen and (min-width: 700px) {
    
    .pokemonCard{
      display:grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

      grid-gap:7%;
      row-gap:0%;
    }
  }


</style>