import getProductsModule    from '../../../src/components/getProducts/getProducts.module';
import getProductsService   from '../../../src/components/getProducts/getProducts.service';

const name = 'getProductsModule';

jest.mock('../../../src/components/getProducts/getProducts.service');

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getProductsService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            products: [{
                estado: 'a',
                receta: 1
            }],
            combos: [{
                estado: 'a',
                eshappy: 'S'
            }]
        });

        const response = await getProductsModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - OK2`, async () => {
        (getProductsService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue({
            products: [{
                estado: 'a',
                receta: 0
            }],
            combos: [{
                estado: 'a',
                eshappy: 'N'
            }]
        });

        const response = await getProductsModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getProductsService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getProductsModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});