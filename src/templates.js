import { row, col } from './utils';

function title(block) {
  const { tag, styles } = block.options;
  
  return row(col(`
        <div class='col-sm'>
          <${ tag }>${ block.value }</${ tag }>
        </div>
  `), styles);
}

function text(block) {
  const { tag, styles } = block.options;
  
  return row(col(`
        <div class='col-sm'>
          <p>${ block.value }</p>
        </div>
  `), styles);
}

function textColumns(block) {
  const items = block.value.map((item) => col(`<p>${ item }</p>`)).join('');
  return row(items, block.options.styles);
}


export const templates = {
  title,
  text,
  textColumns,
};