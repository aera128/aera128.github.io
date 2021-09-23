<template lang="html">
  <section class="about" id="sec-about">
    <div class="container mx-auto">
      <h2 class="mb-5 text-4xl font-bold pt-4">ℹ️ About</h2>
      <div class="alert">
        I'm a web developer who just graduated from a master in computer
        science. I keep up with new technologies and I like to have fun creating
        things. I'm also very passionate about music.
      </div>
    </div>
    <div>
      <div
        class="
          container
          mx-auto
          flex flex-col
          items-start
          md:flex-row
          my-12
          md:my-24
        "
      >
        <div
          class="
            flex flex-col
            w-full
            sticky
            md:top-10
            lg:w-1/3
            mt-2
            md:mt-12
            px-8
          "
        >
          <h2 class="mb-5 text-4xl font-bold">📜 Degrees</h2>
        </div>
        <div class="ml-0 lg:ml-12 lg:w-2/3 sticky">
          <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-10 h-full">
              <div
                class="
                  border-2-2 border-primary
                  absolute
                  h-full
                  border
                  left-1/2
                "
              ></div>
              <div
                class="
                  mb-32
                  flex
                  justify-between
                  items-center
                  w-full
                  right-timeline
                "
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-left">
                  <p class="mb-3 text-base text-primary">2019-2021</p>
                  <h4 class="mb-3 font-bold text-lg md:text-2xl">
                    IT Master Degree
                  </h4>
                  <p class="text-sm md:text-base leading-snug">
                    Graduated from a Master in Computer Science at the
                    University of Caen Normandy
                  </p>
                </div>
              </div>
              <div
                class="
                  mb-8
                  flex
                  justify-between
                  flex-row-reverse
                  items-center
                  w-full
                  left-timeline
                "
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <p class="mb-3 text-base text-primary">2018-2019</p>
                  <h4 class="mb-3 font-bold text-lg md:text-2xl">
                    IT Bachelor's degree
                  </h4>
                  <p class="text-sm md:text-base leading-snug">
                    Graduated of a Computer Science degree at the University of
                    Caen Normandy
                  </p>
                </div>
              </div>
              <div
                class="
                  mb-8
                  flex
                  justify-between
                  items-center
                  w-full
                  right-timeline
                "
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-left">
                  <p class="mb-3 text-base text-primary">2016-2018</p>
                  <h4 class="mb-3 font-bold text-lg md:text-2xl">IT DUT</h4>
                  <p class="text-sm md:text-base leading-snug">
                    Graduated of a Computer Science DUT degree at the IUT of the
                    University of Caen Normandy
                  </p>
                </div>
              </div>
            </div>
            <img
              class="mx-auto -mt-36 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'about',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.about {
}
</style>
