<script setup lang="ts">
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>
  <div class="dark:bg-gray-900">
    <div class="dark:text-white wrapper justify-center items-center flex ">
    <Header />
  </div>
  <div class="dark:text-white wrapper justify-center flex ">
    <Projects />
  </div>
  </div>
</template>

<style scoped>
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>