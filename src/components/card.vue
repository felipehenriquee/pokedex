<template>


    <div class="main" >
      <router-link :to="{ path: `/pokemon/${id}` }" class="cadaCard centralizado">
        <ImgCard 
        :color1="chooseBackground(types[0].type.name).color1" 
        :color2="chooseBackground(types[0].type.name).color2"
        :sprites="sprites"
        :sprite-type="chooseBackground(types[0].type.name).icon"
        ></ImgCard>
        <div class="texto">
        <h5 class="nome">{{id}}-{{name}}</h5>
        <div class="pokemonTypes centralizado">
            
            <div class="cadaTipo" v-for="(tipo) in types" :key="tipo.slot" :style="`background-color: ${chooseBackground(tipo?.type.name).color1}`"> 
            <p>{{tipo?.type.name}}</p>
            </div>
        </div>
        </div>
      </router-link>
    </div>
</template>
<script>
  import ImgCard from '../components/imgCard.vue'
  export default {
    name: 'Card',
    components: {
      ImgCard
    },
    data() {
    return {
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

    }
  },
    props: {
      sprites: {},
      id: {
        type: [Number],
        default: 0,
      },
      name: {
        type: [String],
        default: "",
      },
      types: {}
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
        chooseBackground (nameType){
            let resultColor = this.colors[0]
            this.colors.map((resColors) => {
            
                if (resColors.name == nameType){
                resultColor = resColors
                
                }
            })
            return resultColor;
        },
    },
  };
</script>

<style lang="scss" scoped>
.main{
  margin-left: -5%;
}
  .cadaCard{
   
    position: relative;
    width: 340px;
    height: 400px;
    color: white;
    margin-top: 20px;
    padding: 20px;
    cursor: pointer;
    > .divImg{
      position: relative;
      

      width: 260px;
      height: 260px;
      border-radius: 100%;
  
      
      > img{
        width: 70%;
        z-index: 2;
      }
      

 
    }
    > .texto{
      margin-top: 100px;
      width: 75%;
      
      
    }
    > .texto h5 {
      text-transform: capitalize;
    }

  }

  .circuloExterior{
       
       top: 10px;
       position: absolute;
       left: 40px;
       width: 260px;
       height: 260px;
       -moz-border-radius: 100%;
       -webkit-border-radius: 100%;
       border-radius: 100%;
       border: 5px solid;
       z-index: 1;

       >   .circuloInterior{
        width: 230px;
        height: 230px;
        -moz-border-radius: 100%;
        -webkit-border-radius: 100%;
        border-radius: 100%;
        border: 5px solid ;
        z-index: 1;
        margin-left: 10px;
        margin-top: 10px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        
    }
    

      

  }

  .cortes{
      
      top: 140px;
      position: absolute;
      display: inline-block;
      width: 350px;
      height: 30px;
      left: 5px;
      border-top: 5px solid ;
      border-bottom: 5px solid ;
      transform: rotate(135deg);
      z-index: 1;
  }
  .pokemonTypes {
    flex-direction: row;
    margin-top: 20px;
    // background: black;
    height: 20px;
    width: 100%;

    > .cadaTipo {
      margin-right: 2%;
      width: 35%;
      height: 25px;
      border-radius: 15px;

      margin-top: 2%;
    }
    > .cadaTipo p{
      margin-top: 0;
    }
  }
</style>