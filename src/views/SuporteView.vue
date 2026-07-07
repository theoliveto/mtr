<template>
    <HeaderComponent />

    <FooterComponent />
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'

    import '../assets/styles.css'

    export default {
        name: 'SuporteView',
        components: {
            HeaderComponent,
            FooterComponent
        }
    }
</script>

<style scoped>

</style>