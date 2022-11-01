import { Express }          from 'express'; 
import { Logger as log }    from 'tslog';

import config               from '../config/global';
import routeNames           from './routesNames';

import healthcheckRoute     from '../components/healtcheck/healthcheck.route';
import getPublicTokenRoute  from '../components/getPublicToken/getPublicToken.route';
import getProductsRoute     from '../components/getProducts/getProducts.route';
import getCategoriesRoute   from '../components/getCategories/getCategories.route';

const logger : log = new log({ displayFunctionName: false}); 

const routes = (app: Express) => {

    logger.info(`[${routeNames.healthcheck.verb}] ${config.get("globalPath")}/${routeNames.healthcheck.name}`)
    healthcheckRoute(app, config.get("globalPath"));

    logger.info(`[${routeNames.getPublicToken.verb}] ${config.get("globalPath")}/${routeNames.getPublicToken.name}`)
    getPublicTokenRoute(app, config.get("globalPath"));

    logger.info(`[${routeNames.getProducts.verb}] ${config.get("globalPath")}/${routeNames.getProducts.name}`)
    getProductsRoute(app, config.get("globalPath"));

    logger.info(`[${routeNames.getCategories.verb}] ${config.get("globalPath")}/${routeNames.getCategories.name}`)
    getCategoriesRoute(app, config.get("globalPath"));
}

export default routes;