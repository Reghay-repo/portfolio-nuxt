<script setup lang="ts">
import Code from './Icon/Code.vue';
import Desktop from './Icon/Desktop.vue';


</script>

<template>
  <div class="mt-16 md:mt-24 text-center">
    <div class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300">
      <h2 class="text-center mr-1">Services I provide </h2>
      <IconDoubleDown class="h-4 w-4" />
    </div>

    <div class="grid justify-center items-center  mt-5  lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full">
      <div class="flex-column items-center justify-center ">
        <div class="flex justify-center">
          <Desktop class="m-2 md:m-4 text-3xl" />
        </div>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">Saas developement</h3>
        <p class="text-xl mx-6 text-gray-500 dark:text-gray-400 my-4">You'll get a Saas app Feature rich and fast
          offering
          convenience, scalability, and cost-effectiveness to your
          clients </p>
      </div>
      <div>
        <div class="flex justify-center">

          <Code class="m-2 md:m-4 text-3xl" />
        </div>
        <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">Landing page Websites</h3>
        <p class="text-xl mx-6 text-gray-500 dark:text-gray-400 my-4">I will design and develop a professional website
          for
          your business with the Latest tech of preference. </p>
      </div>


    </div>
  </div>
</template>


<style scoped>
/* .title {
  @apply font-bold
} */
</style>










<!-- 
<script setup lang="ts">
import Code from './Icon/Code.vue';
import Mobile from './Icon/Mobile.vue';


</script> -->

<!-- <template>
  <section class="bg-white dark:bg-gray-900 antialiased">
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
      <div class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300">
        <h2 class="text-center mr-1">Services I provide </h2>
        <IconDoubleDown class="h-4 w-4" />
      </div>

      <div class="flex grid-cols-2 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-2">
        <div class="space-y-4">
          <span
            class=" text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ">
            <Code class="m-2 md:m-4 size-9" />
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            Official website
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
          <button href="#" title=""
            class="text-white  justify-center hover:bg-slate-100 hover:text-black   inline-flex items-center  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Contact me
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <span
            class="  inline-flex items-center px-2.5 py-0.5 rounded  dark:text-gray-300">
            <Mobile class="m-2 md:m-4 size-9" />
          </span>
          <h3 class="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
            Management system
          </h3>
          <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
            Flowbite helps you connect with friends, family and communities of people who share your interests.
          </p>
          <button href="#" title=""
            class="text-white  justify-center hover:bg-slate-100 hover:text-black   inline-flex items-center  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
            Contact me
            <svg aria-hidden="true" class="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>
          </button>
        </div>


      </div>
    </div>
  </section>
</template>


<style scoped>
/* .title {
  @apply font-bold
} */
</style> -->