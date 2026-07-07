<template>
    <HeaderComponent />
    <main>
        <DevComponent />
    </main>
    <FooterComponent />
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import DevComponent from '@/components/DevComponent.vue';

    import '../assets/styles.css'

    export default {
        name: 'DevView',
        components: {
            HeaderComponent,
            FooterComponent,
            DevComponent
        }
    }
</script>

<style scoped>

</style>