describe("Test Access Login Page", () => {
  beforeEach(() => {
     cy.login();
     cy.wait(2000);
     cy.visit("/book-nomor-antrian");
  });
  it("Test load Content Nomor Antrian Page", () => {
      cy.get("span").should("contain", "Dapatkan Nomor Antrian");
  });
  
});
