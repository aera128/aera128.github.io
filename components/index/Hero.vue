<template lang="html">
  <section class="hero min-h-screen bg-base-300" id="sec-hero">
    <div class="flex-col hero-content lg:flex-row-reverse">
      <canvas id="canvas3d" v-if='!isMobile' class='xl:ml-10'></canvas>
      <img id="canvas3d" :src='require("~/assets/index/blob.png")' v-else/>
      <div v-rellax="{ speed: 7 }" class="lg:text-left text-center">
        <h1 class="mb-5 text-5xl font-bold">👋Hi! I'm aera128</h1>
        <p class="mb-5">
          French Fullstack developer and amateur music composer.
        </p>
        <button class="btn btn-primary" @click="scrollTo">Learn More</button>
      </div>
    </div>
  </section>
</template>

<script lang="js">
  import * as THREE from 'three'
  window.THREE = THREE
  export default  {
    name: 'hero',
    props: [],
    mounted () {
      if(!this.isMobile){
        const SpeRuntime = require('~/assets/index/spline.runtime.min.js').SpeRuntime
        let obj = require('~/assets/index/scene.json')
        const str = JSON.stringify(obj);
        const bytes = new TextEncoder().encode(str);
        const blob = new Blob([bytes], {
            type: "application/json;charset=utf-8"
        });
        new SpeRuntime.Application().start(URL.createObjectURL(blob))
      }
    },
    data () {
      return {

      }
    },
    methods: {
      scrollTo(){
        this.$store.dispatch('scrollTo', '#sec-projects')
      }
    },
    computed: {
      isMobile: () => {
         return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
         }
    }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 1024px) {
  #canvas3d {
    width: 75% !important;
    height: 75% !important;
    transition: all 400ms ease-out;
  }
}
@media screen and (min-width: 1024px) {
  #canvas3d {
    width: 60% !important;
    height: 60% !important;
    transition: all 400ms ease-out;
  }
}
</style>
