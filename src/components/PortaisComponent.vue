<template>
    <section id="legal">
        <div class="wrap">
            <div class="section-head">
                <h2>Portais</h2>
                <span class="idx">05 — informações</span>
            </div>
            <div class="legal">
                <div class="legal-card">
                    <span class="stamp-mini">IEMA</span>
                    <h3>Portal do ES</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">SEMAD</span>
                    <h3>Portal de GO</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">FEAM</span>
                    <h3>Portal de MG</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">INEA</span>
                    <h3>Portal do RJ</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">SINIR</span>
                    <h3>Portal Nacional</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                    <p>Obs.: Todos os estados que não possuem portal próprio usam o SINIR.</p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">IMA</span>
                    <h3>Portal de SC</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais\SC</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">SIGOR</span>
                    <h3>Portal de SP</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais</span></p>
                </div>
                <div class="legal-card">
                    <span class="stamp-mini">FEPAM</span>
                    <h3>Portal do RS</h3>
                    <p>Doc: <span class="doc">\\vision01\Desenvolvimento\Desenvolvedores\Oliveto\MTR\Documentação Portais\RS</span></p>
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

    .doc {
        font-family: 'IBM Plex Mono', monospace;
        font-size: 12px; 
    }
</style>