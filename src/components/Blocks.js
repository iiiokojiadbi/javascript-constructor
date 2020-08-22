import { row, col } from './../utils';

class Blocks {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован!');
  }
}

export class TitleBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { tag = 'h2', styles } = this.options;
    return row(
      col(`
        <div class='col-sm'>
          <${tag}>${this.value}</${tag}>
        </div>
  `),
      styles
    );
  }
}

export class ImageBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { alt, styles, imageStyles } = this.options;
    return row(
      `<img src='${this.value}' alt='${alt}' style='${imageStyles}' />`,
      styles
    );
  }
}

export class TextBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    return row(
      col(`
        <div class='col-sm' style='margin-bottom: 0;'>
          <p>${this.value}</p>
        </div>
  `),
      styles
    );
  }
}

export class TextColumnsBlock extends Blocks {
  constructor(value, options) {
    super(value, options);
  }

  toHTML() {
    const { styles } = this.options;
    const items = this.value.map((item) => col(`<p>${item}</p>`)).join('');
    return row(items, styles);
  }
}
