describe("Beranda Page End2End Test", () => {
  it("visit beranda should redirect to login", () => {
    cy.visit("/beranda");
    cy.url().should("match", /\//);
  });

  it("visit login page after login should redirect to beranda", () => {
    cy.login();
    cy.wait(2000);
    cy.visit("/");
    cy.url().should("match", /beranda/);
  });

  // it("click eform should redirect to eform bri", () => {
  //   cy.login();
  //   cy.wait(2000);
  //   cy.get("a").click();
  //   cy.url().should("match", /eform.bri.co.id/);
  // });

  it("click button Layanan selesai", () => {
    cy.login();
    // cy.contains("Bank KCP Soreang");
    cy.wait(2000);
    cy.contains("button", "Layanan Selesai").click();
  });
});
