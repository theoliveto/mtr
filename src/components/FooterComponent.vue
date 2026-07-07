<template>
    <footer>
        <div class="wrap">
            <p>Vision System Controller.</p>
            <div class="brand">
                <span class="mark">MTR</span>
                <span class="name">Manifesto de Transporte de Resíduos</span>
            </div>
        </div>
    </footer>
</template>

<script>
    import '../assets/styles.css'

    export default {
        name: 'FooterComponent'
    }
</script>

<style scoped>
    footer {
        border-top:1px solid var(--line);
        padding:34px 0 44px;
    }

    footer .wrap {
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
        gap:12px;
    }

    footer p {
        font-size:13px;
        color:var(--ink-soft);
        margin:0;
    }
    
    footer .mono {
        font-size:12px; 
        color:var(--ink-soft);
    }
</style>