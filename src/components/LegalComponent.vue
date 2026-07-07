<template>
    <section id="legal">
        <div class="wrap">
            <div class="section-head">
                <h2>Base legal e prazos</h2>
                <span class="idx">04 — regulação</span>
            </div>
            <div class="legal">
                <div class="legal-card">
                    <span class="stamp-mini">Fundamento</span>
                    <h3>Política Nacional de Resíduos Sólidos</h3>
                    <p>A Lei nº 12.305/2010 estabelece a responsabilidade compartilhada pelo ciclo de vida dos resíduos, base para a exigência de rastreabilidade como o MTR.</p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">Sistema</span>
                    <h3>SINIR e sistemas estaduais</h3>
                    <p>O MTR-e nacional se integra a plataformas estaduais (ex: em SC, o próprio sistema ambiental estadual). Cada estado pode ter prazos e exigências complementares.</p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">Atenção</span>
                    <h3>Prazos de confirmação</h3>
                    <p>Cada etapa (coleta, recebimento, destinação) tem prazo próprio para confirmação no sistema — atrasos podem gerar pendências e inconsistências no histórico do gerador.</p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">Guarda</span>
                    <h3>Retenção de documentos</h3>
                    <p>Manifestos e comprovantes de destinação devem ser mantidos arquivados pelo gerador, geralmente por período mínimo definido pela legislação estadual aplicável.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'
    
    export default {
        name: 'LegalComponent'
    }
</script>

<style scoped>
    .legal {
        display:grid;
        grid-template-columns:repeat(2,1fr);
        gap:20px;
    }

    .legal-card {
        background:var(--ink);
        color:var(--paper);
        padding:26px 24px;
        border-radius:var(--radius);
    }

    .legal-card .stamp-mini {
        font-family:'IBM Plex Mono', monospace;
        font-size:11px;
        letter-spacing:.1em;
        text-transform:uppercase;
        color:var(--via-yellow);
        display:block;
        margin-bottom:10px;
    }

    .legal-card h3 {
        color:var(--paper); 
        font-size:16.5px; 
        margin-bottom:8px;
    }

    .legal-card p {
        color:#CFC7B6; 
        font-size:14px; 
        margin:0;
    }
</style>