<script setup lang="ts">
const { appName } = useAppConfig()

defineProps({
  isText: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <NuxtLinkLocale
    to="/"
    class="flex shrink-0 items-center"
    aria-label="Go back to home page"
  >
    <!-- <img class="w-[100px]" src="/logo.png" /> -->
    <NuxtImg
      width="96"
      src="/logo.png"
      class="size-24 object-cover"
      alt="Logo Picture"
      aria-label="Logo Picture"
    />
    <!-- <UIcon
      name="custom:maison-hochard"
      class="size-8"
    /> -->
    <span
      v-if="isText"
      class="ml-1 text-xs font-semibold"
    >
      {{ appName }}
    </span>
  </NuxtLinkLocale>
</template>
