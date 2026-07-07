<template>
    <section>
        <div class="wrap">
            <div class="section-head">
                <h2>Cadastros Importantes</h2>
                <span class="idx">Composição do MTR</span>
            </div>
            <div class="cadastros">
                <div class="role-card gerador">
                    <div class="swatch"></div>
                    <h3>Responsáveis</h3>
                    <p>O ponto de partida para um fluxo de sucesso no MTR, é que as entidades responsáveis (Gerador, Transportador, Destinador e Armazenador Temporário), estejam devidamente configuradas.</p>
                    <p>A informações padrões que os portais pedem é: CNPJ, CPF, Senha e o Código de Unidade.</p>
                    <ul>
                        <li>Gerador (Cliente): Cadastros > Cliente - <a href="https://prnt.sc/d9u3ZaVUxVgf" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Transportador (Transportador): Cadastros > Transportador - <a href="https://prnt.sc/GGGc4Xy7DQOr" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Destinador (Fornecedor): Cadastros > Fornecedor - <a href="https://prnt.sc/weaZXySsLIwX" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Armazenador Temporário (Fornecedor): Cadastros > Fornecedor - <a href="https://prnt.sc/uJuaAT_fln3H" target="_blank" class="link-cadastros">Confira</a></li>
                    </ul>
                    <p><em><strong>Obs.:</strong> Esses dados informados no Controller, precisam obrigatóriamente estar informados de igual maneira no seu portal correspondente.</em></p>
                </div>
                <div class="role-card transportador">
                    <div class="swatch"></div>
                    <h3>Ordem de Serviço</h3>
                    <p>Na OS, antes de emitir, é necessário conferir alguns detalhes importantes:</p>
                    <ul>
                        <li>Precisa ter as 3 entidades principais informadas, sem qualquer uma delas, não é possível emitir o MTR. <a href="https://prnt.sc/BPwsgFFEODr6" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Conferir se a Placa e o Motorista estão informados também. <a href="https://prnt.sc/joFB8tiefTmc" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>E por fim, conferir se possui pelo 1 resíduo (com quantidade) informado. <a href="https://prnt.sc/cNxAY8qp9gRj" target="_blank" class="link-cadastros">Confira</a></li>
                    </ul>
                    <p><em><strong>Obs.:</strong> Existe uma configuração em: Utilitários > Configurações > Resíduos - MTR <a href="https://prnt.sc/PtoVkY80zm3L" target="_blank" class="link-cadastros">Confira</a></em></p>
                    <p><em>Que ignora os resíduos zerados, sem ela marcada, quando emitir o MTR, e o resíduo estiver zerado, retornará um erro do portal.</em></p>
                </div>
                <div class="role-card destinador">
                    <div class="swatch"></div>
                    <h3>Resíduos</h3>
                    <p>
                        Existe uma série de atributos que um resíduo precisa conter para que os portais aceitem a Emissão do MTR. 
                        Ou as informações vão estar no cadastro do material ou na relação de itens do Contrato. 
                        Para consultar qual é o Contrato da OS, Clicar na opção <em>"Consultar Contrato"</em>, no menu <em>"Útil"</em>.
                    </p>
                    <p>
                        A prioridade é o que está informado no Contrato, mas se lá estiver em branco, pega do Cadastro de Materiais, por isso a importancia de ter informação completa em ambos os lugares.
                    </p>
                    <ul>
                        <li>Quantidade (Resíduos > Ordem de Serviço Resíduos) - <a href="https://prnt.sc/ra15VvlXzR6l" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código do IBAMA - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Descrição do Resíduo (Vem do código IBAMA) - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código de Acondicionamento - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código da Classe - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código de Tecnologia - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código de Estado Físico - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Código da Unidade - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Número da ONU - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Classe de Risco - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Nome de Embarque - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Grupo de Embalagem - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Valor da Densidade - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                        <li>Unidade da Densidade - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import '../assets/styles.css'

    export default {
        name: 'CadastrosComponent'
    }
</script>