describe("st._legacy_add_rows", () => {
  // Doesn't have to run before each, since these tests are stateless.
  before(() => {
    // Increasing timeout since we're waiting for
    // dataframes, tables, and charts to be rendered.
    Cypress.config("defaultCommandTimeout", 30000);

    cy.loadApp("http://localhost:3000/");

    cy.rerunScript();

    // Wait for 'data-stale' attr to go away, so the snapshot looks right.
    cy.get(".element-container")
      .should("have.attr", "data-stale", "false")
      .invoke("css", "opacity", "1");

    cy.prepForElementSnapshots();
  });

  beforeEach(() => {
    // Check that the app is fully loaded
    return cy.get(".element-container").should("have.length", 24);
  });

  it("works for all elements that support it", () => {
    cy.get(".element-container [data-testid='stTable']").should(
      "have.length",
      3
    );
    cy.get(".element-container .stDataFrame").should("have.length", 3);
    cy.get(".element-container [data-testid='stVegaLiteChart']").should(
      "have.length",
      18
    );
  });

  it("correctly adds rows to tables and dataframes", () => {
    cy.get(".element-container [data-testid='stTable'] tr").should(
      "have.length",
      10
    );
    cy.get(
      ".element-container .stDataFrame [data-testid='StyledDataFrameColHeaderCell']"
    ).should("have.length", 6);
  });
});
