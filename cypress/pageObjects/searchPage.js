class SearchPage {
    elements={
        txtSearchBox:()=>cy.get('#APjFqb'),
        firstsearchResult:()=> cy.get('#rcnt')
    
        }
    visitSearchEngine() {
      cy.visit('/');
    }
  
    submitSearchTerm(term) {
        this.elements.txtSearchBox.type(term).type('{enter}');
    }
  
    getFirstSearchResult() {
      return this.elements.firstsearchResult.first();
    }
  }
  
  export default new SearchPage();
  