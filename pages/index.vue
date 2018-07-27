<template>
  <div class="wrapper">
        <div class="content">
            <p>在這個充滿異想的數位世界，每一點都是創意力、科技力、行銷力的碰撞驚奇，發現智能奇點，開啟無限想像，共生共存，互助互利，向世界發聲，讓好事發生，我們正激盪出一個不思議的大未來
            </p>
            <a class="btn_index" href="#">
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
export default {
	head() {
		return {
			title: '首頁',
			script: [
				/**
				 * *重要*
				 * 要載全域, 否則ROUTE切換回來時, 重新載createjs已經來不及,
				 * initCanvas() 會無作用, STO延遲治標不治本.
				 * 於是直接全域引用
				 */

				// { src: './js/createjs-2015.11.26.min.js' },
				{ src: './js/kv.js' },
				{ src: './js/initCanvas.js' },
			],
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	created() {},

	mounted() {
		this.$nextTick(() => {
			initCanvas();
			console.log(process.env.API_URL);
		});
	},

	methods: {},
};
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>

