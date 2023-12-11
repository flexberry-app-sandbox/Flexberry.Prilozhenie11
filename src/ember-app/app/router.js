import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie1-спр-контр-аг-l');
  this.route('i-i-s-prilozhenie1-спр-контр-аг-e',
  { path: 'i-i-s-prilozhenie1-спр-контр-аг-e/:id' });
  this.route('i-i-s-prilozhenie1-спр-контр-аг-e.new',
  { path: 'i-i-s-prilozhenie1-спр-контр-аг-e/new' });
});

export default Router;
