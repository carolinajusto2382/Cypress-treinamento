describe('Visitando a página', () => {
  it('Acessando a url', () => {
    cy.visit('https://example.cypress.io')
  })
}),

describe('Acessando utilities', () => {
  it('Clicando em utilities', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Utilities').click();

    cy.url().should('include', '/utilities')
  })
}),

describe('Acessando assertions', () => {
  it('Clicando em Commands', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Commands').click();
    cy.contains('Assertions').click();

    cy.url().should('include', '/commands/assertions')
  })
})