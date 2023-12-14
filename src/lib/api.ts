import axios from 'axios';
import * as cheerio from 'cheerio';
import { BrazilStates } from '../types/payload';
import { generateFormPayload, generateSearchPayload, parseListingData } from './helpers';
import { Listing } from '../types/api';

axios.defaults.timeout = 360_000;

export const getCityCodes = async (state: BrazilStates) => {
    const requestURl = 'https://venda-imoveis.caixa.gov.br/sistema/carregaListaCidades.asp';
    const payload = generateFormPayload({ cmb_estado: state });

    const res = await axios.post(requestURl, new URLSearchParams({ ...payload }));

    const $ = cheerio.load(res.data);

    const cityNumbers = $('option')
        .get()
        .map((el) => {
            const code = ($(el).val() as string) ?? '';
            const name = $(el).text() ?? '';

            return {
                name,
                code,
            };
        })
        .filter((obj) => obj.code !== '' && obj.name !== '');

    return cityNumbers;
};

export const getPropertyListings = async (state: BrazilStates, city: string) => {
    const propertyCodes = await getPropertyCodes(state, city);

    const requestURL = 'https://venda-imoveis.caixa.gov.br/sistema/detalhe-imovel.asp';

    const propertyListings: Listing[] = [];

    for (let code of propertyCodes) {
        const payload = {
            hdnimovel: code,
        };

        const res = await axios.post(requestURL, new URLSearchParams(payload)).catch((err) => {
            throw `\n could not get property listings for ${city}. \n ${err}`;
        });

        const findDateQuery = 'strLista: "1@@" + "';

        //size of date in scrapped javascript from request.
        const dateLength = 19;

        const startDateIndex = (res.data as string).indexOf(findDateQuery) + findDateQuery.length;
        const endDateIndex = startDateIndex + dateLength;

        const invalidDateString = (res.data as string).substring(startDateIndex, endDateIndex);

        const validDateString =
            invalidDateString.substring(6, 10) +
            '-' +
            invalidDateString.substring(3, 5) +
            '-' +
            invalidDateString.substring(0, 2) +
            'T' +
            invalidDateString.substring(11);

        const isDateValid = !Number.isNaN(new Date(validDateString).valueOf());

        const listing = parseListingData(res.data);

        if (isDateValid) {
            listing.endDate = new Date(validDateString + '-0300').toISOString();
        }

        propertyListings.push(listing);
    }

    return propertyListings;
};

const getPropertyCodes = async (state: BrazilStates, city: string) => {
    const requestURl = 'https://venda-imoveis.caixa.gov.br/sistema/carregaPesquisaImoveis.asp';

    const payload = generateSearchPayload({ hdn_estado: state, hdn_cidade: city });

    const res = await axios.post(requestURl, new URLSearchParams({ ...payload }));

    const $ = cheerio.load(res.data);

    const allResults = $('input')
        .not('#hdnFiltro, #hdnQtdPag, #hdnPagNum, #hdnQtdRegistros')
        .get()
        .map((el) => ($(el).val() as string).split('||') ?? [])
        .flat();

    return allResults;
};
