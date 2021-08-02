describe('Timeline Testing', () => {
  it('Visits Transithealth', () => {
    cy.visit('https://scarletstudio.github.io/transithealth')
    cy.contains('Explorer').click()
    
    cy.url().should('include', 'transithealth/explorer')
    
    cy.contains('Timeline View').click()
    
    cy.url().should('include', 'transithealth/timeline')
    
    cy.contains('searchableMetricSelector').click()
    
    
  })
})

