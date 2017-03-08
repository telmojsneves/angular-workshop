import { TutsPage } from './app.po';

describe('tuts App', function() {
  let page: TutsPage;

  beforeEach(() => {
    page = new TutsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
