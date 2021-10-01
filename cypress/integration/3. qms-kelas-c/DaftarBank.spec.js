describe("Daftar Bank Page End to End Test", () => {
    beforeEach("Visit Daftar Bank Page", () => {
        cy.login();
        cy.wait(2000);
        cy.visit("/daftar-bank");
    });

    it("Test Load Content Daftar Bank Page", () => {
        cy.contains("tag a","Lihat Detail").click();
    });
    
});