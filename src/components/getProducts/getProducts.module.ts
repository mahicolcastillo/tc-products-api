import { IncomingHttpHeaders }  from 'http';
import { Logger as log }        from 'tslog';

import getProductsService   from './getProducts.service';
import OutputMessage        from '../../utils/outputMessage.util';
import ResponseInterface    from '../../interfaces/response.interface';
import Product              from '../../interfaces/product.interface';
import Combo                from '../../interfaces/combo.interface';

const logger : log = new log({ displayFunctionName: false}); 

const getProductsModule = async(headers: IncomingHttpHeaders): Promise<ResponseInterface> => {
    try {
        logger.info(`Starting module getProducts`);
        const response = await getProductsService(headers);

        const responseFormat = {
            products    : formatProducts(response.products),
            combos      : formatCombos(response.combos),
        }
        
        return new OutputMessage(responseFormat).success();
    } catch (error) {
        logger.error(error);
        throw new OutputMessage(error).internalServerError();
    }
}

const formatProducts = (products: Array<Product>) => {
    const response = [];
    for (const product of products) {
        if(product.estado === 'a'){
            response.push({
                productId           : product.id_prod,
                categoryId          : product.id_catg,
                name                : product.nombre,
                salePrice           : product.precio,
                image               : product.imagen || '',
                description         : product.descripcion || '',
                SKU                 : product.SKU || '',
                isCompositeProduct  : product.receta === 1 ? true : false,
            })
        }
    }

    return response;
}

const formatCombos = (combos: Array<Combo>) => {
    const response = [];
    for (const combo of combos) {
        if(combo.estado === 'a'){
            response.push({
                productId           : combo.id_combo,
                name                : combo.nombre,
                salePrice           : combo.precio,
                isHappy             : combo.eshappy === 'S' ? true : false,
                image               : combo.imagen || '',
                description         : combo.descripcion || '',
                SKU                 : combo.SKU || '',
            })
        }
    }

    return response;
}

export default getProductsModule;