const resolve = require('path').resolve
const config = {
	
	/*
  ** Headers of the page
  */
	head: {
		title: 'dma-2018-dsa',
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js project',
			},
		],
		script: [
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
			},
			{
				src:
					'https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i',
			},
			// {
			// 	rel: 'stylesheet',
			// 	href:
			// 		'@/assets/css/style.css',
			// },
		],
	},
	css: ['~assets/css/style.css', '~assets/css/tech/custom.css'],
	/*
  ** Customize the progress bar color
  */
	// loading: { color: '#3B8070' },
	//關閉上方讀取條
	loading: false,
	/*
  ** Build configuration
  */
	build: {
		/*
    ** Run ESLint on save
    */
		babel: {
			presets: ['es2015', 'stage-0'],
			plugins: ['transform-runtime'],
		},
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/,
				});
			}
			if (!isDev) {
				// relative links, please.
			//	config.output.publicPath = './_nuxt/';
			}
			return config;
		},
	},
	// generate: {
  //   dir: 'generate'
  // },

	router: {
		base: '/2018/',
		extendRoutes (routes) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
	},
};
module.exports = config
