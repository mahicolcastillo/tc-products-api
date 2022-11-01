import axios                    from 'axios';
import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import config   from '../../config/global';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getProducts`);

        if(!headers.clientname) throw 'clientName not defined';

        const response = await axios.all([
            axios.get(config.microservices.MS_PRODUCTS + 'getProducts', { headers }),
            axios.get(config.microservices.MS_PRODUCTS + 'getCombos', { headers })
        ]);
        logger.debug(`Response data products: ${JSON.stringify(response[0].data.payload)}`);
        logger.debug(`Response data combos: ${JSON.stringify(response[1].data.payload)}`);

        const responseFormat = {
            products: response[0].data.payload,
            combos  : response[1].data.payload,
        }

        return responseFormat;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getProductsService;