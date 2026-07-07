<template>
    <section id="fluxo">
        <div class="wrap">
            <div class="section-head">
                <h2>Como o fluxo funciona (3 Cenários)</h2>
                <span class="idx">03 — processo</span>
            </div>
            <div class="flow">
                <h3 class="cenarios">1° Cenário</h3>
                <div class="flow-step active">
                    <div class="step-num">1</div>
                    <div>
                        <h3>Emissão</h3>
                        <p>
                            Com a OS criada, cadastros de entidades devidamente configurados e as informações no residuo,
                            emitimos o MTR ou por resíduos ou agrupado.
                        </p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">2</div>
                    <div>
                        <h3>Recebimento</h3>
                        <p>O destinador confirma o recebimento, valida a quantidade e o tipo de resíduo, e registra o tratamento ou disposição final aplicado.</p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">3</div>
                    <div>
                        <h3>CDF</h3>
                        <p>Com as três etapas confirmadas, o MTR fica disponível para consulta e fiscalização pelo órgão ambiental competente, encerrando o ciclo de rastreabilidade.</p>
                    </div>
                </div>
            </div>
            <div class="flow">
                <h3 class="cenarios-2">2° Cenário</h3>
                <div class="flow-step active">
                    <div class="step-num">1</div>
                    <div>
                        <h3>Emissão (Com destinador Terceiro)</h3>
                        <p>
                            Com a OS criada, cadastros de entidades devidamente configurados e as informações no residuo,
                            emitimos o MTR ou por resíduos ou agrupado.
                        </p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">2</div>
                    <div>
                        <h3>Recebimento</h3>
                        <p>O destinador confirma o recebimento, valida a quantidade e o tipo de resíduo, e registra o tratamento ou disposição final aplicado.</p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">3</div>
                    <div>
                        <h3>CDF</h3>
                        <p>Com as três etapas confirmadas, o MTR fica disponível para consulta e fiscalização pelo órgão ambiental competente, encerrando o ciclo de rastreabilidade.</p>
                    </div>
                </div>
            </div>
            <div class="flow">
                <h3 class="cenarios-2">3° Cenário</h3>
                <div class="flow-step active">
                    <div class="step-num">1</div>
                    <div>
                        <h3>Emissão (Com Armazenador Temporário)</h3>
                        <p>
                            Com a OS criada, cadastros de entidades devidamente configurados e as informações no residuo,
                            emitimos o MTR ou por resíduos ou agrupado.
                        </p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">2</div>
                    <div>
                        <h3>Recebimento Temporário</h3>
                        <p>O destinador confirma o recebimento, valida a quantidade e o tipo de resíduo, e registra o tratamento ou disposição final aplicado.</p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">3</div>
                    <div>
                        <h3>MTR Complementar</h3>
                        <p>Com as três etapas confirmadas, o MTR fica disponível para consulta e fiscalização pelo órgão ambiental competente, encerrando o ciclo de rastreabilidade.</p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">4</div>
                    <div>
                        <h3>Recebimento do Complementar</h3>
                        <p>Com as três etapas confirmadas, o MTR fica disponível para consulta e fiscalização pelo órgão ambiental competente, encerrando o ciclo de rastreabilidade.</p>
                    </div>
                </div>
                <div class="flow-step">
                    <div class="step-num">5</div>
                    <div>
                        <h3>CDF do Complementar</h3>
                        <p>Com as três etapas confirmadas, o MTR fica disponível para consulta e fiscalização pelo órgão ambiental competente, encerrando o ciclo de rastreabilidade.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'
    
    export default {
        name: 'FluxoComponent'
    }
</script>

<style scoped>
    .flow {
        display:flex;
        flex-direction:column;
        gap:0;
    }

    .flow-step {
        display:grid;
        grid-template-columns:64px 1fr;
        gap:24px;
        padding:26px 0;
        border-top:1px solid var(--line);
    }

    .flow-step:last-child {
        border-bottom:1px solid var(--line);
    }

    .flow-step .step-num {
        font-family:'IBM Plex Mono', monospace;
        font-size:13px;
        color:var(--paper);
        background:var(--ink);
        width:34px; height:34px;
        border-radius:50%;
        display:flex; 
        align-items:center; 
        justify-content:center;
    }

    .flow-step.active .step-num {
        background:var(--stamp);
    }

    .flow-step h3 {
        font-size:17.5px; 
        margin-bottom:6px;
    }

    .flow-step p{ 
        margin:0; 
        font-size:14.5px; 
        color:var(--ink-soft); 
        max-width:62ch;
    }

    .flow-step .via-tag {
        display:inline-block;
        margin-top:10px;
        font-family:'IBM Plex Mono', monospace;
        font-size:11px;
        letter-spacing:.06em;
        padding:3px 8px;
        border-radius:2px;
        text-transform:uppercase;
    }

    .flow-step:nth-child(1) .via-tag { 
        background:var(--via-white); 
        border:1px solid var(--line);
    }

    .flow-step:nth-child(2) .via-tag { 
        background:var(--via-yellow);
    }

    .flow-step:nth-child(3) .via-tag { 
        background:var(--via-green); 
        color:var(--via-white);
    }

    .flow-step:nth-child(4) .via-tag { 
        background:var(--via-pink);
    }
</style>