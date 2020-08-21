export const model = [
  {
    type: 'title', value: 'Test Title', options: {
      tag: 'h2',
      styles: 'background: darkred; color: #fff; text-align: center;',
    },
  },
  {
    type: 'text',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos fugit nihil ratione tempore. Animi debitis eum magnam quis vel vitae.',
    options: {
      styles: 'background: darkblue; color: yellow;',
    },
  },
  {
    type: 'textColumns', value: [
      '1 text',
      '2 text',
      '3 text',
    ], options: {
      styles: 'padding: 1rem',
    },
  },
];