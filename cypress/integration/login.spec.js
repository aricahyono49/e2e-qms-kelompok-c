describe("Login Page authentication-integration app", () => {
  it("successfully loads", () => {
    cy.visit("http://127.0.0.1:3000");
  });
  it("wait for document network call", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[id='username']").type("dts2021@tes.com");
    cy.wait(1000);
    cy.get("input[id='password']").type("admin");
    cy.wait(1000);
    cy.get("form").submit();
  });
});
