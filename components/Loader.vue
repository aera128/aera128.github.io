<template lang="html">
  <div
    class="
      loader
      fixed
      z-50
      w-full
      h-full
      overflow-hidden
      flex
      justify-center
      items-center
      bg-base-100
      transition-all
      duration-700
      top-0
    "
    ref="loader"
  >
      <span
        class="text-5xl font-black animate-bounce"
        ref='title'
        >‍💻🎹aera128
      </span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.start()
      document.body.classList.add('overflow-hidden')
      setTimeout(() => {
        this.$refs.loader.classList.remove('animate-bounce')
        this.$refs.loader.classList.replace('top-0', '-top-full')
        document.body.classList.remove('overflow-hidden')
      }, 2000)
    })
  },
  data: () => ({
    loading: true,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
</style>
