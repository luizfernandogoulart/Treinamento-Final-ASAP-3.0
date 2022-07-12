describe.only('bha2 - Teste 2e2 Casas Bahia - Acessa Site e Clica em Perfil', () => {
    
    // Visita site proposto
    it('t1 - Visita site proposto', () => {
        cy.visit('https://www.casasbahia.com.br/');
        cy.wait(7000);       
       
    });

    // Clica no botão de cookie    
    it('t2 - Clica botão de Cookie ', () => {
        cy.get('.cc-allow').click();    
        cy.wait(4000);      
    
    });

    // Clica no menu para Fazer Login
    it('t3 - Clica no menu para Fazer Login', () => {
        cy.get('.profile > #MenuWelcomeDeslogado').click(); 
        cy.wait(7000);      
        
    });
   

});

                
describe.only('bha3 - Teste 2e2 Casas Bahia - Clica Perfil e Faz Login', () => {

    it('t4 - Digita dados de Login', () => {
            
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

    })
        
})
