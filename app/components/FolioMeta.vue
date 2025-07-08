<script setup lang="ts">
import type { ContentEnCollectionItem, ContentFrCollectionItem } from '@nuxt/content'

// useScriptPlausibleAnalytics({
//   domain: 'canvas.hrcd.fr',
//   scriptInput: {
//     src: 'https://analytics.hrcd.fr/js/script.js',
//   },
// })

const { page, isWriting } = defineProps<{
  page: ContentEnCollectionItem | ContentFrCollectionItem
  isWriting: boolean
}>()

const route = useRoute()
const { link, seo, profile } = useAppConfig()

const pageSEO = computed(() => ({
  title: isWriting ? page?.title : page?.title || seo.title,
  description: isWriting ? page?.description : page?.description || seo.description,
  image: isWriting ? page?.image : page?.image || seo.image,
}))

const getTitleTemplate = (title: string | undefined) => {
  if (route.path === '/') return title || `${seo.title}`
  if (isWriting) return title
  return `${title} | ${seo.title}`
}

useSeoMeta({
  ogSiteName: seo.title,
  ogTitle: pageSEO.value.title,
  ogDescription: pageSEO.value.description,
  ogType: isWriting ? 'article' : 'website',
  ogUrl: seo.url + route.path,
  author: profile.name,
  title: pageSEO.value.title,
  description: pageSEO.value.description,
  twitterTitle: pageSEO.value.title,
  twitterDescription: pageSEO.value.description,
  twitterCard: 'summary_large_image',
})

useHead({
  title: pageSEO.value.title,
  titleTemplate: getTitleTemplate,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'charset', content: 'utf-8' },
    { name: 'robots', content: 'index, follow' },
    { name: 'color-scheme', content: 'light dark' },
    { name: 'facebook-domain-verification', content: 'jfsyjng88jb546quhdtrgae7x8fstr' },
  ],
  link,
})

defineOgImage({ url: `${seo.url}${pageSEO.value.image}`, width: 1920, height: 1080, alt: 'Home image' })
</script>

<template>
  <slot />
</template>
