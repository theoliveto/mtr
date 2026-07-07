<template>
    <HeaderComponent />
    <main>
        <CadastrosComponent />
    </main>
    <FooterComponent />
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import CadastrosComponent from '@/components/CadastrosComponent.vue'

    import '../assets/styles.css'

    export default {
        name: 'CadastrosView',
        components: {
            HeaderComponent,
            FooterComponent,
            CadastrosComponent
        }
    }
</script>

<style scoped>

</style>