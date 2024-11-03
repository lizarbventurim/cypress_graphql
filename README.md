# cypress_graphql

Este repositório contém testes para uma [[API GraphQL](https://countries.trevorblades.com/)] utilizando o Cypress. Os testes incluem a validação do schema e dos resultados retornados pela API.

## Estrutura do Projeto

```
fixtures/
└── schema/
    
support/
```

### Descrição dos Arquivos

- **cypress/api/searchCountries.cy.js**: Contém o teste para buscar países de um continente específico utilizando uma query GraphQL.
- **cypress/fixtures/schema/searchCountries.json**: Schema JSON utilizado para validar a estrutura da resposta da API.
- **cypress/support/commands.js**: Adiciona comandos customizados ao Cypress, incluindo a validação de schema.
- **cypress/support/e2e.js**: Arquivo de configuração global do Cypress, onde são importados os comandos e plugins necessários.
- **cypress.config.js**: Configurações do Cypress, incluindo a configuração do plugin Allure para relatórios.
- **jsconfig.json**: Configurações do compilador JavaScript.
- **package.json**: Lista as dependências do projeto e scripts para rodar os testes.

## Dependências

- [Cypress](https://www.cypress.io/)
- [cypress-plugin-api](https://github.com/archfz/cypress-plugin-api)
- [ajv](https://ajv.js.org/)
- [@mmisty/cypress-allure-adapter](https://github.com/mmisty/cypress-allure-adapter)

## Como Executar os Testes

1. Instale as dependências:
    ```sh
    npm install
    ```

2. Abra o Cypress:
    ```sh
    npm run open
    ```

3. Execute os testes:
    ```sh
    npm run test
    ```

## Licença

Este projeto está licenciado sob a Licença Apache 2.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.