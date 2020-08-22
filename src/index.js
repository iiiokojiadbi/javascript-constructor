import './styles/main.css';
import { model } from './model';
import { Site } from './components/Site';
import { SiteBar } from './components/SiteBar';

const site = new Site('#site');

const updateCallback = (newBlock) => {
  model.push(newBlock);
  site.render(model);
};

new SiteBar('#panel', updateCallback);

site.render(model);
