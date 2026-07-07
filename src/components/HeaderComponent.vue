<template>
    <div class="topbar">
        <div class="wrap">
            <div class="brand">
                <span class="mark">MTR</span>
                <span class="name">Manifesto de Transporte de Resíduos</span>
            </div>
            <nav>
                <a href="/">Inicial</a>
                <a href="/cadastros">Cadastros</a>
                <a href="/desenvolvimento">Desenvolvimento</a>
            </nav>
        </div>
    </div>
</template>

<script>
    import '../assets/styles.css'
    
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>
    .topbar {
        border-bottom:1px solid var(--line);
        padding:18px 0;
        position:sticky;
        top:0;
        background:rgba(238,231,214,0.92);
        backdrop-filter:blur(6px);
        z-index:50;
    }

    .topbar .wrap {
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .brand {
        display:flex;
        align-items:baseline;
        gap:10px;
    }

    .brand .mark {
        font-family:'IBM Plex Mono', monospace;
        font-size:12px;
        letter-spacing:.12em;
        background:var(--stamp);
        color:var(--via-white);
        padding:3px 7px;
        border-radius:var(--radius);
    }

    .brand .name {
        font-family:'Roboto Slab Variable', serif;
        font-weight:700;
        font-size:19px;
    }

    nav {
        display:flex; 
        gap:28px;
    }

    nav a {
        color:var(--ink-soft);
        text-decoration:none;
        font-size:14px;
        font-weight:500;
        border-bottom:1px solid transparent;
        transition:border-color .15s ease, color .15s ease;
    }

    nav a:hover, nav a:focus-visible {
        color:var(--stamp); 
        border-color:var(--stamp);
    }
</style>