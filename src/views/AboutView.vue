<template>
  <div>
    <div class="pokemon centralizado container">

    <div class="centralizado imgPokemon" style="width:100%">
      <ImgCard v-if="pokemon"
        :color1="color1" 
        :color2="color2"
        :sprites="pokemon.sprites"
        :sprite-type="icon"
      ></ImgCard>
    </div>
    <div class="textoInfo">
      <div class="info centralizado">
        <h2>{{pokemon.name}}</h2>
        <div class="types centralizado">
          <p>TYPE: </p>
          <p v-for="tipo in pokemon.types" :key="tipo">
            {{tipo.type.name}}
          </p>
        </div>
        <router-link :to="{ path: `${id+1}` }" class="btnProximoPokemon" @click="getPokemon(id+1)">
          Próximo Pokémon
        </router-link>

      </div>
      <div class="statsPokemon">
        <StatsPokemon         
        :color1="color1" 
        :color2="color2"
        :stats="pokemon.stats"
        ></StatsPokemon> 
      </div>
    </div>

  </div>
  </div>
</template>
<script>
import PokedexService from "@/services/pokedex.service"
import ImgCard from '../components/imgCard.vue'
import StatsPokemon from '../components/statsPokemon.vue'


export default {
  name: 'HomeView',
  components: {
    StatsPokemon,
    ImgCard,

  },
  data() {
    return {
      pokemon: "",
      resultSearch:"",
      colors: [
        {
          name: "grass",
          color1: "#78C850",
          color2: "#6D6D4E",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fgrass.svg?alt=media&token=1562f763-54de-46cf-82be-89879220079e"
        },
        {
          name: "fairy",
          color1: "#ffb7fa",
          color2: "#b8b8d0",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Ffairy.svg?alt=media&token=797cbde7-8cc7-4e32-88fa-918c632cbcc1"
        },
        {
          name: "fire",
          color1: "#F08030",
          color2: " #9C531F",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Ffire.svg?alt=media&token=458b999a-4a2b-4bf2-8e7b-be0926c7e3d5"
        },
        {
          name: "water",
          color1: "#6890F0",
          color2: " #445E9C",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fwater.svg?alt=media&token=5e681477-4f46-465e-a2d6-00731be067ca"
        }, 
        { 
          name: "electric",
          color1: "#F8D030",
          color2: "#A1871F",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Feletric.svg?alt=media&token=9576a768-5697-4b79-9a57-6da91652ac06"
        },
        { 
          name: "ice" ,
          color1: "#98D8D8",
          color2: "#638D8D",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fice.svg?alt=media&token=2626cc6d-34e2-4e57-8049-67a506c3f866"
        },

        { 
          name: "ground",
          color1: "#E0C068",
          color2: "#927D44",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fground.svg?alt=media&token=2511ae22-5fa0-4dea-9950-5e70d807917f"
        },

        { 
          name: "flying",
          color1: "#A890F0",
          color2: "#6D5E9C",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fflying.svg?alt=media&token=5fc55ffc-fbcf-4bfb-b041-39a5d6dffe02"
        },

        { 
          name: "ghost",
          color1: "#705898",
          color2: "#493963",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fghost.svg?alt=media&token=8dbc1acd-0641-4485-9ee1-c07134526c35"
        },

        { 
          name: "rock",
          color1: "#B8A038",
          color2: "#786824",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Frock.svg?alt=media&token=67c86f08-9160-4f1f-ac93-ee1a7dff7f20"
        },

        { 
          name: "fighting",
          color1: "#C03028",
          color2: "#7D1F1A",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Ffighting.svg?alt=media&token=c8bfd220-2588-48bf-a83a-63fcb33bc92e"
        },

        { 
          name: "poison",
          color1: "#A040A0",
          color2: "#682A68",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fpoison.svg?alt=media&token=eb11243f-1738-4ff8-a4bf-074c40de5c38"
        },

        { 
          name: "psychic",
          color1: "#F85888",
          color2: "#A13959",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fpsychic.svg?alt=media&token=a593c7ae-b56a-45e1-b0bd-b08b00e1603a"
        },

        { 
          name: "bug",
          color1: "#A8B820",
          color2: "#6D7815",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fbug.svg?alt=media&token=565ad81d-b64d-4395-9f64-18fe4e01bd9a"
        },

        { 
          name: "dark",
          color1: "#705848",
          color2: "#49392F",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fdark.svg?alt=media&token=e8ee6340-8b40-4369-a4b1-8c7383287dd9"
        },

        { 
          name: "steel",
          color1: "#B8B8D0",
          color2: "#787887",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fsteel.svg?alt=media&token=8eab3ed1-7dc3-4eea-9225-90644bde4800"
        },

        { 
          name: "dragon",
          color1: "#7038F8",
          color2: "#4924A1",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fdragon.svg?alt=media&token=e5462577-7e60-4272-a09e-947aaa8a2aec"
        },
        {
          name: "normal",
          color1: "#A8A878",
          color2:  "#6D6D4E",
          icon: "https://firebasestorage.googleapis.com/v0/b/bird-9fcef.appspot.com/o/pokemon%2Fnormal.svg?alt=media&token=eca48a9e-2ae5-46d8-a92d-7d8aa5361bb3"
      }
      ],
      color1: "#78C850",
      color3: "#78C850",
      icon: "#78C850",
      id: parseInt(this.$route.params.id)
    }
  },
  mounted () {
    this.getPokemon(this.id);
    
  },
  methods: {
    getPokemon(value){
      this.id = value
      PokedexService.getOne(value).then((res) =>{
        this.pokemon = res.data;
        console.log(this.pokemon.types[0]);
        this.chooseBackground(this.pokemon.types[0].type.name)
      }).catch((err) =>{
        console.log(err)
        this.pokemon = ""

      })
    },
    chooseBackground (nameType){
      let resultColor = this.colors[0]
      this.colors.map((resColors) => {
      
          if (resColors.name == nameType){
            resultColor = resColors
            this.color1 = resColors.color1
            this.color2 = resColors.color2
            this.icon= resColors.icon
          }
      })
      return resultColor;
    },

  }


}
</script>
<style lang="scss" scoped>
  .centralizado{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .pokemon{
    margin-top: 40px;
    width: 100%;
    
    > .textoInfo{
      width: 100%;
      > .info{
        position: relative;
        width: 100%;
        background: rgba(255, 255, 255, 0.059);
        color: white;
        align-items: flex-start;
        padding: 5%;
        position: relative;
        margin-top: 5%;
        > .types{
          flex-direction: row;
          width: 100%;
          justify-content: flex-start;
          > p{
            flex-direction: row;
            text-transform: uppercase;
            margin-right: 2%;
          }
        }
        > h2 {
          text-transform: uppercase;
        }
        &:before{
          content: "";
          position: absolute;
          width: 30px;
          height: 5px;
          background: v-bind('color1');
          top: -2px;
        }
        > .btnProximoPokemon{
          position: absolute;
          background: transparent;
          border: 2px solid v-bind('color1');
          color: white;
          padding: 2%;
          right: 1%;
          bottom: -20px;
          text-decoration: none;
        }
      }
    }
    > .imgPokemon{
      position: relative;
      
    }


  }
  @media screen and (min-width: 765px) {
    .pokemon{
      margin-top: 40px;
      width: 100%;

      .textoInfo{
        
        > .info{
          position: relative;
          width: 100%;
          background: rgba(255, 255, 255, 0.059);
          color: white;
          align-items: flex-start;
          padding: 3%;
          position: relative;
          margin-top: 5%;
          
          > .types{
            flex-direction: row;
            width: 100%;
            justify-content: flex-start;
            > p{
              flex-direction: row;
              text-transform: uppercase;
              margin-right: 2%;
            }
          }
          > h2 {
            text-transform: uppercase;
          }
          &:before{
            content: "";
            position: absolute;
            width: 30px;
            height: 5px;
            background: v-bind('color1');
            top: -2px;
          }
          > .btnProximoPokemon{
            position: absolute;
            background: transparent;
            border: 2px solid v-bind('color1');
            color: white;
            padding: 0.5%;
            right: 1%;
            bottom: -20px;
          }

        }
        > .statsPokemon{
            margin-top: -3%;
        }
      }
      > .imgPokemon{
        position: relative;
        
      }



  }

  }
</style>