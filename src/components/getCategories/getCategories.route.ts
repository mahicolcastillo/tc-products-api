import { Express }                  from 'express';

import expressValidatorMiddleware   from '../../middleware/express-validator.middleware';
import getCategoriesController      from './getCategories.controller';
import routeNames                   from '../../routes/routesNames';
import validation                   from '../../middleware/getCategories.middleware';
import validateJWT                  from '../../middleware/validateJWT.middleware';

const getCategoriesRoute = (app: Express, globalPath: string) => {
    app.get(
        `${globalPath}/${routeNames.getCategories.name}`,
        validation,
        expressValidatorMiddleware,
        validateJWT,
        getCategoriesController
    );
}

export default getCategoriesRoute;