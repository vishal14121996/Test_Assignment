class SearchPage {
    visitSearchEngine() {
      cy.visit('/');
    }
  
    submitSearchTerm(term) {
        cy.get('#APjFqb').type(term).type('{enter}');
    }
  
    getFirstSearchResult() {
      return cy.get('#rcnt').first();
    }
  }
  
  export default new SearchPage();
  