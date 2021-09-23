<template lang="html">
  <section id="sec-projects" class="min-h-screen bg-base-100">
    <div class="container mx-auto">
      <h2 class="mb-5 text-4xl font-bold pt-4">💻🎹 Projects</h2>
    </div>
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      style="margin-top: -20px"
    >
      <swiper-slide
        class="hero md:p-28 p-8"
        v-for="(project, i) in $store.state.projects"
        :key="i"
      >
        <div
          class="
            card
            text-justify
            shadow-inner
            w-full
            transition-all
            duration-300
            ease-in-out
            transform
            hover:rotate-0
            -rotate-3
            hover:scale-110
            scale-95
            bg-primary
            md:mt-0
            mt-20
          "
        >
          <figure class="px-6 mt-6">
            <img :src="project.image" class="rounded-xl shadow-2xl" />
          </figure>
          <div class="card-body justify-end">
            <h2 class="card-title text-4xl font-black">{{ project.title }}</h2>
            <p class="font-bold">{{ project.description }}</p>
            <div class="justify-end card-actions">
              <a
                class="btn btn-outline btn-square"
                :href="project.links.github"
                target="_blank"
                v-if="project.links.github !== null"
              >
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
              </a>
              <a
                class="btn btn-outline btn-square"
                :href="project.links.website"
                target="_blank"
                v-if="project.links.website !== null"
              >
                <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M21,12L14,5V9C7,10 4,15 3,20C5.5,16.5 9,14.9 14,14.9V19L21,12Z"
                  />
                </svg>
              </a>
              <button
                class="btn btn-outline btn-square"
                v-if="project.links.route !== null"
              >
                More info
              </button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div
        class="swiper-pagination swiper-pagination-bullets"
        slot="pagination"
      ></div>
    </swiper>
  </section>
</template>

<script lang="js">
import {directive, Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  export default  {
    name: 'projects',
    props: [],
      components: {
    Swiper,
    SwiperSlide
  },
    mounted () {

    },
    data() {
      return {
        swiperOptions: {
          breakpoints: {
            // when window width is >= 320px
            1280: {
              slidesPerView: 2,
            },
          },
          slidesPerView: 1,
          grabCursor: true,
          // autoplay: {
          //   delay: 5000,
          //   disableOnInteraction: false
          // },
          freeMode: true,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          },
          // Some Swiper option/callback...
        }
      }
    },
    methods: {

    },
    computed: {
    }
}
</script>

<style lang="scss">
.swiper-pagination-bullet {
  width: 50px !important;
  height: 5px !important;
  border-radius: 5px;
  background-color: #1eb854;
  background-color: rgba(30, 184, 84, 1);
}

.swiper-pagination-bullet-active {
}

.swiper-button-next,
.swiper-button-prev {
  background-color: #1eb854;
  background-color: rgba(30, 184, 84, 0.5);
  border-radius: 50px;
  width: 20px;
  height: 20px;
  right: 10px;
  padding: 25px;
  color: #000 !important;
  fill: black !important;
  stroke: black !important;
  transition: background-color 300ms;
}

.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: rgba(30, 184, 84, 1);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 1.2em !important;
  font-weight: bolder !important;
}
</style>
