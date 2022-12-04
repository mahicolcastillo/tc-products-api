import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import routeNames           from './routesNames';

import healthcheckRoute     from '../components/healthcheck/healthcheck.route';
import getPublicTokenRoute  from '../components/getPublicToken/getPublicToken.route';
import getProductsRoute     from '../components/getProducts/getProducts.route';
import getCategoriesRoute   from '../components/getCategories/getCategories.route';

const logger : log = new log({ displayFunctionName: false}); 

const routes = (app: Express) => {

    healthcheckRoute(app, config.get("globalPath"));
    getPublicTokenRoute(app, config.get("globalPath"));
    getProductsRoute(app, config.get("globalPath"));
    getCategoriesRoute(app, config.get("globalPath"));
}

export default routes;