/// <reference types="cypress" />

import searchCountriesSchema from "../fixtures/schema/searchCountries.json";

describe("Buscar paíse da america do sul", () => {
  const queryString = `{
    continent(code: "SA") {
      name
      countries {
        name
      }
    }
  }`;

  it("Buscar países da America do Sul e verificar se existe o Brasil", () => {
    cy.api({
      url: "/",
      method: "POST",
      body: {
        query: queryString,
      },
    }).then((response) => {
      response.body.data.continent.countries.forEach((country) => {
        if (country.name === "Brazil") {
          expect(country.name).to.eq("Brazil");
        }
      });
      cy.validateSchema(searchCountriesSchema, response.body);
      expect(response.status).to.eq(200);
    });
  });
});
