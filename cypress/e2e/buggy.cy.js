const { beforeEach } = require("mocha");
import { acessaSite, geraNickname } from '../support/helpers';

context ('Realizando testes no site Buggy Rating', () => {
    
    beforeEach (() => {
        acessaSite();
    })

    describe('Home', () => {

        it('Deve ser possível clicar em carro Popular Make', () => {
            cy.get('[title="Lamborghini"]').click();
            cy.contains('Model').should('be.visible');

        })
        it('Deve ser possível clicar em Popular Model', () => {
            cy.get('[title="Diablo"]').click();
            cy.contains('Specification').should('be.visible');

        })
        it('Deve ser possível clicar em Overall Rating', () => {
            cy.get(':nth-child(3) > .card > a > .img-fluid').click();
            cy.contains('Make').should('be.visible');

        })
    })

    describe('Registrer', () => {

        it('Deve ser possível se registrar', () => {
            cy.get('.btn-success-outline').click();
            
            cy.get('#username').type(geraNickname());
            cy.get('#firstName').type('Carolina');
            cy.get('#lastName').type('Justo');
            cy.get('#password').type('30117556Ca@');
            cy.get('#confirmPassword').type('30117556Ca@');

            cy.get('.btn-default').click();

            cy.contains('Registration is successful').should('be.visible');

        })

        describe('Campos obrigatórios e validações', () => {

            it('Não deve ser possível registrar com o campo Login vazio', () => {
                cy.get('.btn-success-outline').click();

                cy.get('#firstName').type('Carolina');
                cy.get('#lastName').type('Justo');
                cy.get('#password').type('969696Ca@');
                cy.get('#confirmPassword').type('969696Ca@');

                cy.get('.btn-default').should('be.disabled');
            })

            it('Não deve ser possível registrar com o campo First name vazio', () => {
                cy.get('.btn-success-outline').click();

                cy.get('#username').type(geraNickname());
                cy.get('#lastName').type('Justo');
                cy.get('#password').type('969696Ca@');
                cy.get('#confirmPassword').type('969696Ca@');

                cy.get('.btn-default').should('be.disabled');
            })

            it('Não deve ser possível registrar com o campo Last name vazio', () => {
                cy.get('.btn-success-outline').click();

                cy.get('#username').type(geraNickname());
                cy.get('#firstName').type('Débora');
                cy.get('#password').type('969696Ca@');
                cy.get('#confirmPassword').type('969696Ca@');

                cy.get('.btn-default').should('be.disabled');
            })

            it('Não deve ser possível registrar com o campo Password vazio', () => {
                cy.get('.btn-success-outline').click();

                cy.get('#username').type(geraNickname());
                cy.get('#firstName').type('Débora');
                cy.get('#lastName').type('Justo');
                cy.get('#confirmPassword').type('969696Ca@');

                cy.get('.btn-default').should('be.disabled');
            })

            it('Não deve ser possível registrar com o campo Confirm password vazio', () => {
                cy.get('.btn-success-outline').click();

                cy.get('#username').type(geraNickname());
                cy.get('#firstName').type('Débora');
                cy.get('#lastName').type('Justo');
                cy.get('#password').type('969696Ca@');

                cy.get('.btn-default').should('be.disabled');
            })
            
        })

    })

    describe('Login', () => {

        it('Deve ser possível logar com credenciais válidas', () => {
            cy.get('.input-sm').type('CarolJusto2');
            cy.get('[name="password"]').type('30117556Ca@');

            cy.get('.btn-success').click();

            cy.contains('Hi, Carolina').should('be.visible');

        })

        it('Não deve ser possível logar com username inválido', () => {
            cy.get('.input-sm').type('CarolJusto0');
            cy.get('[name="password"]').type('30117556Ca@');

            cy.get('.btn-success').click();

            cy.contains('Invalid username/password').should('be.visible');
        })

        it('Não deve ser possível logar com senha inválida', () => {
            cy.get('.input-sm').type('CarolJusto2');
            cy.get('[name="password"]').type('30117556Ca!');

            cy.get('.btn-success').click();

            cy.contains('Invalid username/password').should('be.visible');
        })
       
    })

})