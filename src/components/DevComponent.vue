<template>
    <section class="mt-n">
        <div class="wrap">
            <div class="section-head">
                <h2>Úteis para o desenvolvimento</h2>
                <span class="idx">Debug e Banco de Dados</span>
            </div>
            <div class="cadastros">
                <div class="role-card gerador">
                    <div class="swatch"></div>
                    <h3>C#, VB e Banco de Dados</h3>
                    <p>
                        Toda a parte de lógica/regras de MTR estão no C#, seja por classes ou telas, apenas 2 métodos são feitos no VB.
                    </p>
                    <p class="mt"> 
                        O VB chama essas telas e classes para executar a ações do MTR, então se for necessário fazer algum ajuste, é no C# que precisa ser feito.
                    </p>
                    <p class="mt">
                        O Banco de Dados, é utilizado para armazenar todas as informações do MTR, não há nenhum regra ou programação a ser feita por lá.
                    </p>
                </div>
                <div class="role-card transportador">
                    <div class="swatch"></div>
                    <h3>Pontos de Partida</h3>
                    <p class="mb">
                        Sempre que necessário conferir algum erro (independente de onde está o problema), o debug começa a partir desses lugares:
                    </p>
                    <p class="mb">
                        <strong>Obs.:</strong> Antes de debuggar, consulte as informações do MTR nesta tabela <span class="mono">TBL_VENDAS_ORDEM_SERVICO_RESIDUOS_MTR_SINIR</span>
                    </p>
                    <p class="mb">
                        Nela possui todas informações necessárias para fazer uma pré-análise do problema que vier a ocorrer, como por exemplo conferir se o MTR foi emitido ou não.
                        Não se ater com o nome da tabela (que possui o "SINIR"), é apenas o nome, não significa que o MTR foi emitido exclusivamente no SINIR, nela estão armazenados as informações de qualquer portal.
                    </p>
                    <ul>
                        <li>
                            <p class="mb"><strong>Emissão</strong> - <a href="https://prnt.sc/cj8Jt955su-f" target="_blank" class="link-cadastros">Confira</a></p> 
                            <p class="mb">No program.cs do Vision.Controller.Exe adiciona o <span class="mono">dll.EmitirMTR(32830, false);</span></p>
                            <p class="mb">Que chama o método EmitirMTR do program.cs do Vision.Controller.Telas, esse program é o <a href="https://prnt.sc/KnT0hwn8BVg7" target="_blank" class="link-cadastros">Integracao</a>.</p>
                            <p class="mb">O primeiro parametro é o código da OS, e segundo é pra indicar, se a emissão é por resíduos ou agrupado, onde se for false, é agrupado.</p> 
                        </li>
                        <li>
                            <p class="mb"><strong>Recebimento</strong></p>  
                            <p class="mb">O recebimento possui tela, se for emissão normal é o <span class="mono">frm_RecebimentoMTRSINIR(425001135);</span></p>
                            <p class="mb">Se for emissão com armazenamento temporário é o <span class="mono">frm_RecebimentoMtrArmazenadoTemporariamente(425001135);</span></p>
                            <p class="mb">O primeiro parametro é o número do MTR emitido, e possui um segundo parametro, que não é obrigatório, passa uma lista de números de MTR's emitidos.</p> 
                        </li>
                        <li>
                            <p class="mb"><strong>CDF</strong> - <a href="https://prnt.sc/p0mwj5-D-Hwd" target="_blank" class="link-cadastros">Confira</a></p> 
                            <p class="mb">No program.cs do Vision.Controller.Exe adiciona o <span class="mono">dll.EmitirCDF(23277);</span></p>
                            <p class="mb">Que chama o método EmitirCDF do program.cs do Vision.Controller.Telas, esse program é o <a href="https://prnt.sc/KnT0hwn8BVg7" target="_blank" class="link-cadastros">Integracao</a>.</p>
                            <p class="mb">Passa apenas um parametro, que é o código ID do MTR recebimento, que está na salvo na <a href="https://prnt.sc/nqEDzO5vVeh7" target="_blank" class="link-cadastros">tabela</a>.</p> 
                        </li>
                        <li>
                            <p class="mb"><strong>Cancelar</strong></p>
                            <p class="mb">O cancelamento possui tela, é a <span class="mono">frm_CancelamentoMTRSINIR(23277);</span></p>
                            <p class="mb">Passa apenas um parametro que é o código ID do MTR que quer cancelar, que está na salvo na <a href="https://prnt.sc/nqEDzO5vVeh7" target="_blank" class="link-cadastros">tabela</a>.</p>
                        </li>
                        <li>
                            <p class="mb"><strong>Buscar MTR</strong> - <a href="https://prnt.sc/P4aOPrqisY3T" target="_blank" class="link-cadastros">Confira</a></p> 
                            <p class="mb">No program.cs do Vision.Controller.Exe adiciona o <span class="mono">dll.BuscarMTR(23277);</span></p>
                            <p class="mb">Que chama o método BuscarMTR do program.cs do Vision.Controller.Telas, esse program é o <a href="https://prnt.sc/KnT0hwn8BVg7" target="_blank" class="link-cadastros">Integracao</a>.</p>
                            <p class="mb">Passa apenas um parametro que é o código ID do MTR que quer buscar, que está na salvo na <a href="https://prnt.sc/nqEDzO5vVeh7" target="_blank" class="link-cadastros">tabela</a></p>
                            <p class="mb">Geralmente ele serve mais pra buscar o código de barras (se o portal retornar) e/ou o status do MTR.</p>
                        </li>
                        <li>
                            <p class="mb"><strong>Buscar CDF</strong> - <a href="https://prnt.sc/4YdtQw6C8Wgq" target="_blank" class="link-cadastros">Confira</a></p>
                            <p class="mb">No program.cs do Vision.Controller.Exe adiciona o <span class="mono">dll.BuscarCDF(23277);</span></p>
                            <p class="mb">Que chama o método BuscarCDF do program.cs do Vision.Controller.Telas, esse program é o <a href="https://prnt.sc/KnT0hwn8BVg7" target="_blank" class="link-cadastros">Integracao</a>.</p>
                            <p class="mb">Passa apenas um parametro que é o código ID do MTR que quer buscar, que está na salvo na <a href="https://prnt.sc/nqEDzO5vVeh7" target="_blank" class="link-cadastros">tabela</a></p>
                            <p class="mb">Nem todos os portais possuem esse endpoint (apenas o portal do ES e GO), pois ele serve mais pra clientes que emitiram o MTR pelo Controller, mas por algum motivo, o CDF não.</p>
                            <p class="mb">Então ele faz a busca por Data, que irá retornar um lista de CDF's e seus respectivos MTR's. Com isso, no Controller faz um match e insere no registro do MTR, o código do CDF que foi emitido no portal.</p>
                        </li>
                        <li>
                            <p class="mb"><strong>Complementar</strong> - <a href="" target="_blank" class="link-cadastros">Confira</a></p>
                        </li>
                        <li> 
                            <p class="mb"><strong>Visualizar MTR e CDF</strong></p>
                            <p class="mb">Como mencionado no começo, existe 2 métodos exclusivos feitos no VB, que são os visualizar o PDF do MTR ou CDF - <a href="https://prnt.sc/c8hqUBTTd9rW" target="_blank" class="link-cadastros">Confira</a></p>
                            <p class="mb">A única regra que existe nesses botões, é que só ficam habilitados se os campos: </p>
                            <p class="mb">
                                <ul class="mb" type="square">
                                    <li><span class="mono">CD_ARQUIVO_MTR_BANCO_ARQUIVOS</span> para MTR</li>
                                    <li><span class="mono">CD_ARQUIVO_CDF_BANCO_ARQUIVOS</span> para CDF</li>
                                </ul>
                            </p>
                            <p class="mt-1 mb">Da <span class="mono">TBL_VENDAS_ORDEM_SERVICO_RESIDUOS_MTR_SINIR</span> são diferentes de NULL - <a href="https://prnt.sc/zfqQV8HMtTes" target="_blank" class="link-cadastros">Confira</a></p>
                            <p class="mb">Então pegando de exemplo, o print do primeiro parágrafo e comparando com o print do segundo, o botão "Visualizar MTR", está habitado porque seu respectivo campo está diferente de NULL.</p>
                            <p class="mb">Já o botão "Visualizar CDF", está desabilitado, porque seu respectivo campo está NULL</p>
                        </li>
                        <li>
                            <p class="mb"><strong>Inserir MTR Manual</strong></p>
                            <p class="mb">Na tela de OS, aba "MTR Online" é possível inserir manualmente um MTR que foi emitido fora do Controller (por algum portal) - <a href="https://prnt.sc/xh_yVdvq3Hge" target="_blank" class="link-cadastros">Confira</a></p>
                            <p class="mb">Pelo botão "+", é chamada a tela <span class="mono">frm_InserirMTR.cs</span></p>
                            <p class="mb">Nela passamos os parametros: Código da OS, Código ID do MTR (podemos passar 0), esses são os campos que o VB carregar, e o cliente, precisa passar nos campos, as informações corretas.</p>
                            <p class="mb">No botão abaixo, do lápis, ele apenas deixa adicionar um código de CDF, e vai conferir, se o MTR está recebido, para então inserir esse CDF.</p>
                            <p class="mb">E por fim, no botão abaixo do lápis, o traço vermelho, limpa todos os vinculos e informações do MTR selecionado.</p>
                        </li>
                    </ul>
                </div>
                <div class="role-card destinador justify">
                    <div class="swatch"></div>
                    <h3>Serviço - GeradorMTROnline</h3>
                    <p>
                        Existe uma série de atributos necessários em um resíduo, para que os portais aceitem a Emissão do MTR. 
                    </p>
                    
                </div>
                <div class="role-card armazedor justify">
                    <div class="swatch"></div>
                    <h3>Erros Comuns e Soluções</h3>
                    <p>
                        No Resíduo é possível incluir 2 entidades para diferentes possíveis cenários dentro do fluxo de emissão de MTR.
                    </p>
                    
                </div>
                <div class="role-card gerador justify">
                    <div class="swatch"></div>
                    <h3>Processo da Ambiental</h3>
                    <p>
                        No Resíduo é possível incluir 2 entidades para diferentes possíveis cenários dentro do fluxo de emissão de MTR.
                    </p>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'

    export default {
        name: 'DevComponent',
    }
</script>

<style scoped>
    .mt-n {
        margin-top: -20px;
    }

    .mt {
        margin-top: 5px;
    }

    .mt-1 {
        margin-top: 10px;
    }

    .mb {
        margin-bottom: 5px;
    }

    .mono {
        font-family: 'IBM Plex Mono', monospace;
        background-color: #ccc;
        border: #282828 1px solid;
        padding: 3px;
    }
</style>