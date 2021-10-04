import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  async getHtml() {
    return `<h1>Welcome</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati vero
      consequatur veniam
    </p>`;
  }
}
