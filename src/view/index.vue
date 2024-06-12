<template>
  <HeaderIndex />
  <StoryIndex />
  <WhyIndex />
  <NowIndex />
  <TeamIndex />
  <ContactIndex />
</template>

<script>
import HeaderIndex from '@/components/index/header.vue'
import StoryIndex from '@/components/index/story.vue'
import WhyIndex from '@/components/index/why.vue'
import NowIndex from '@/components/index/now.vue'
import TeamIndex from '@/components/index/team.vue'
import ContactIndex from '@/components/index/contact.vue'

export default {
    name: "index-page",
    components: {
        HeaderIndex,
        StoryIndex,
        WhyIndex,
        NowIndex,
        TeamIndex,
        ContactIndex
    }
}
</script>

<style>

</style>