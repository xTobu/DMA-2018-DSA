<template>
  <div>
    <indexHeader />
    <nuxt/>
    <indexFooter />
  </div>
</template>

<style>

</style>

<script>
import indexHeader from '~/components/indexHeader.vue'
import indexFooter from '~/components/indexFooter.vue'
export default {
	components: {
        indexHeader,
        indexFooter
    },
};
</script>