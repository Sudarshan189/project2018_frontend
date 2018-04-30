import { Project2018Page } from './app.po';

describe('project2018 App', () => {
  let page: Project2018Page;

  beforeEach(() => {
    page = new Project2018Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
