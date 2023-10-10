/**
 * @memberOf cy
 * @function login
 * @param {string} email
 * @param {string} password
 */
Cypress.Commands.add('login', (email: string, password: string) => {
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=email]').handleEmail(email)
    cy.get('[data-cy=password]').type(password)
    cy.get('[data-cy=sign-in]').click()
})

/**
 * @memberOf cy
 * @function toastError
 */
Cypress.Commands.add('toastError', () => {
    cy.get('[data-cy=error-toast]').should('exist')
    cy.get('[data-cy=error-toast]').should('not.exist')
})

/**
 * @memberOf cy
 * @function handleEmail
 */
Cypress.Commands.add('handleEmail', { prevSubject: [true, 'element'] }, (subject, text) => {
    cy.wrap(subject).type('invalid-email')
    cy.get('[data-cy=sign-in]').click()
    cy.toastError()
    cy.wrap(subject).clear().type(text)
})

/**
 * @memberOf cy
 * @function handlePassword
 */
Cypress.Commands.add('handlePassword', { prevSubject: 'optional' }, (subject, text) => {
    if (subject) {
        cy.wrap(subject).type(text).clear()
    } else {
        cy.get('[data-cy=password]').type(text)
    }
})

