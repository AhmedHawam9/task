<template>
  <HeaderIndex />
  <StoryIndex />
  <WhyIndex />
  <NowIndex />
</template>

<script>
import HeaderIndex from '@/components/index/header.vue'
import StoryIndex from '@/components/index/story.vue'
import WhyIndex from '@/components/index/why.vue'
import NowIndex from '@/components/index/now.vue'

export default {
    name: "index-page",
    components: {
        HeaderIndex,
        StoryIndex,
        WhyIndex,
        NowIndex
    }
}
</script>

<style>

</style>