Feature: Suite de Cadastro.
...     Cadastrando para começar fazer entregas!


Scenario: Cadastro com metódo de entrega - Moto - com sucesso
    Given que eu acesse o site da buger-eats
    When desejo realizar um cadastro de um entregador
    And selecionar método de entrega 'Moto'
    And preencher todas informações corretamente
    Then devo validar a mensagem de sucesso

Scenario: Cadastro com metódo de entrega - Bicicleta - com sucesso
    Given que eu acesse o site da buger-eats
    When desejo realizar um cadastro de um entregador
    And selecionar método de entrega 'Bicicleta'
    And preencher todas informações corretamente
    Then devo validar a mensagem de sucesso

Scenario: Cadastro com metódo de entrega - Van/Carro - com sucesso
    Given que eu acesse o site da buger-eats
    When desejo realizar um cadastro de um entregador
    And selecionar método de entrega 'VanCarro'
    And preencher todas informações corretamente
    Then devo validar a mensagem de sucesso
