import getCategoriesController    from '../../../src/components/getCategories/getCategories.controller';
import getCategoriesModule        from '../../../src/components/getCategories/getCategories.module';
import { createRequest, createResponse } from 'node-mocks-http';

const name = 'getCategoriesController';

jest.mock('../../../src/components/getCategories/getCategories.module');

describe(name, () => {
    test(`${name} - OK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getCategoriesModule as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            code: 200,
            message: 'Success',
            payload: {}    
        });

        const response = await getCategoriesController(req, res);
        expect(response.statusCode).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        const req = createRequest();
        const res = createResponse();

        (getCategoriesModule as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({
            code: 500,
            message: 'Internal Server Error',
            payload: {}    
        });

        try {
            await getCategoriesController(req, res);
        } catch (error) {
            expect(error).toBeTruthy();
        }
    });
});