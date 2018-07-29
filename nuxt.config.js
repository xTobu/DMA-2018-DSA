const resolve = require('path').resolve;
const config = {
	/*
	 ** Headers of the page
	 */
	head: {
		titleTemplate: '%s | 2018 DSA 數位奇點獎',
		meta: [{
				charset: 'utf-8'
			},
			{
				'http-equiv': 'x-ua-compatible',
				content: 'ie=edge'
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'description',
				content: '2018 DSA 數位奇點獎',
			},
			{
				property: 'og:title',
				content: 'Facebook og:title'
			},
			{
				property: 'og:description',
				content: 'Facebook og:description'
			},
			{
				property: 'og:type',
				content: 'website'
			},
			{
				property: 'og:url',
				content: 'https://www.dsaawards.com/2018/'
			},
			{
				property: 'og:image',
				content: 'https://www.dsaawards.com/2018/2017_dsa_award_share.jpg',
			},
		],
		script: [{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js',
			},
			{
				src: 'https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js',
			},
			/**
			 * google recaptcha
			 * 搭配：grecaptcha.render('recaptcha-main');
			 * 避免 route 渲染時出錯
			 */

			{
				src: 'https://www.google.com/recaptcha/api.js?render=explicit',

			},
			{
                src: 'https://code.createjs.com/createjs-2015.11.26.min.js',
                /**
                 * 不要 defer, 否則會比頁面的 js 晚載入
                 */
                // defer: true
			},
			// {
			// 	src: '/2018/js/kv.js',
			// 	defer: true
			// },
			// {
			// 	src: '/2018/js/initCanvas.js',
			// 	defer: true
			// },
		],
		link: [{
				rel: 'icon',
				type: 'image/x-icon',
				href: './favicon.ico'
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900,900i',
			},
			// {
			// 	rel: 'stylesheet',
			// 	href:
			// 		'@/assets/css/style.css',
			// },
		],
	},
	css: ['~assets/css/style.css', '~assets/css/tech/custom.css',
		//  { src: 'sweetalert2/dist/sweetalert2.min.css', lang: 'css' }
	],
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
		vendor: ['axios'],
		babel: {
			presets: ['es2015', 'stage-0'],
			plugins: ['transform-runtime'],
		},
		extend(config, {
			isDev,
			isClient
		}) {
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

	router: {
		// 改變基準路徑
		base: '/2018/',
		// 增加 404
		extendRoutes(routes) {
			routes.push({
				path: '*',
				component: resolve(__dirname, 'pages/404.vue'),
			});
		},
		// 所有頁面渲染後滾動至頂部
		scrollBehavior: function (to, from, savedPosition) {
			return {
				x: 0,
				y: 0
			};
		},
	},
	// 增加 utils.js
	plugins: ['~/plugins/util.js', {
        src: '~/plugins/axios',
        // 因為 fetch 和 asyncData 要用 axios module
        ssr: true
	}, {
		src: '~/plugins/sweetalert2',
		ssr: false
	}],
	// 增加環境變數
	env: {
		API_URL: 'http://localhost:3000/api',
	},
	modules: [
		'@nuxtjs/axios', // With options
		'@nuxtjs/proxy',
	],
	/**
	 * @nuxtjs/axios 設定預設
	 */
	axios: {
		prefix: '/api',
		proxy: true
	},
	proxy: {
		'/api': {
			target:
				// 'production','development'
				process.env.NODE_ENV !== 'production' ?
				'https://dsaaward.iprefer.com.tw' : 'https://www.dsaawards.com',
			// 路徑複寫
			// pathRewrite: { '^/api': '/api' },
		},
    },
    generate: {
        dir: '2018'
      },
};

module.exports = config;
