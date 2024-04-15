import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Draggable } from 'gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)
  }

  return {
    provide: {
      gsap,
      Draggable,
      ScrollTrigger,
    },
  }
})


// and in your app.vue or any vue component.

// const { $gsap: gsap, $Draggable: Draggable } = useNuxtApp();