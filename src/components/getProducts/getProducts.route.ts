import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getProductsController        from './getProducts.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getProducts.middleware';
import validateJWT                  from '../../middleware/validateJWT.middleware';

const getProductsRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getProducts.name}`,
        validation,
        expressValidatorMiddleware,
        validateJWT,
        getProductsController
    );
}

export default getProductsRoute;