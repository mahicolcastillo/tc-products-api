import { Logger as log }        from 'tslog';
import { Request, Response }    from 'express';

import getProductsModule    from './getProducts.module';
import ResponseInterface    from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsController = async(req: Request, res: Response) => {
    try {
        logger.info(`Starting controller getProducts`);
        const response: ResponseInterface = await getProductsModule(req.headers);

        return res.status(response.code).send(response);
    } catch (error: any) {
        logger.error(JSON.stringify(error));
        return res.status(error.code).send(error);
    }
} 

export default getProductsController;