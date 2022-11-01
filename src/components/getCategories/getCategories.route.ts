import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getCategoriesController      from './getCategories.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getCategories.middleware';
import validateJWT                  from '../../middleware/validateJWT.middleware';

const getExampleRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getCategories.name}`,
        validation,
        expressValidatorMiddleware,
        validateJWT,
        getCategoriesController
    );
}

export default getExampleRoute;