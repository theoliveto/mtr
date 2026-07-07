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
                <div class="role-card destinador justify">
                    <div class="swatch"></div>
                    <h3>Resíduos</h3>
                    <p>
                        Existe uma série de atributos necessários em um resíduo, para que os portais aceitem a Emissão do MTR. 
                    </p>
                    <p class="mt"> 
                        As informações vão estar no cadastro do material e algumas também estão na relação de itens do Contrato. 
                        Para consultar qual é o Contrato da OS, Clicar na opção <em>"Consultar Contrato"</em>, no menu <em>"Útil"</em>.
                    </p>
                    <p class="mt">
                        Para as informações que estão no Contrato se tornam prioridade em relação ao Cadastro de Materiais, 
                        mas como nem tudo pode ser informado no Contrato é importante ter as informações completas em ambos os lugares.
                    </p>
                    <p class="mt"> 
                        Antes da 262, os cadastros desses atributos, estavam espalhados outros lugares.
                        Mas depois da 262.095, foi centralizado em <strong><em>Resíduos > Cadastro de Resíduos - MTR</em></strong>.
                        Então logo abaixo colocarei os locais da 261, mas se um cliente for atualizado para 262, é só ir neste novo menu.
                    </p>
                    <ul>
                        <li>
                            <strong>Quantidade</strong> 
                            <ul class="mt mb" type="square">
                                <li>Resíduos > Ordem de Serviço Resíduos - <a href="https://prnt.sc/ra15VvlXzR6l" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/yzHAtmonM3H7" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Código do IBAMA</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material (F5 no campo) - <a href="https://prnt.sc/Zs4oL3MTh3i9" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/JM8xJixOkuB8" target="_blank" class="link-cadastros">Confira</a></li>
                                <li class="justify">
                                    <strong>Obs.:</strong> Não possui uma tela de cadastro, e também não há integração que consulta esses dados.
                                    O que aconteceu, foi que um desenvolvedor em 2018, inseriu manualmente, todos esses dados na TBL_VENDAS_ORDEM_SERVICO_RESIDUOS_IMA.
                                </li>
                            </ul>
                        </li>
                        <li>
                            <strong>Descrição do Resíduo</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material (Vem do código IBAMA) - <a href="https://prnt.sc/MRJHwRvbC-Yz" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Acondicionamento</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/a9gU3P2XKRzv" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Utilitários > Mais... > Cadastro de Acondicionamento de MTR - <a href="https://prnt.sc/ud3c2xpzuyqL" target="_blank" class="link-cadastros">Confira</a></li> 
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/lH93gLk5lAXW" target="_blank" class="link-cadastros">Confira</a></li> 
                            </ul>
                        </li>
                        <li>
                            <strong>Classe</strong> 
                            <ul class="mt mb" type="square"> 
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/WC3cohZqBHQG" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Materiais > Subgrupo - <a href="https://prnt.sc/pbbfn9rV_2BP" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Tecnologia (Forma de Tratamento)</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/2g0WyTv2xCyx" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Cadastros Complementares > Forma de Tratamento de Resíduo - <a href="https://prnt.sc/I_UEGLHkCGqq" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/VhCSXTi4P_Gi" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Estado Físico</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/gwAhjqebxtp9" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Materiais > Estado de Materiais - <a href="https://prnt.sc/erb8CfrAjVHZ" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Unidade</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/8If4rxTcvhfy" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Materiais > Unidade - <a href="https://prnt.sc/RodxqrT6u9mq" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Número da ONU</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/e6flnleGTf7a" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Classe de Risco</strong> 
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/uEfQC5W0keQc" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Nome de Embarque</strong>  
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/8bNOoTCX-pM6" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Grupo de Embalagem</strong>  
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/PivNrMhcisES" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Unidade e Valor da Densidade</strong>  
                            <ul class="mt mb" type="square">
                                <li>Materiais > Cadastro de Material - <a href="https://prnt.sc/45bZnIX7ZZzH" target="_blank" class="link-cadastros">Confira</a></li>
                                <li class="justify">
                                    <strong>Obs.:</strong>A densidade é utilizada para resíduos em que a sua unidade é em <strong>Litros</strong>, 
                                    pois a maioria dos portais no momento da emissão convertem a quantidade em litros para quilos, 
                                    e sem a densidade informada, o resíduo vai emitir com quantidade zerada, mesmo com a quantidade informada na OS.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="role-card armazedor justify">
                    <div class="swatch"></div>
                    <h3>Destinador Terceiro e Armazenador Temporário</h3>
                    <p>
                        No Resíduo é possível incluir 2 entidades para diferentes possíveis cenários dentro do fluxo de emissão de MTR.
                    </p>
                    <p class="mt"> 
                        O Destinador Terceiro, segue a mesma lógica de cadastro de um destinador padrão da OS, ou seja, 
                        precisa que as mesmas informações de autenticação, estajam cadastradas <a href="https://prnt.sc/M88ajUnSqRFU" target="_blank" class="link-cadastros">Confira</a>.
                    </p>
                    <p class="mt">
                        Porém ele é informado no resíduo, no fluxo, ele acaba tendo outro caminho na execução do processo.
                    </p>
                    <ul>
                        <li>
                            <strong>Ele pode ser inserido em: </strong> 
                            <ul class="mt mb" type="square">
                                <li>Resíduos > Ordem de Serviço Resíduos - <a href="https://prnt.sc/g727kSRgbVt1" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Materiais > Cadastro de Materiais - <a href="https://prnt.sc/rs_HLUXp5pfK" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/9UzAx_rBy3F4" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
                    </ul>
                    <p class="mt">
                        Já o Armazenador Temporário, como mencionado anteriormente, ele é cadastrado como um fornecedor no Controller, 
                        porém diferente do destinador, é necessário marcar a flag de Armazenador Temporário <a href="https://prnt.sc/J7wZZoZvnMOx" target="_blank" class="link-cadastros">Confira</a>.
                    </p>
                    <p class="mt"> 
                        Para essa flag aparecer, precisa marcar a configuração em: Utilitários > Configurações > Resíduos - MTR <a href="https://prnt.sc/QmWeZqsfdGh4" target="_blank" class="link-cadastros">Confira</a>.
                        Ele verifica essa marcação, baseado no estado do Fornecedor, exemplo: Se o fornecedor é de MG, e o estado de MG na config está marcado, então irá aparecer, 
                        mas se o estado do fornecedor for RS, e não tem marcação nas configs de MTR, para o estado de RS, ela fica invisível.
                    </p>
                    <ul>
                        <li>
                            <strong>Ele pode ser inserido em: </strong> 
                            <ul class="mt mb" type="square">
                                <li>Resíduos > Ordem de Serviço Resíduos - <a href="https://prnt.sc/rMNVCvdElTq0" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Materiais > Cadastro de Materiais - <a href="https://prnt.sc/1PvkU3RLHUmi" target="_blank" class="link-cadastros">Confira</a></li>
                                <li>Resíduos > Ordem de Serviço Resíduos > Útil > Consultar Contrato - <a href="https://prnt.sc/W_tih62A9Al7" target="_blank" class="link-cadastros">Confira</a></li>
                            </ul>
                        </li>
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

<style scoped>
    .mt {
        margin-top: 5px;
    }

    .mb {
        margin-bottom: 5px;
    }

    .justify {
        text-align: justify;
    }

    .justify p {
        text-align: justify;
    }
</style>