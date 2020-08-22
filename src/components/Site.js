export class Site {
  constructor(selector) {
    this.domElement = document.querySelector(selector);
  }

  render(model) {
    this.domElement.innerHTML = '';
    model.forEach((block) => {
      this.domElement.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}
