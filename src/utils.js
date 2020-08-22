export function row(content, styles = '') {
  return `<div class='row' style='margin:0; ${styles}'>${content}</div>`;
}

export function col(content) {
  return `<div class='col-sm' style='padding: 0;'>${content}</div>`;
}

export function css(styles = {}) {
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(';');
}
