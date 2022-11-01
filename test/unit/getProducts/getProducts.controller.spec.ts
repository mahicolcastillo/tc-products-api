import getProductsController    from '../../../src/components/getProducts/getProducts.controller';
import getProductsModule        from '../../../src/components/getProducts/getProducts.module';
import { createRequest, createResponse } from 'node-mocks-http';

const name = 'getProductsController';

jest.mock('../../../src/components/getProducts/getProducts.module');

describe(name, () => {
    test(`${name} - OK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getProductsModule as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            code: 200,
            message: 'Success',
            payload: {}    
        });

        const response = await getProductsController(req, res);
        expect(response.statusCode).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getProductsModule as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({
            code: 500,
            message: 'Internal Server Error',
            payload: {}    
        });

        try {
            await getProductsController(req, res);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});