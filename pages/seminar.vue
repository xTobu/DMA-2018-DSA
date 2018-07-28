<template>
    <div class="wrapper">
        <div class="head head_seminar">
      <div class="tittle"><span>論壇活動</span><span class="sub">SEMINAR</span></div>
    </div>
    <main class="seminar">
      <div class="seminar-content">
        <h5>智能奇點，開創新局</h5>
        <p>我們正面對一個虛擬逼近真實、人工智能與人腦並容合作的新時代，人工智能AI急遽發展的，正驅動著新一代創意性品牌體驗，作為引領社會思想創新的發動角色，行銷人該怎麼面對 AI 技術帶來改變？又該如何透過新的溝通介面與形式，傳達更多美好的價值？<br>此刻正是啟動改變、發現未來的關鍵時刻，透過論壇觀點，與我們一起掌握契機，該做好迎接未來的準備。</p>
        <div class="grey-bg">
          <div class="date">9/05~9/06 上午 9:00 ~17:00</div>
          <div class="speech">DSA 奇點論壇</div>
          <div class="location">華南銀行國際會議廳  ( <a href="#">map</a> )</div>
        </div>
        <div class="grey-bg">
          <div class="date">11/16 上午 14:00 ~17:00</div>
          <div class="speech">DigiAsia X DSA AI論壇</div>
          <div class="location">花博公園爭艷館  ( <a href="#">
              map )</a></div>
        </div>
      </div>
    </main>
    </div>
</template>

<script>
export default {
	asyncData({ redirect }) {
	},
	head() {
		return {
			title: '論壇活動',
		};
	},
	layout: 'layoutIndex',
	data() {
		return {};
	},
	methods: {},
	created() {
		// console.log('created');
	},

	mounted() {},
};
</script>

<style scoped>
@import '~/assets/css/seminar.css';
</style>

