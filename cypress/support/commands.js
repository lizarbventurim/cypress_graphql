import Ajv from "ajv";

Cypress.Commands.add("validateSchema", (schema, body) => {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(body);

  if (!valid) {
    validate.errors.map((err) => {
      console.log(err);
      throw new Error(
        `Propriedade: ${err.instancePath} | Tipo: ${err.keyword} | Messagem: ${err.message}`
      );
    });
  }
});
