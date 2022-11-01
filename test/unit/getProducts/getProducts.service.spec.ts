import getProductsService from '../../../src/components/getProducts/getProducts.service';
import axios                from 'axios';
const name = 'getProductsService';

jest.mock('axios');

describe(name, () => {
    const headers = {
        clientname: 'test'
    };
    
    test(`${name} - OK`, async () => {
        (axios.all as jest.Mock).mockResolvedValue([
            {
                data: {
                    payload: [{
                        id: 1,
                        name: 'test1',
                    }]
                }
            },
            {
                data: {
                    payload: [{
                        id: 2,
                        name: 'test2'
                    }]
                }
            }
        ]);

        const response = await getProductsService(headers);
        expect(response.products[0].id).toBe(1);
        expect(response.combos[0].id).toBe(2);
    });

    test(`${name} - NOK`, async () => {
        (axios.all as jest.Mock).mockRejectedValue('Error');

        try {
            await getProductsService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});