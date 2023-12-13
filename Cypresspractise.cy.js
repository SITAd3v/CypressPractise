describe('template spec', () => {
  it('passes', () => {
    cy.visit('www.google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb').type('amazom.com')
    cy.get('.aajZCb > .lJ9FBc > center > .gNO89b').click()
   ----- adding extra line-------
  })
})
