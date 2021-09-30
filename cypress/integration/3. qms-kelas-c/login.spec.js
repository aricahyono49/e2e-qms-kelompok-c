  describe("Test Access Login Page", () => {
    beforeEach(() => {
      cy.wait(2000);
      cy.visit("/");
    });
  it("Test access Beranda Page with not Login", () => {
    cy.visit("/beranda");
    cy.url().should("include", "/");
    });
    it("Test access Booking Queue Page with not Login", () => {
      cy.visit("/book-nomor-antrian");
      cy.url().should("include", "/");
    });
  it("Test access List Bank Page with not Login", () => {
    cy.visit("/daftar-bank");
    cy.url().should("include", "/");
  });
  it("Test access Bank Queue Detail Page with not Login", () => {
    cy.visit("/info-antrian");
    cy.url().should("include", "/");
  });

  it("Test load login page", () => {
    cy.visit("/");
    cy.url().should("include", "/");
  });

  });

  describe("Test Form Login in Login Page", () => {
    beforeEach(() => {
      cy.wait(2000);
      cy.visit("/");
    });

    it("Test load content login", () => {
      cy.get("form").submit();
      cy.get("span").should("contain", "Belum punya akun? Daftar");
    });

    it("Test form login with empty data", () => {
      cy.get("form").submit();
      cy.get("span").should("contain", "login gagal");
    });

    it("Test form login with wrong data", () => {
      cy.get("input[id='username']").type("dts2021@tesdwadwa.com");
      cy.wait(1000);
      cy.get("input[id='password']").type("dts2021");
      cy.wait(1000);
      cy.get("form").submit();
      cy.get("span").should("contain", "login gagal");
    });

    it("wait for document network call", () => {
      cy.get("input[id='username']").type("dts2021@tes.com");
      cy.get("input[id='password']").type("admin");
      cy.wait(1000);
      cy.get("form").submit();
      cy.url().should("include", "/beranda");
    });
  });

