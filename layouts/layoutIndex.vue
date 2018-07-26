<template>
  <div>
    <indexHeader />

    <transition name='layout' mode=''>
      <nuxt/>
    </transition>
    
    <indexFooter />
  </div>
</template>
<script>
import indexHeader from '~/components/indexHeader.vue';
import indexFooter from '~/components/indexFooter.vue';
export default {
	components: {
		indexHeader,
		indexFooter,
	},
};
</script>
<style>
/* transition */
.layout-enter-active,
.layout-leave-active {
	transition: opacity 0.5s;
}

.layout-enter,
.layout-leave-to {
	opacity: 0;
}
</style>

