import newsRouter from './news.route.mjs';
import site from './site.route.mjs';

      function route(app) {
      app.get('/news', newsRouter);

  app.get('/', site);
}

export default route;