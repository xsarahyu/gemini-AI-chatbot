describe('Login Page', () => {
  it('login page can be opened', () => {
    cy.visit('http://localhost:5173')
    cy.contains('Login')
    cy.get('[data-testid=loginNavBarButton]').click()
    cy.url().should('eq', 'http://localhost:5173/login')
    cy.contains('Username').should('exist')
    cy.contains('Password').should('exist')
  })
})