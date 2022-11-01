import getPublicTokenModule    from '../../../src/components/getPublicToken/getPublicToken.module';
import getPublicTokenService   from '../../../src/components/getPublicToken/getPublicToken.service';

const name = 'getPublicTokenModule';

jest.mock('../../../src/components/getPublicToken/getPublicToken.service');

describe(name, () => {
    const headers = {test: 'test'};

    test(`${name} - OK`, async () => {
        (getPublicTokenService as jest.MockedFunction<any>) = jest.fn().mockResolvedValue([
            {
                id: 1,
                name: 'test'
            }
        ]);

        const response = await getPublicTokenModule(headers);
        expect(response.code).toBe(200);
    });

    test(`${name} - NOK`, async () => {
        (getPublicTokenService as jest.MockedFunction<any>) = jest.fn().mockRejectedValue({});

        try {
            await getPublicTokenModule(headers);
        } catch (error: any) {
            expect(error.code).toBe(500);
        }
    });
});