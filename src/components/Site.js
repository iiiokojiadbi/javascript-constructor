export class Site {
  constructor(selector) {
    this.domElement = document.querySelector(selector);
  }

  render(model) {
    model.forEach((block) => {
      this.domElement.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}
