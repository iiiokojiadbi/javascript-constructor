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
  const { styles } = block.options;
  return row(col(`
        <div class='col-sm' style='margin-bottom: 0;'>
          <p>${ block.value }</p>
        </div>
  `), styles);
}

function textColumns(block) {
  const { styles } = block.options;
  const items = block.value.map((item) => col(`<p>${ item }</p>`)).join('');
  return row(items, styles);
}

function image(block) {
  const { alt, styles, imageStyles } = block.options;
  return row(`<img src='${ block.value }' alt='${ alt }' style='${ imageStyles }' />`, styles);
}


export const templates = {
  title,
  text,
  textColumns,
  image,
};