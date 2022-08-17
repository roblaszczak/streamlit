describe("DataFrame with different sizes", () => {
  const expected = [
    { width: "704px", height: "400px" },
    { width: "250px", height: "150px" },
    { width: "250px", height: "400px" },
    { width: "704px", height: "150px" },
    { width: "704px", height: "5000px" }
  ];

  before(() => {
    cy.loadApp("http://localhost:3000/");
  });

  it("should show as expected", () => {
    cy.get(".stDataFrame")
      .should("have.length", 5)
      .each(($element, index) => {
        return cy
          .wrap($element)
          .should("have.css", "width", expected[index].width)
          .should("have.css", "height", expected[index].height);
      });
  });
});
