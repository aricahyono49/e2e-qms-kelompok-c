describe("Register Page authentication-integration app", () => {
  it("wait for document network call", () => {
    cy.visit("/register");
    cy.get("input[id='username']").type("dts2021@tes.com");
    cy.wait(1000);
    cy.get("input[id='password']").type("dtsitp");
    cy.wait(1000);
    cy.get("form").submit();
    cy.contains("span", "Register Success");
});
it("Test with empty data register", () => {
    cy.visit("/register");
    cy.get("form").submit();
    cy.get("div").should("contain", "Mohon username tidak boleh kosong!");
    cy.get("div").should("contain", "Mohon password tidak boleh kosong!");
});
});
