<template>
    <div class="main centralizado">
      <div class="info centralizado">
        <div class="cadaInfo centralizado" v-if="stats">
          <p>HP: {{stats[0].base_stat}}</p>
  
          <div class="barra">
            <div class="valorBarra valorBarraHp" :style="`width: ${calcularStats(stats[1].base_stat)}%`"></div>
          </div>
        </div>
        <div class="cadaInfo centralizado" v-if="stats">
          <p>ATTACK: {{stats[1].base_stat}}</p>
  
          <div class="barra">
            <div class="valorBarra" :style="`width: ${calcularStats(stats[1].base_stat)}%`"></div>
          </div>
        </div>
        <div class="cadaInfo centralizado" v-if="stats">
          <p>DEFENSE: {{stats[2].base_stat}}</p>
  
          <div class="barra">
            <div class="valorBarra" :style="`width: ${calcularStats(stats[2].base_stat)}%`"></div>
          </div>
        </div>
        <div class="cadaInfo centralizado" v-if="stats">
          <p>SPECIAL ATTACK: {{stats[3].base_stat}}</p>
  
          <div class="barra">
            <div class="valorBarra" :style="`width: ${calcularStats(stats[3].base_stat)}%`"></div>
          </div>
        </div>
        <div class="cadaInfo centralizado" v-if="stats">
          <p>SPECIAL DEFENSE: {{stats[4].base_stat}}</p>
  
          <div class="barra">
            <div class="valorBarra" :style="`width: ${calcularStats(stats[4].base_stat)}%`"></div>
          </div>
        </div>
        <div class="cadaInfo centralizado" v-if="stats">
          <p>SPEED: {{stats[5].base_stat}}</p>
          
          <div class="barra">
            <div class="valorBarra" :style="`width: ${calcularStats(stats[5].base_stat)}%`"></div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
  
  export default {
    name: 'StatsPokemon',
    data() {

  },
    props: {
      stats: {},
      color1: {
        type: [String],
        default: "",
      },
      color2: {
        type: [String],
        default: "",
      },
    },
    computed: {
      hp() {
        return this.calcularStats(this.stats[0].base_stat)
      }
    },

    methods: {
      calcularStats(stats){
        console.log(this.stats)
        let result = (100*stats)/200
        console.log(result)
        return result
      }
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
  .main{
    color: white;
    width: 100%;
    margin-top: 10%;
   
    position: relative;
    > .info {
      width: 100%;
      > .cadaInfo{
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        >.barra{
          width: 48%;
          height: 20px;
          margin-top: -1%;
          > .valorBarra{
            background-color: v-bind('color1');
            height: 5px;
            border-radius: 20px;
            width: 0;
          }

        }
        > p{
          width: 48%;
          text-align: right;
          
        }
      }
    }

  }


</style>