import { TextBlock, TitleBlock } from './Blocks';

export class SiteBar {
  constructor(selector, update) {
    this.domElement = document.querySelector(selector);
    this.update = update;
    this.init();
  }

  init() {
    this.domElement.addEventListener('submit', this.addBlock);
    this.domElement.innerHTML = this.template;
  }

  get template() {
    return [block('title'), block('text')].join('');
  }

  addBlock = (evt) => {
    evt.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;
    const Constructor = type === 'text' ? TextBlock : TitleBlock;
    const newBlock = new Constructor(value, { styles });
    event.target.value.value = '';
    event.target.styles.value = '';
    this.update(newBlock);
  };
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
