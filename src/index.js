import './styles/main.css';
import { model } from './model';
import { Site } from './components/Site';

const site = new Site('#site');

site.render(model);
