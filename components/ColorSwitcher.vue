<template>
  <div
    class="rounded-full cursor-pointer ml-5 bg-gray-100 p-2 text-gray-900 dark:bg-gray-800 dark:text-gray-100 focus:outline-none"
    @click.stop="switchTheme">
    <IconSun v-if="getSelectedTheme === 'light'" class="h-5 w-5" />
    <IconMoon v-else class="h-5 w-5" />

  </div>
</template>

<script setup lang="ts">

const colorMode = useColorMode();
const getSelectedTheme = computed(() => {
  return colorMode.value
})



// funcs 

function switchTheme() {
  colorMode.preference =
    getSelectedTheme.value === "dark" ? "light" : "dark"
}
</script>
