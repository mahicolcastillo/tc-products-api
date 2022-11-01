import { Logger as log }        from 'tslog';
import { Request, Response }    from 'express';

import getCategoriesModule  from './getCategories.module';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getCategoriesController = async(req: Request, res: Response) => {
    try {
        logger.info(`Starting controller getCategories`);
        const response: ResponseInterface = await getCategoriesModule(req.headers);

        return res.status(response.code).send(response);
    } catch (error: any) {
        logger.error(JSON.stringify(error));
        return res.status(error.code).send(error);
    }
} 

export default getCategoriesController;