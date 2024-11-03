//Realiza a validação JSON Schema
Cypress.Commands.add("validateSchema", (schema, body) => {
    cy.fixture(schema).then((json) => {
      const validate = ajv.compile(json);
      const isValid = validate(body);
      if (!isValid)
        validate.errors.map((err) => {
          console.log(err);
          throw new Error(
            `Propriedade: ${err.instancePath} | Tipo: ${err.keyword} | Messagem: ${err.message}`
          );
        });
    });
  });