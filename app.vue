<template>
  <div class="dark:bg-gray-900 flex flex-col h-screen justify-between ">

    <Navbar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
// const colorMode = useColorMode();




// onMounted(() => {
//   colorMode.value = 'light';
// })



</script>



<style >
.wrapper {
    @apply max-w-screen-lg mx-auto px-6;
}
</style>