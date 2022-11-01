import getCategoriesService from '../../../src/components/getCategories/getCategories.service';
import axios                from 'axios';
const name = 'getCategoriesService';

jest.mock('axios');

describe(name, () => {
    const headers = {
        clientname: 'test'
    };
    
    test(`${name} - OK`, async () => {
        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                payload: [{
                    id: 1,
                    nombre: 'test'
                }]
            }
        });

        const response = await getCategoriesService(headers);
        expect(response[0].id).toBe(1);
    });

    test(`${name} - NOK`, async () => {
        (axios.get as jest.Mock).mockRejectedValue('Error');

        try {
            await getCategoriesService({});
        } catch (error: unknown) {
            expect(error).toBeTruthy();
        }
    });
});