import { OculusPage } from './app.po';

describe('oculus App', function() {
  let page: OculusPage;

  beforeEach(() => {
    page = new OculusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
