<template>
    <section id="quem">
        <div class="wrap">
            <div class="section-head">
                <h2>Quem precisa emitir</h2>
                <span class="idx">02 — responsáveis</span>
            </div>
            <div class="legal">
                <div class="role-card gerador">
                    <div class="swatch"></div>
                    <h3>Gerador</h3>
                    <p>Toda empresa ou instituição que produz resíduos — indústrias, hospitais, comércios, obras — precisa emitir o MTR antes da coleta, informando tipo, classe e quantidade do resíduo.</p>
                </div>
                <div class="role-card transportador">
                    <div class="swatch"></div>
                    <h3>Transportador</h3>
                    <p>Responsável por confirmar o recebimento da carga no MTR e por levá-la até o destinador licenciado, mantendo a rastreabilidade durante todo o trajeto.</p>
                </div>
                <div class="role-card destinador">
                    <div class="swatch"></div>
                    <h3>Destinador</h3>
                    <p>Empresa licenciada que recebe o resíduo para tratamento, reciclagem ou disposição final, e que dá baixa no manifesto confirmando o destino dado.</p>
                </div>
                <div class="role-card armazedor">
                    <div class="swatch"></div>
                    <h3>Armazenador Temporário</h3>
                    <p>É quem recebe os resíduos ou rejeitos do gerador e os guarda por um tempo determinado antes de enviá-los ao destinador final.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'
    
    export default {
        name: 'QuemComponent'
    }
</script>

<style scoped>
    .roles {
        display:grid;
        grid-template-columns:repeat(3,1fr);
        gap:20px;
    }

    .role-card {
        background:var(--paper-2);
        border:1px solid var(--line);
        border-radius:var(--radius);
        padding:24px 22px;
        position:relative;
    }

    .role-card .swatch {
        width:34px; height:6px;
        border-radius:2px;
        margin-bottom:16px;
    }

    .role-card.gerador .swatch {
        background:var(--via-white); 
        border:1px solid var(--line);
    }

    .role-card.transportador .swatch {
        background:var(--via-yellow);
    }

    .role-card.destinador .swatch {
        background:var(--via-green);
    }

    .role-card.armazedor .swatch {
        background:var(--via-pink);
    }

    .role-card h3 {
        font-size:17px; 
        margin-bottom:8px;
    }

    .role-card p {
        font-size:14px; 
        color:var(--ink-soft);
        margin:0;
    }
</style>