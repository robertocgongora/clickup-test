describe('clickup quick test', () => {
  it('should click on + element', () => {
    cy.visit("https://app.clickup.com");
    cy.get('#login-email-input').type('robertocgongora@gmail.com');
    cy.get('#login-password-input').type('Fabrieslaonda171183.,');
    cy.get('button[data-test="login-submit"]').click();
    cy.wait(15000);
    cy.get('a[tooltipmodifier="tooltip_right"]').parent().parent().parent().parent().parent().parent().trigger('mouseover')
    cy.wait(4000);
  });
});