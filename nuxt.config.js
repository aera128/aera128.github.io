export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'aera128 - Portfolio',
        htmlAttrs: {
            lang: 'fr',
            'data-theme': 'forest'

        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
            { property: "og:site_name", content: "I Love Painting" },
            { hid: "og:type", property: "og:type", content: "website" },
            {
              hid: "og:url",
              property: "og:url",
              content: "https://aera128.ninja",
            },
            {
              hid: "og:title",
              property: "og:title",
              content: "aera128 - Portfolio",
            },
            {
              hid: "og:description",
              property: "og:description",
              content: "Description, Skills and Formation of aera128",
            },
            {
              hid: "og:image",
              property: "og:image",
              content: "/assets/index/blob.png",
            },
            { property: "og:image:width", content: "577" },
            { property: "og:image:height", content: "618" },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '~~/node_modules/vue-rellax/lib/nuxt-plugin', ssr: false },
        { src: '~/plugins/vue-typedjs', mode: 'client' }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        ['nuxt-cname-module', { baseUrl: 'aera128.ninja' }],
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    loading: '~/components/Loader.vue'
}