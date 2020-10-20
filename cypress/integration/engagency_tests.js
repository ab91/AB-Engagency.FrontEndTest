describe("Front End Tests", () => {

    it("Nav links should disappear at mobile resolution", () => {
        cy.visit("http://localhost:8000/");
        cy.viewport(500, 750);
        cy.get('[data-cy=navigation]').should('not.exist');
    });

    it("Nav links should disappear at tablet resolution", () => {
        cy.visit("http://localhost:8000/");
        cy.viewport(800, 750);
        cy.get('[data-cy=navigation]').should('not.exist');
    });

});
