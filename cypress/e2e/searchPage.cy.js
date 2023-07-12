import SearchPage from '../pageObjects/searchPage';

describe('Search Engine Test', () => {
  before(() => {
    cy.openSpecificBrowser('chrome');
  });

  beforeEach(() => {
    SearchPage.visitSearchEngine();
  });

  it('Performs a search and asserts the first result', () => {
    cy.fixture('search_item_overWeb').then((searchItem) => {
      const term = searchItem.searchValue;
      SearchPage.submitSearchTerm(term);
      
      SearchPage.getFirstSearchResult().should('contain.text', 'Cypress framework');
    });
  });
});
