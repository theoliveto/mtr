<template>
    <HeaderComponent />
    <main>
        <HeroComponent />
        <DefinicaoComponent />
        <QuemComponent />
        <FluxoComponent />
        <PraticasComponent />
        <PortaisComponent />
    </main>
    <FooterComponent />
</template>

<script>
    import HeaderComponent from '../components/HeaderComponent.vue'
    import FooterComponent from '../components/FooterComponent.vue'
    import HeroComponent from '../components/HeroComponent.vue'
    import DefinicaoComponent from '@/components/DefinicaoComponent.vue'
    import QuemComponent from '@/components/QuemComponent.vue'
    import FluxoComponent from '@/components/FluxoComponent.vue'
    import PraticasComponent from '@/components/PraticasComponent.vue'
    import PortaisComponent from '@/components/PortaisComponent.vue'

    import '../assets/styles.css'

    export default {
        name: 'HomeView',
        components: {
            HeaderComponent,
            FooterComponent,
            HeroComponent,
            DefinicaoComponent,
            QuemComponent,
            FluxoComponent,
            PraticasComponent,
            PortaisComponent
        }
    }
</script>