import { ReduxFinishedPage } from './app.po';

describe('redux-finished App', () => {
  let page: ReduxFinishedPage;

  beforeEach(() => {
    page = new ReduxFinishedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
