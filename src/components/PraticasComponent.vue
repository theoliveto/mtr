<template>
    <section id="praticas">
        <div class="wrap">
            <div class="section-head">
                <h2>Pontos de atenção</h2>
                <span class="idx">05 — boas práticas</span>
            </div>
            <div class="checklist">
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Classificação correta do resíduo.</strong> Erros de classe ou código de resíduo são a causa mais comum de inconsistência entre o MTR e a licença do destinador.</p>
                </div>
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Licenças sempre válidas.</strong> Transportador e destinador precisam ter licenciamento ambiental ativo — o sistema costuma bloquear a emissão se houver pendência.</p>
                </div>
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Quantidade real vs. estimada.</strong> A diferença entre o que foi estimado na emissão e o que foi efetivamente coletado deve ser corrigida na confirmação do transportador.</p>
                </div>
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Confirmação em cada etapa.</strong> Um MTR sem a baixa final do destinador fica "em aberto" e pode aparecer como pendência em auditorias e fiscalizações.</p>
                </div>
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Relatório anual.</strong> Muitos estados exigem o envio de um relatório consolidado (ex: RA — Relatório Anual) com base no histórico de MTRs emitidos no período.</p>
                </div>
                <div class="check-item">
                    <span class="mark">→</span>
                    <p><strong>Verifique o sistema do seu estado.</strong> Nem todo estado usa o mesmo sistema — confirme se sua operação depende do MTR-e nacional, de uma plataforma estadual própria, ou de ambos.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'
    
    export default {
        name: 'PraticasComponent'
    }
</script>

<style scoped>
    .checklist {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:16px 32px;
    }

    .check-item {
        display:flex;
        gap:14px;
        padding:14px 0;
        border-bottom:1px solid var(--line);
    }

    .check-item .mark {
        font-family:'IBM Plex Mono', monospace;
        color:var(--stamp);
        font-weight:600;
        flex-shrink:0;
    }

    .check-item p {
        margin:0; 
        font-size:14.5px; 
        color:var(--ink-soft);
    }

    .check-item strong {
        color:var(--ink);
    }
</style>