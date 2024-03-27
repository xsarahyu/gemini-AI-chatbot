describe('Messages Page', () => {
  it('Message page can be opened and a message can be posted', () => {
    const message = 'Test message'
    cy.visit('http://localhost:5173')
    cy.get('[data-testid=loginNavBarButton]').click()
    cy.get('[data-testid=loginButton]').click()
    cy.url().should('eq', 'http://localhost:5173/messages')
    cy.get('[data-testid="messageInput"]').type(message)
    cy.get('[data-testid="submitMessageButton"]').click()
    cy.contains('#postedMessage', message).should('be.visible')
  })
})