<template>
  <div class="wrapper">
        <div class="content">
            <p>在這個充滿異想的數位世界，每一點都是創意力、科技力、行銷力的碰撞驚奇，發現智能奇點，開啟無限想像，共生共存，互助互利，向世界發聲，讓好事發生，我們正激盪出一個不思議的大未來
            </p>
            <a class="btn_index" href="award"  @click.prevent="handleGotoSingularity">
                <span class="txt">深入奇點</span>
                <span class="arrow"></span>
            </a>
        </div>
        <div class="shadow"></div>

        <div class="cavas_size" id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:1920px; height:1080px">
            <canvas id="canvas" width="1920" height="1080" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
            <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:1920px; height:1080px; position: absolute; left: 0px; top: 0px; display: block;">
            </div>
        </div>

    </div>
</template>

<script>
// import initCanvas from '~/plugins/initCanvas';
// import('~/plugins/kv')
// var initCanvas= require('~/plugins/initCanvas');
// import initCanvas from '~/plugins/initCanvas';

//import tools from '~/plugins/tools';
//if (process.client) {
// import tools from '~/plugins/tools'
// require('~/plugins/createjs-2015.11.26.min.js')
// require('~/plugins/kv')
//}
export default {
	head() {
		return {
			title: '首頁',
			script: [
				/**
				 * *重要*
				 * 要載全域, 否則ROUTE切換回來時, 重新載createjs已經來不及,
				 * initCanvas() 會無作用, STO 延遲治標不治本.
				 * 於是直接全域引用
				 */

				// { src: './js/createjs-2015.11.26.min.js',  defer: true },
				{ src: './js/kv.js', defer: true },
				{ src: './js/initCanvas.js', defer: true },
			],
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {
		handleGotoSingularity() {
			this.util_LinkTo('/award');
		},
	},
	created() {},

	mounted() {
		this.$nextTick(() => {
			// if (process.browser) {
			// 	window.onNuxtReady(app => {
			// 	});
			// }
			// window.onload = function() {};
			// $(function() {});

			const detectLibrary = window.setInterval(function() {
				if (typeof initCanvas !== undefined) {
					initCanvas();
					window.clearInterval(detectLibrary);
				}
			}, 20);

			// console.log(process.env.API_URL);
		});
	},
};
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>

