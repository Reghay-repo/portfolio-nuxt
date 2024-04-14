<script setup lang="ts">
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<template>

  <div class=" flex justify-center ">
    <div>
      <h1 class="dark:text-white">Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference" class="p-3 border rounded-xl">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
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