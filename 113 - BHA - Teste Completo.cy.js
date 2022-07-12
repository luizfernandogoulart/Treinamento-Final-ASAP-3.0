describe.only('b1 - Teste 2e2 Casas Bahia - Pesquisa e Escolha', () => {
    
    // Visita site proposto
    it('t1 - Visita site proposto', () => {
        cy.visit('https://www.casasbahia.com.br/');
        cy.wait(2000);       
    
    });

    // Clica no botão de cookie    
    it('t2 - Clica botão de cookie ', () => {
        cy.get('.cc-allow').click();    
    
    });

    // Digita termo de busca
    it('t3 - Digitar termo de busca', () => {
        cy.get('#search_label').type('iphone'); 
        cy.wait(3000);      
    
    });
   
    // Clica botão de pesquisa
    it('t4 - Clica botão de pesquisa', () => {
        cy.get('#btnOK').click();
        cy.wait(2000);      
   
    });

    // Pesquisa produto específico e clica
    it('t5 - Busca produto específico', () => {
        cy.contains('h2', 'iPhone 11 Apple 64GB branco').click();
        cy.wait(2000);

    });

});

describe.only('b2 - Teste 2e2 Casas Bahia - Cálculo de Frete', () => {

    
    // Clica no botão de compra
    it('t6 - Clica botão Comprar', () => {

        // Funcionou colocando o produto diretamente no carrinho
        cy.get('.buy-button > .e1g87bf00 > .e5wsovx0').click();
        
        // Clica no campo "adicionar Seguro de Garantia Estendida"
        cy.get('.styled-check__StyledCheck-t3ye3u-0').click();
        cy.wait(2000);

        // Clica no campo de "sem garantia estendida"
        cy.get('.sc-gfqkcP > :nth-child(1) > .sc-fmWebE > .styled__Container-e8qtbd-0 > .radio__Radio-sc-13mvjoi-0').click();

        // Clica no botão de continuar para confirar "sem garantia estendida"
        cy.get('.sc-llYSUQ > .styled__StyledButton-sc-1marlud-0').click();          

        // Digita cep no campo de calculo de frete 
        cy.get('[data-testid="input-cep"]').type('09030350');
        cy.wait(2000);
        
        // Clica no botão de calcular frete 
        cy.get('.sc-gWXbKe > .styled__StyledButton-sc-1marlud-0').click();          
        cy.wait(2000);

        // Clica botão de Continuar compra
        cy.get('.sc-bXdNzS > .styled__StyledButton-sc-1marlud-0').click();    
        cy.wait(2000);

        /// até o calculo de frete novamente e está ok e funcional   

    });

});
                
describe.only('b3 - Teste 2e2 Casas Bahia - Login, Compra e Opção de Entrega', () => {

    it('t7 - Digita dados de Login', () => {
            
        // Digita cpf e clica botão de Continuar
        cy.get('#CpfCnpj').type('08838222029');
        cy.wait(2000);
        cy.get('#btnContinuarLogin').click();
        cy.wait(5000);
        
        // Digita senha
        cy.get('#Senha').focus().type('010577Sophi@');
        cy.wait(8000);

        // Clica no botão de Entrar 
        cy.get('#btnLogin').click();
        cy.wait(4000);

        // Aceita oçpão de entrega
        // cy.get('#btSelecionarPagamento').click();
        // cy.wait(5000);
            
        // Aceita opção de entrega
        cy.get('#btSelecionarPagamento2').click();
        cy.wait(5000);
    
        // Até aqui funcional em 06/07/2022      

    });

});

describe.only('b4 - Escolhe Tipo de Pagamento e Dados de Cartão', () => {
   
    it('t8 - Escolha do Tipo de Pagamento Cartão de Crédito', () => { 
       
        // Digita número de cartão de crédito 
        cy.get('#numeroCartao-cartao-novo-1').focus().type('5275506662796666');
        cy.wait(2000);
       
        // Digita nome do titular
        cy.get('#nomeTitular-cartao-novo-1').type('Machine Head Tropicalium');
        cy.wait(2000);
       
        // Ditia código se segurança
        cy.get('#cvv-cartao-novo-1').type('797');
       
        //   Até aqui está funcional, alternancia entre código de validação,
        //  intencionalmente produzido para evitar identificação do teste pelo captcha.
        // , desta forma foi na parte final do teste, dividiu-se esta ultima parte em dois
        // , para facilitação da conclusão do teste.  

    });

});

describe.only('b5 - Digita dados de Validação e Finaliza Compra', () => {
    it('t9 - Escolhe Mês e ano de Vencimento', () => {
        
        // Seleciona ano de vencimento do catão
        cy.get("#validadeMes-cartao-novo-1").select('03');
        cy.wait(2000);
            
        // Seleciona validade do cartão
        cy.get("#validadeAno-cartao-novo-1").select('2024');
        cy.wait(2000);
            
        // Seleciona quantidade de parcelas
        cy.get("#parcelamento-cartao-novo-1").select('1x sem juros R$ 0,00');
        cy.wait(5000);

        // Clica checkpoint armazena cartão 
        cy.get('#armazenar-cartao-novo-1');
        cy.wait(1000);

        // Clica no botão de Concluir Compra 2 
        cy.get('#btFinalizarCompraResumo2').focus().click();

        // Finalização do teste foi concluida. Ao final do teste, fora
        // identificado que há um tipo de proteção que não deixa finalizar o pedido com Cartão de Crédito Fake
        // Após análise por outro analista com maior expertise, o mesmo identificou que o teste final está funcionando.
        // , porém o site proposto possui algum tip de mecanismo que não deixa produzir o parcelamento, nem a conclusão do pedido.
        // , desta forma, este final de teste foi intencionalmente deixado em vermelho para identificação do ocorrido.
         
    });

});
