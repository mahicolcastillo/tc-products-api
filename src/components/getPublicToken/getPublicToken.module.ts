import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getPublicTokenService    from './getPublicToken.service';
import OutputMessage            from '../../utils/outputMessage.util';
import ResponseInterface        from '../../interfaces/response.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getPublicTokenModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getPublicToken`);
        const response = await getPublicTokenService(headers);
        
        return new OutputMessage(response).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

export default getPublicTokenModule;