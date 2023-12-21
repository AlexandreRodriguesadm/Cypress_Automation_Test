/// <reference types="Cypress" />

import registerElements from '../elements/registerElements'
const register_Elements = new registerElements
const data = require('../../fixtures/data.js');

class registerPage {
    acessoBugerEats() {
        cy.visit('https://buger-eats.vercel.app')
        
    }
    cadastreParaEntregas() {
        cy.get(register_Elements.botaoCadastreParaEntregas()).click()

    }
    selecionarMoto() {
        cy.get(register_Elements.botaoMoto()).click()
    }
    selecionarBicicleta() {
        cy.get(register_Elements.botaoBicicleta()).click()

    }
    selecionarVanCarro() {
        cy.get(register_Elements.botaoVanCarro()).click()
    }
    preencherInformações() {
        const user1 = data.user1;

        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(user1.username);
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(user1.cpf);
        cy.get(':nth-child(3) > :nth-child(1) > input').type(user1.email);
        cy.get(':nth-child(3) > :nth-child(2) > input').type(user1.whatsapp);
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(user1.cep);
        cy.get(':nth-child(4) > :nth-child(1) > input').type(user1.number);
        cy.get(':nth-child(4) > :nth-child(2) > input').type(user1.details);
        cy.get(register_Elements.botaoBuscarCep()).click()
        cy.get(register_Elements.botaoEnviarFoto()).selectFile('cypress/fixtures/mclovin.jpg', {force: true})
        cy.get(register_Elements.botaoCadastroEntregas()).click()
        
    

    }
    validarMensagemSucesso() {
        cy.get(register_Elements.botaoFecharMensagem()).click()

    }



}

export default registerPage;