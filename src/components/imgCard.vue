<template>
    <div class="main">
        <div class="divImg centralizado">
            <img v-if="sprites.other.home.front_default" :src="sprites.other.home.front_default" alt="">
            <img v-else-if="sprites.front_default==null" src="../assets/null.png" alt="">
            <img v-else :src="sprites.front_default" alt="">
        </div>
                    
        <span class="circuloExterior"  :style="`border-color: ${color2}`">
              <span class="circuloInterior centralizado" 
              :style="`border-color: ${color1};`">
              </span>
        </span>
        <span class="cortes"  :style="`border-color: ${color1}`"></span>
        <img class='spriteType' :src="spriteType" alt="">
    </div>
</template>
<script>
  
  export default {
    name: 'ImgCard',
    data() {
    return {
    }
  },
    props: {
      sprites: {},
      color1: {
        type: [String],
        default: "",
      },
      color2: {
        type: [String],
        default: "",
      },
      sprites: {},
      spriteType: {
        type: [String],
        default: "",
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
    
    width: 300px;
    height: 300px;
   
    position: relative;
    > .divImg{
      position: absolute;
      width: 260px;
      height: 260px;
      border-radius: 100%;
      left: 40px;
      top: 0px;
      > img{
        width: 70%;
        z-index: 2;
      }
    
    }



    > .circuloExterior{
        
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

      > .circuloInterior{
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

    > .cortes{
        
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
    > .spriteType{
      position: absolute;
      width:260px;
      height: 260px;
      left: 40px;
      top: 10px;
      opacity: 0;
      transition: 1s;
    }
    & :hover > .spriteType {
      opacity: 0.5;
    }
  }
</style>