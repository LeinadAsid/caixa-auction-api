import axios from 'axios';
import * as cheerio from 'cheerio';
import { BrazilStates } from '../types/payload';
import { generateFormPayload, generateSearchPayload, parseListingData } from './helpers';
import { CityCodes, Listing } from '../types/api';

axios.defaults.timeout = 360_000;

/**
 * Get all city codes for a state.
 * this will not get codes for cities that don't have any listings.
 * @function
 * @param {BrazilStates} state - Brazilian state string.
 * @returns {Promise<CityCodes[]>} Promise resolving in array of objects with cities names and their codes.
 */
export const getCityCodes = async (state: BrazilStates): Promise<CityCodes[]> => {
    const requestURl = 'https://venda-imoveis.caixa.gov.br/sistema/carregaListaCidades.asp';
    const payload = generateFormPayload({ cmb_estado: state });

    const res = await axios.post(requestURl, new URLSearchParams({ ...payload })).catch((err) => {
        throw `Error in request to get city codes for this state. \n ${err}`;
    });

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

/**
 * Get property listing from code or list of codes.
 * @function
 * @param {string[] | string} propertyCodes - string or Array of property code(s).
 * @returns {Promise<Listing[]>} Promise resolving in array of listing objects.
 */
export const getPropertyListings = async (propertyCodes: string[] | string): Promise<Listing[]> => {
    const requestURL = 'https://venda-imoveis.caixa.gov.br/sistema/detalhe-imovel.asp';

    const propertyListings: Listing[] = [];

    if (!Array.isArray(propertyCodes)) {
        propertyCodes = [propertyCodes];
    }

    for (let code of propertyCodes) {
        const payload = {
            hdnimovel: code,
        };

        const res = await axios.post(requestURL, new URLSearchParams(payload)).catch((err) => {
            throw `\n could not get property listings for code: ${code}. \n ${err}`;
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

/**
 * Get all property codes from a city.
 * @function
 * @param {BrazilStates} state - Brazilian state string.
 * @param {string} city - city code string.
 * @returns Promise resolving in string array of property code.
 */
export const getPropertyCodes = async (state: BrazilStates, city: string) => {
    const requestURl = 'https://venda-imoveis.caixa.gov.br/sistema/carregaPesquisaImoveis.asp';

    const payload = generateSearchPayload({ hdn_estado: state, hdn_cidade: city });

    const res = await axios.post(requestURl, new URLSearchParams({ ...payload })).catch((err) => {
        throw `Error getting property codes for city: ${city} \n ${err}`;
    });

    const $ = cheerio.load(res.data);

    const allResults = $('input')
        .not('#hdnFiltro, #hdnQtdPag, #hdnPagNum, #hdnQtdRegistros')
        .get()
        .map((el) => ($(el).val() as string).split('||') ?? [])
        .flat();

    return allResults;
};
