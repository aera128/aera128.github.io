<template lang="html">
  <section class="bg-base-300 min-h-screen" id="sec-technologies">
    <div class="container mx-auto">
      <h2 class="mb-5 text-4xl font-bold pt-4">🔧 Technologies</h2>
      <div class="grid xl:grid-cols-3 lg:grid-cols-2">
        <div class="p-10">
          <h2 class="text-2xl font-bold mb-3">🖥️ Frontend</h2>
          <div class="mockup-code">
            <pre
              data-prefix="$"
              v-for="code in frontend"
              :key="code"
            ><code>{{code}}</code></pre>
            <vue-typed-js
              :strings="['Done !']"
              :loop="true"
              :typeSpeed="speed"
              :backDelay="delay"
            >
              <pre
                data-prefix="$"
                class="text-success"
              ><code class="typing"></code></pre>
            </vue-typed-js>
          </div>
        </div>
        <div class="p-10">
          <h2 class="text-2xl font-bold mb-3">⚙️ Backend</h2>
          <div class="mockup-code">
            <pre
              data-prefix=">>"
              v-for="code in backend"
              :key="code"
            ><code>{{code}}</code></pre>
            <vue-typed-js
              :strings="['Done !']"
              :loop="true"
              :typeSpeed="speed"
              :backDelay="delay"
            >
              <pre
                data-prefix=">>"
                class="text-success"
              ><code class="typing"></code></pre>
            </vue-typed-js>
          </div>
        </div>
        <div class="p-10">
          <h2 class="text-2xl font-bold mb-3">🌐 Languages</h2>
          <div class="mockup-code">
            <pre
              data-prefix="-"
              v-for="code in languages"
              :key="code"
            ><code>{{code}}</code></pre>
            <vue-typed-js
              :strings="['Done !']"
              :loop="true"
              :typeSpeed="speed"
              :backDelay="delay"
            >
              <pre
                data-prefix="-"
                class="text-success"
              ><code class="typing"></code></pre>
            </vue-typed-js>
          </div>
        </div>
        <div></div>
        <div class="p-10">
          <h2 class="text-2xl font-bold mb-3">⚪ Other</h2>
          <div class="mockup-code">
            <pre
              data-prefix="~"
              v-for="code in other"
              :key="code"
            ><code>{{code}}</code></pre>
            <vue-typed-js
              :strings="['Done !']"
              :loop="true"
              :typeSpeed="speed"
              :backDelay="delay"
            >
              <pre
                data-prefix="~"
                class="text-success"
              ><code class="typing"></code></pre>
            </vue-typed-js>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'technologies',
    props: [],
    mounted () {

    },
    data () {
    return {
      speed: 50,
      delay: 6000,
      frontend: [
        'Vue.js',
        'Nuxt.js',
        'Vuetify',
        'Tailwind',
        'Bootstrap',
      ],
      backend: [
        'Flask',
        'NodeJS',
        'Strapi',
        'Symphony',
        'MySql/Mariadb',
        'MongoDB',
      ],
      languages: [
        'HTML',
        'Javascript',
        'CSS',
        'Python',
        'PHP',
      ],
      other: [
        'Neutralino.js',
        'Vite',
        'SpaCy',
        'Socket.io',
      ]
    }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.technologies {
}
</style>
