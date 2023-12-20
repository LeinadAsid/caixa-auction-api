import { getCityCodes, getPropertyCodes, getPropertyListings } from '../lib/api';
import { carregaListaCidades, carregaListaImoveis, detalheImovel } from './mockedValues';
import axios from 'axios';
jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('API tests', () => {
    it(`should return city codes for 'RJ'`, async () => {
        mockedAxios.post.mockResolvedValue({
            data: carregaListaCidades,
        });

        const actualResult = await getCityCodes('RJ');

        const expectedResult = [
            {
                name: 'ABARRACAMENTO',
                code: '6981',
            },

            {
                name: 'ANGRA DOS REIS',
                code: '6987',
            },
        ];

        expect(actualResult).toEqual(expectedResult);
    });

    it(`should return property codes for 6987`, async () => {
        mockedAxios.post.mockResolvedValue({
            data: carregaListaImoveis,
        });

        const actualResult = await getPropertyCodes('RJ', '6987');

        const expectedResult = ['01555532580855', '01444410505954'];

        expect(actualResult).toEqual(expectedResult);
    });

    it(`should return listing for code 01444410505954`, async () => {
        mockedAxios.post.mockResolvedValue({
            data: detalheImovel,
        });

        const actualResult = await getPropertyListings('01444410505954');

        const expectedResult = [
            {
                discount: 26.22,
                minPrice: {
                    isCashDown: false,
                    price: {
                        firstAuction: 205846.2,
                    },
                },
                realtyNumber: 1444410505954,
                registration: 22029,
                realtyRegistration: 2180820318002,
                county: 'ANGRA DOS REIS-RJ',
                auctionType: 'Venda Online',
                realtyType: 'Casa',
                address:
                    'ALAMEDA DOS TUCANOS (ANTIGA RUA L)   QD 28 LT 46 CS 03, PONTAL (CUNHAMBEBE) - CEP: 23900-000, ANGRA DOS REIS - RIO DE JANEIRO',
                price: 279000,
                office: '01',
                name: 'COND ACONCHEGO DE ANGRA II',
                endDate: '2023-12-21T21:00:00.000Z',
                rooms: 2,
                garage: 1,
                privateArea: 71.872,
                plotArea: 119.992,
            },
        ];

        expect(actualResult).toEqual(expectedResult);
    });
});
