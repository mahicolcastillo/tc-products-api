import getCategoriesModule    from '../../../src/components/getCategories/getCategories.module';
import getCategoriesService   from '../../../src/components/getCategories/getCategories.service';

const name = 'getCategoriesModule';

jest.mock('../../../src/components/getCategories/getCategories.service');

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getCategoriesService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'test'
            }
        ]);

        const response = await getCategoriesModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getCategoriesService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getCategoriesModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});