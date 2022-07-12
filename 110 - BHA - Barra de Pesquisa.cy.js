describe.only('bha1 - Teste 2e2 Casas Bahia - Acessa site e Pesquisa', () => {
    
    // Visita site proposto
    it('t1 - Visita site proposto', () => {
        cy.visit('https://www.casasbahia.com.br/');
        cy.wait(7000);       
    
    });

    // Clica no botão de cookie    
    it('t2 - Clica botão de Cookie ', () => {
        cy.get('.cc-allow').click();    
        cy.wait(2000);      
    
    });

    // Digita termo de busca
    it('t3 - Digitar termo de Busca', () => {
        cy.get('#search_label').type('iphone'); 
        cy.wait(7000);      
    
    });
   
    // Clica na lupa de pesquisa
    it('t4 - Clica na Lupa de Pesquisa', () => {
        cy.get('#btnOK').click();
        cy.wait(10000);      
   
    });

    // Pesquisa produto específico e clica no próprio produto
    it('t5 - Busca Produto Específico e Clica no mesmo', () => {
        cy.contains('h2', 'iPhone 11 Apple 64GB Preto').click();
        cy.wait(2000);

    });

});
