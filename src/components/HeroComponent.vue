<template>
    <section class="hero">
        <div class="wrap">
            <div>
                <div class="eyebrow">Documento de rastreabilidade ambiental</div>
                <h1>O manifesto que<br>acompanha o resíduo<br>até o <em>destino final</em>.</h1>
                <p class="lead">
                    O MTR é o documento que comprova, etapa por etapa, 
                    o caminho de um resíduo desde quem o gera até quem o trata ou dispõe — 
                    como uma nota fiscal de transporte, 
                    só que para aquilo que sobra.
                </p>
                <div class="cta-row">
                    <a class="btn primary" href="/">Ver o fluxo completo</a>
                    <a class="btn ghost" href="/">Base legal e prazos</a>
                </div>
            </div>
            <div class="vias" aria-hidden="true">
                <div class="via-card c1">
                    <span class="tag">1ª Entidade</span>
                    <span class="who">Gerador</span>
                    <span class="num">MTR Nº 200123000482</span>
                </div>
                <div class="via-card c2">
                    <span class="tag">2ª Entidade</span>
                    <span class="who">Transportador</span>
                    <span class="num">MTR Nº 200123000482</span>
                </div>
                <div class="via-card c3">
                    <span class="tag">3ª Entidade</span>
                    <span class="who">Destinador</span>
                    <span class="num">MTR Nº 200123000482</span>
                </div>
                <div class="via-card c4">
                    <span class="tag">4ª Entidade</span>
                    <span class="who">Armazenador Temporário</span>
                    <span class="num">MTR Nº 200123000482</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'HeroComponent'
    }
</script>

<style scoped>
    .hero {
        padding:88px 0 60px;
        position:relative;
        overflow:hidden;
    }
    
    .hero .wrap {
        display:grid;
        grid-template-columns:1.05fr 0.95fr;
        gap:56px;
        align-items:center;
    }
    
    .eyebrow {
        font-family:'IBM Plex Mono', monospace;
        font-size:12.5px;
        letter-spacing:.14em;
        text-transform:uppercase;
        color:var(--stamp-dark);
        display:flex;
        align-items:center;
        gap:10px;
        margin-bottom:18px;
    }

    .eyebrow::before {
        content:"";
        width:22px; height:1px;
        background:var(--stamp-dark);
        display:inline-block;
    }

    .hero h1 {
        font-size:52px;
        line-height:1.03;
        letter-spacing:-0.01em;
    }

    .hero h1 em {
        font-style:normal;
        color:var(--stamp);
    }

    .hero p.lead {
        margin-top:22px;
        font-size:17.5px;
        color:var(--ink-soft);
        max-width:46ch;
    }

    .hero .cta-row {
        margin-top:32px;
        display:flex;
        gap:14px;
        flex-wrap:wrap;
    }

    .btn {
        font-family:'IBM Plex Sans Variable', sans-serif;
        font-weight:600;
        font-size:14.5px;
        padding:13px 22px;
        border-radius:var(--radius);
        border:1px solid var(--ink);
        text-decoration:none;
        display:inline-block;
        cursor:pointer;
        transition:transform .15s ease, background .15s ease, color .15s ease;
    }

    .btn.primary {
        background:var(--ink);
        color:var(--paper);
    }

    .btn.primary:hover {
        background:var(--stamp); 
        border-color:var(--stamp); 
        transform:translateY(-1px);
    }

    .btn.ghost {
        background:transparent;
        color:var(--ink);
    }

    .btn.ghost:hover {
        background:var(--ink); 
        color:var(--paper); 
        transform:translateY(-1px);
    }

    .vias {
        position:relative;
        height:340px;
        perspective:900px;
    }

    .via-card {
        position:absolute;
        width:280px;
        height:190px;
        top:50%; left:50%;
        border-radius:var(--radius);
        border:1px solid rgba(33,28,21,0.25);
        box-shadow:0 8px 22px rgba(33,28,21,0.14);
        padding:18px 20px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        transition:transform .5s cubic-bezier(.2,.7,.3,1), box-shadow .3s ease;
    }

    .via-card .tag {
        font-family:'IBM Plex Mono', monospace;
        font-size:10.5px;
        letter-spacing:.1em;
        text-transform:uppercase;
        opacity:.72;
    }

    .via-card .who {
        font-family:'Roboto Slab Variable', serif;
        font-weight:600;
        font-size:17px;
    }

    .via-card .num {
        font-family:'IBM Plex Mono', monospace;
        font-size:11px;
        opacity:.6;
    }

    .via-card.c1 {
        background:var(--via-white); 
        color:var(--ink); 
        transform:translate(-84%,-72%) rotate(-7deg);
    }

    .via-card.c2 {
        background:var(--via-yellow); 
        color:var(--ink); 
        transform:translate(-58%,-52%) rotate(-2deg);
    }

    .via-card.c3 {
        background:var(--via-green); 
        color:var(--via-white); 
        transform:translate(-32%,-32%) rotate(3deg);
    }

    .via-card.c4 {
        background:var(--via-pink); 
        color:var(--ink); 
        transform:translate(-8%,-16%) rotate(8deg);
    }

    .vias:hover .via-card.c1 {
        transform:translate(-96%,-90%) rotate(-11deg);
    }

    .vias:hover .via-card.c2 {
        transform:translate(-60%,-58%) rotate(-4deg);
    }

    .vias:hover .via-card.c3 {
        transform:translate(-24%,-24%) rotate(5deg);
    }

    .vias:hover .via-card.c4 {
        transform:translate(6%,4%) rotate(11deg);
    }

    .via-card.c4 {
        z-index:4;
    } 

    .via-card.c3 {
        z-index:3;
    } 

    .via-card.c2 {
        z-index:2;
    } 

    .via-card.c1 {
        z-index:1;
    }
</style>