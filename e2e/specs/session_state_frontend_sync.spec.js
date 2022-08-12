// Regression test for https://github.com/streamlit/streamlit/issues/3873

describe("checkbox state update regression", () => {
  beforeEach(() => {
    cy.loadApp("http://localhost:3000/");
  });

  it("checking one disables the other", () => {
    cy.get("[role='checkbox']").should("have.length", 2);
    cy.getIndexed("[role='checkbox']", 0).should(
      "have.attr",
      "aria-checked",
      "true"
    );
    cy.getIndexed("[role='checkbox']", 1).should(
      "have.attr",
      "aria-checked",
      "false"
    );

    cy.getIndexed("[role='checkbox']", 1).click();
    cy.getIndexed("[role='checkbox']", 0).should(
      "have.attr",
      "aria-checked",
      "false"
    );
    cy.getIndexed("[role='checkbox']", 1).should(
      "have.attr",
      "aria-checked",
      "true"
    );
  });
});
