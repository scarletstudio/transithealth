/* global cy */
/* global expect */
describe('Timeline Testing', () => {
  it('Visits Transithealth', () => {
    
    cy.visit('http://localhost:8001/transithealth')
    cy.contains('Explorer').click()
    
    cy.url().should('include', 'transithealth/explorer')
    
    cy.contains('a','Timeline View').click()
    
    cy.url().should('include', 'transithealth/timeline')
    
    cy.get('.RemoveMetric').first().click()
    cy.get('.RemoveMetric').first().click()
    
    cy.get('.selectorButton').click()
    
    cy.get('.selectorModal').should('be.visible')
    
    cy.get('.searchBar input').type('sidewalk cafe', {delay: 100})
    
    cy.get('.metricResult').should('have.length',2)
    
    cy.get('.metricResult > p').should(($ps) => {
      expect($ps.eq(0)).to.contain('Daily')
      expect($ps.eq(1)).to.contain('Yearly')
    })
    
    cy.contains('.metricResult','Daily').click()
    
    
    cy.get('.selectorModal').should('not.exist')
    
    cy.contains('Button','Add Metric').click()
    
    cy.get('.MetricEditor').should(($spans) => {
      expect($spans.eq(0)).to.contain('Daily Sidewalk Cafe Permits')
    })
    
    cy.get('g').first().click({force:true})
    
    cy.get('.recharts-tooltip-wrapper').should('be.visible')
    
    cy.get('.CustomToolTip > p').should(($items) => {
      expect($items.eq(0)).to.contain('Daily Sidewalk Cafe Permits')
    })
    
    cy.wait(2000)
    
  })
})

