import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getCategoriesService from './getCategories.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';
import Category             from '../../interfaces/category.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getCategoriesModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getCategories`);
        const response = await getCategoriesService(headers);
        
        return new OutputMessage(formatCategories(response)).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

const formatCategories = (categories: Array<Category>) => {
    const response = [];
    for (const category of categories) {
        response.push({
            categoryId  : category.id_catg,
            description : category.descripcion,
        });
    }

    return response;
}

export default getCategoriesModule;