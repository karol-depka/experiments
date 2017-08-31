import { ExperimentsPage } from './app.po';

describe('experiments App', () => {
  let page: ExperimentsPage;

  beforeEach(() => {
    page = new ExperimentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
