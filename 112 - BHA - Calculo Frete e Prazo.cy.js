describe.only('b1 - Teste 2e2 Casas Bahia - Acessa site e Pesquisa', () => {
    
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
        cy.get('#search_label').type('notebook'); 
        cy.wait(3000);      
    
    });
   
    // Clica botão de pesquisa
    it('t4 - Clica na lupa de Pesquisa', () => {
        cy.get('#btnOK').click();
        cy.wait(2000);      
   
    });

    // Pesquisa produto específico e clica
    it('t5 - Busca produto específico', () => {
        cy.contains('h2', 'Notebook Samsung').click();
        cy.wait(4000);

   
    });

});


describe.only('b2 - Teste 2e2 Casas Bahia - Calcula Frete e Compra', () => {

    
    // Digita Cep e Calcula Frete e Prazo de Entrega
    it('t6 - Digita Cep e Calcula Frete', () => {        

        // Digita cep e Calcula de frete 
        cy.get('#frete').type('09030350');
        cy.wait(2000);
        
        // // Clica no primeiro botão de Comprar 
        cy.get(':nth-child(6) > #buy-button').click();
        cy.wait(2000);


    });

});
      