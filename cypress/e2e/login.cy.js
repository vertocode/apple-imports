import login from '../fixtures/login.json'

const { email, password } = login
describe('template spec', () => {
  it('passes', () => {
    cy.visit('/login')

    // This is a PrevSubject function:
    cy.get('[data-cy=email]').handleEmail(email)

    // PrevSubject optional:
    // We can use the same function with prevSubject.
    cy.get('[data-cy=password]').handlePassword(password)
    // We can use the same function without prevSubject.
    cy.handlePassword(password)
  })
})