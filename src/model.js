import imageJs from './assets/imageJs.jpg';

import { Block } from './components/Block';


export const model = [
    new Block('title', 'Конструктор сайтов на чистом JavaScript!', {
      tag: 'h2',
      styles: 'background: #fff; color: #000; text-align: left; padding: 24px; box-shadow: inset -5px -10px 20px rgba( 0, 0, 0, 0.3), inset -5px 10px 20px rgba( 0, 0, 0, 0.3);',
    }),
    new Block('textColumns', [
      'Приложение на чистом JavaScript, без использования библиотек',
      'По принципам SOLID и ООП',
      'JavaScript – это просто и интересно!',
    ], {
      styles: 'padding: 20px; color: #fff; text-align: center; background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); font-weight: 900; padding-top: 20px; padding-bottom: 20px;',
    }),
    new Block('image', imageJs, {
      alt: 'картинка с изображением эмблемы JavaScript',
      styles: 'padding: 20px; display: flex; justify-content: center;',
      imageStyles: 'max-width: 500px; border-radius: 10px;',
    }),
    new Block('text', 'Любой контент, какой я захочу', {
      styles: 'background: rgb(2,0,36); background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%); color: #fff; padding: 20px; text-align: center;',
    }),
  ]
;