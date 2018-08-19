import { AdminPortalPage } from './app.po';

describe('admin-portal App', () => {
  let page: AdminPortalPage;

  beforeEach(() => {
    page = new AdminPortalPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
