import imageJs from './assets/imageJs.jpg';

console.log(imageJs);

export const model = [
  {
    type: 'title', value: 'Конструктор сайтов на чистом JavaScript!', options: {
      tag: 'h2',
      styles: 'background: #fff; color: #000; text-align: left; padding: 24px; box-shadow: inset -5px -10px 20px rgba( 0, 0, 0, 0.3), inset -5px 10px 20px rgba( 0, 0, 0, 0.3);',
    },
  },
  {
    type: 'textColumns', value: [
      'Приложение на чистом JavaScript, без использования библиотек',
      'По принципам SOLID и ООП',
      'JavaScript – это просто и интересно!',
    ], options: {
      styles: 'padding: 20px; color: #fff; text-align: center; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); font-weight: 900; padding-top: 20px; padding-bottom: 20px;',
    },
  },
  {
    type: 'image',
    value: imageJs,
    options: {
      alt: 'картинка с изображением эмблемы JavaScript',
      styles: 'padding: 20px; display: flex; justify-content: center;',
      imageStyles: 'max-width: 500px; border-radius: 10px;',
    },
  },
  {
    type: 'text',
    value: 'Любой контент, какой я захочу',
    options: {
      styles: 'background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); color: #fff; padding: 20px; text-align: center;',
    },
  },
];