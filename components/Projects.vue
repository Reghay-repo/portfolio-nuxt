<script setup lang="ts">
interface IProject {
  name: string;
  description: string;
  image: string;
  tags?: string[];
  github?: string;
  link?: string;
}

const projects: IProject[] = [
  {
    name: "Success Line - Landing page",
    description:
      "A landing page for a Digitale agency for marketing and developing IT Solutions",
    image: "/success.png",
    tags: ['Vue.js', 'Nuxt.js', 'Tailwindcss', 'DaisyUI'],
    github: "https://github.com/Reghay-repo/",
    link: "https://risk-management-68pu.onrender.com/auth/login",
  },
  {
    name: "Risk management & performance Applicaiton ",
    description:
      "A user-friendly platform that simplifies risk management and performance tracking. it's intuitive and powerful. Identify risks, track performance,    and stay informed with alerts and notifications",
    image: "/risk.png",
    tags: ['PostgreSQL', 'Vue.js', 'Nest.js', 'Vuetify'],
    github: "https://github.com/Reghay-repo/oussama-portfolio",
    link: "https://risk-management-68pu.onrender.com/auth/login",
  },

  {
    name: "Planfy",
    description: "I developed the frontend of the ERP SaaS tool, Planfy, using Vue.js, Vuetify, and Pinia.My responsibilities included UI design, responsive layouts, and performance optimization.I deployed the application to AWS",
    image: "/planfy.png",
    github: "#",
    tags: ['Vue.js', 'Django', 'Vuetify', 'Python', 'PostgresSql', 'Javascript', 'Node.js'],
    link: "https://www.planfy.nl/",
  },
  {
    name: "Petalens",
    description:
      "Petalens is a Media Monitoring and Social Listening tool, developed by using Vuejs and Vuetify as the core UI technologies and Laravel, PostgresSql for the backend and deployed with Docker to the cloud.  ",
    image: "/petalens.png",
    github: "#",
    tags: ['Docker', 'Vue.js', 'Nest.js', 'Vuetify', 'Laravel', 'PostgresSql',],
    link: "https://www.petalens.com/",
  },

  {
    name: "Easyom",
    description:
      "EasyOM's landing page showcases their various business services, including bookkeeping, tax preparation, payroll processing, and financial consulting. ",
    image: "/easyom.png",
    tags: ['Html', 'Javascript', 'CSS', 'Express.js', 'timber.js'],
    github: "https://github.com/Reghay-repo/easy-home",
    link: "https://easyom.up.railway.app/",
  },
  {
    name: "DevBootcamp",
    description:
      "This dev bootcamp API provides developers with a comprehensive list of bootcamp locations and the various courses included, along with pricing information.",
    image: "/bootcamp.png",
    tags: ['Javascript', 'Express.js', 'Mondodb', 'MapQuest'],
    github: "https://github.com/Reghay-repo/devbootcamp_api",
    link: "#",
  },
  {
    name: "YouRent",
    description:
      "YouRent is a website for booking vacation rentals, apartments, and houses worldwide. It offers a wide range of rental options, detailed property information.",
    tags: ['Html', 'Javascript', 'CSS', 'Express.js', 'Cloudinary', 'Mapbox'],
    image: "/yourent.png",
    github: "https://github.com/Reghay-repo/you-rent",
    link: "#",
  },

];

</script>

<template>
  <div>
    <div class="mt-16 md:mt-24">
      <div class="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300">
        <h2 class="text-center">Projects I worked on </h2>
        <IconDoubleDown class="h-4 w-4" />
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 w-full  justify-center  mt-5">
        <div
          class="card  m-3 max-w-sm  hover:border  hover:shadow-xl rounded-2xl  transition-shadow dark:shadow-amber-100 hover:cursor-pointer justify-center "
          v-for="project in projects">
          <img :src="`/imgs/${project.image}`" :alt="project.name" class="rounded-xl m-auto  my-4 mb-2" width="340px">
          <div class=" pt-4 justify-center flex-wrap  flex pb-2">
            <span v-for="tag in project.tags"
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                tag
              }}</span>

          </div>
          <div class="px-6 py-4">
            <h1 class="font-bold text-2xl mb-2">{{ project.name }}</h1>
            <p class="dark:text-gray text-lg">{{ project.description }}</p>

          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped></style>