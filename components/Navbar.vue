<template>
    <div>
        <nav class="wrapper py-6 ">
            <div class="px-10 flex justify-between items-center">
                <div class="logo">
                    <nuxt-link to="/">
                        <h1 class="text-2xl font-semibold text-gray-700 dark:text-gray-200"><span
                                class="text-primary font-bold">Oussama</span>Re.
                        </h1>
                    </nuxt-link>
                </div>

                <div class="flex flex-row">
                    <nuxt-link class="nav-link  " data-[active=true] to="/blogs">Blog</nuxt-link>
                    <nuxt-link class="nav-link" to="/about">About</nuxt-link>
                    <ColorSwitcher />
                </div>
            </div>
        </nav>

    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.nav-link {
    @apply mx-2 font-medium items-center justify-center m-auto text-gray-700 dark:hover:text-primary text-gray-200 data-[active-true]:border-b-2 transition-colors duration-300 transform;
}
</style>