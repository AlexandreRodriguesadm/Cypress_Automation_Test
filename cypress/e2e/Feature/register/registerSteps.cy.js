/* global Given, And, Then, When */

import registerPage from '../../../support/pageobjects/registerPage'
const RegisterPage = new registerPage

Given("que eu acesse o site da buger-eats", () => {
    RegisterPage.acessoBugerEats();
})

When("desejo realizar um cadastro de um entregador", () => {
    RegisterPage.cadastreParaEntregas();
})

Then("devo validar a mensagem de sucesso", () => {
    RegisterPage.validarMensagemSucesso();
})
And("selecionar método de entrega 'Moto'", () => {
    RegisterPage.selecionarMoto();
})

And("selecionar método de entrega 'Bicicleta'", () => {
    RegisterPage.selecionarBicicleta();
})

And("selecionar método de entrega 'VanCarro'", () => {
    RegisterPage.selecionarVanCarro();
})

And("preencher todas informações corretamente", () => {
    RegisterPage.preencherInformações();
})

Then("devo validar a mensagem de sucesso", () => {
    RegisterPage.validarMensagemSucesso();
})


