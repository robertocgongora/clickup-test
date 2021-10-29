describe('clickup quick test', () => {
  it('should click on + element', () => {
    cy.visit("https://app.clickup.com");
    cy.get('#login-email-input').type('your username goes here');
    cy.get('#login-password-input').type('your password goes here');
    cy.get('button[data-test="login-submit"]').click();
    cy.wait(15000);
    cy.get('a[tooltipmodifier="tooltip_right"]').parent().parent().parent().parent().parent().parent().trigger('mouseover')
    cy.wait(4000);
  });
});