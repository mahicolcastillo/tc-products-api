import axios                    from 'axios';
import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import config                   from '../../config/global';

const logger : log = new log({ displayFunctionName: false}); 

const getPublicTokenService = async(headers: IncomingHttpHeaders) => {
    try {
        logger.info(`Starting service getPublicToken`);

        if(!headers.clientname) throw 'clientName not defined';
        const response = await axios.get(config.microservices.MS_GENERATE_TOKEN + 'getPublicToken', { headers });
        logger.debug(`Response data: ${JSON.stringify(response.data.payload)}`);

        return response.data.payload;
    } catch (error: unknown) {
        logger.error(error);
        throw error;
    }
}

export default getPublicTokenService;