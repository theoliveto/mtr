<template>
    <section id="definicao">
        <div class="wrap">
            <div class="section-head">
                <h2>O que é o MTR</h2>
                <span class="idx">01 — definição</span>
            </div>
            <div class="definition">
                <p>
                    O <strong>Manifesto de Transporte de Resíduos (MTR)</strong> é o documento oficial que registra a movimentação de resíduos sólidos entre gerador, 
                    transportador, destinador e Armazenador Temporário. Ele existe para que qualquer resíduo tenha rastreabilidade completa: quanto foi gerado, quem transportou, 
                    para onde foi e como foi tratado ou disposto.
                </p>
                <p>
                    Hoje o MTR é emitido majoritariamente de forma eletrônica, 
                    através do <strong>SINIR</strong> (Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos) 
                    ou pelos sistemas estaduais de meio ambiente — cada estado pode ter sua própria plataforma e regras complementares.
                </p>
                <div class="callout">
                    <strong>Na prática:</strong> pense no MTR como uma nota fiscal de transporte para resíduos. 
                    Sem ele, não há como comprovar que um resíduo saiu de um lugar e chegou corretamente a outro — e isso é exatamente o que os órgãos ambientais fiscalizam.
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'

    export default {
        name: 'DefinicaoComponent'
    }
</script>

<style scoped>
    .definition {
        display:grid;
        grid-template-columns:1.3fr 1fr;
        gap:48px;
    }

    .definition p {
        color:var(--ink-soft); 
        font-size:15.5px;
    }

    .definition .callout {
        background:var(--via-white);
        border:1px solid var(--line);
        border-left:4px solid var(--stamp);
        padding:20px 22px;
        border-radius:var(--radius);
        font-size:14px;
        color:var(--ink-soft);
    }

    .definition .callout strong {
        color:var(--ink);
    }
</style>