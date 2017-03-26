import { Angular2ComputedObservablesPage } from './app.po';

describe('angular2-computed-observables App', function() {
  let page: Angular2ComputedObservablesPage;

  beforeEach(() => {
    page = new Angular2ComputedObservablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
