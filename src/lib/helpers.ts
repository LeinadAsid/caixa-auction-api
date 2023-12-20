import * as cheerio from 'cheerio';
import { AtLeast } from './types/helpers';
import { FormPayload, SearchPayload } from './types/payload';
import { Listing } from './types/api';

export const generateFormPayload = (config: AtLeast<FormPayload, 'cmb_estado'>): FormPayload => {
    return {
        cmb_cidade: '',
        cmb_area_util: 'Selecione',
        cmb_faixa_vlr: 'Selecione',
        cmb_quartos: 'Selecione',
        cmb_tp_imovel: 'Selecione',
        cmb_vg_garagem: 'Selecione',
        strAceitaFGTS: '',
        strValorSimulador: '',
        strAceitaFinanciamento: '',
        cmb_tp_venda: '',
        ...config,
    };
};

export const generateSearchPayload = (config: AtLeast<SearchPayload, 'hdn_estado' | 'hdn_cidade'>): SearchPayload => {
    return {
        hdn_bairro: '',
        hdn_area_util: 'Selecione',
        hdn_faixa_vlr: 'Selecione',
        hdn_quartos: 'Selecione',
        hdn_tp_imovel: 'Selecione',
        hdn_vg_garagem: 'Selecione',
        strAceitaFGTS: '',
        strValorSimulador: '',
        strAceitaFinanciamento: '',
        hdn_tp_venda: '',

        ...config,
    };
};

export const parseListingData = (html: string) => {
    const $ = cheerio.load(html);

    const parsedListing: Listing = {
        discount: 0,
        minPrice: { isCashDown: false, price: { firstAuction: 0 } },
        realtyNumber: 0,
        registration: 0,
        realtyRegistration: 0,
        county: '',
        auctionType: '',
        realtyType: '',
        address: '',
        price: 0,
        office: '',
        name: '',
        endDate: new Date().toISOString(),
    };

    const dadosImovel = $('#dadosImovel');

    parsedListing.name = dadosImovel.find('.control-item > h5').text().trim();
    const avaliacoes = dadosImovel.find('.content > p').find('br').replaceWith('\n').end().text().split('\n');

    console.log(avaliacoes);

    parsedListing.price = Number(avaliacoes[0].replace(/[^\d,]/g, '').replace(/,/g, '.'));
    parsedListing.minPrice.price.firstAuction = Number(
        avaliacoes[1]
            .split('(')[0]
            .replace('1º', '')
            .replace(/[^\d,]/g, '')
            .replace(/,/g, '.')
    );
    parsedListing.minPrice.isCashDown = avaliacoes[1].split('(')[0].includes('à vista');

    const hasDiscount = avaliacoes[1].split('(').length > 1;
    parsedListing.discount = hasDiscount
        ? Number(
              avaliacoes[1]
                  .split('(')[1]
                  .replace(/[^\d.,]+/g, '')
                  .replace(/,/g, '.')
          )
        : undefined;

    const moreDetail = dadosImovel
        .find('.content > .control-item > p')
        .find('br')
        .replaceWith('\n')
        .end()
        .text()
        .replace(/\t/g, '')
        .split('\n')
        .filter((el) => el !== '');

    for (let detail of moreDetail) {
        parseDetails(detail, parsedListing);
    }

    const relatedInfo = dadosImovel.find('.related-box');

    parseRelatedInfo(relatedInfo, parsedListing);

    return parsedListing;
};

const parseDetails = (detail: string, parsedListing: Listing) => {
    const detailName = detail.split(':')[0];
    const value = detail.split(':')[1];

    if (detailName.includes('Tipo de imóvel')) {
        parsedListing.realtyType = value.trim();
    }

    if (detailName.includes('Número do imóvel')) {
        parsedListing.realtyNumber = Number(value.replace(/\D/g, ''));
    }

    if (detailName.includes('Inscrição imobiliária')) {
        parsedListing.realtyRegistration = Number(value.replace(/\D/g, ''));
    }

    if (detailName.includes('Quartos')) {
        parsedListing.rooms = Number(value.replace(/\D/g, ''));
    }

    if (detailName.includes('Garagem')) {
        parsedListing.garage = Number(value.replace(/\D/g, ''));
    }

    if (detailName.includes('Matrícula')) {
        parsedListing.registration = Number(value.replace(/\D/g, ''));
    }

    if (detailName.includes('Comarca')) {
        parsedListing.county = value.trim();
    }

    if (detailName.includes('Ofício')) {
        parsedListing.office = value.trim();
    }

    if (detailName.includes('Área privativa')) {
        parsedListing.privateArea = Number(
            detailName
                .split('=')[1]
                .replace(/[^\d.,]+/g, '')
                .replace(/,/g, '.')
        );
    }

    if (detailName.includes('Área do terreno')) {
        parsedListing.plotArea = Number(
            detailName
                .split('=')[1]
                .replace(/[^\d.,]+/g, '')
                .replace(/,/g, '.')
        );
    }
};

const parseRelatedInfo = (relatedInfo: cheerio.Cheerio<cheerio.Element>, parsedListing: Listing) => {
    const endereco = relatedInfo.find('strong:contains("Endereço:")').parent().find('br').replaceWith('\n').end().text().split('\n');
    parsedListing.address = endereco.length > 1 ? endereco[1] : '';

    const tipoVendaOnline = relatedInfo.find('#divContador');

    if (tipoVendaOnline.length >= 1) {
        parsedListing.auctionType = 'Venda Online';
    }

    const tipoLeilaoSFI = relatedInfo.find('span:contains("Leilão SFI - Edital Único")');
    if (tipoLeilaoSFI.length >= 1) {
        parsedListing.auctionType = 'Leilão SFI - Edital Único';
    }

    const tipoLicitacao = relatedInfo.find('span:contains("Licitação Aberta")');
    if (tipoLicitacao.length >= 1) {
        parsedListing.auctionType = 'Licitação Aberta';
    }

    const tipoVendaDireta = relatedInfo.find('span:contains("Venda Direta")');
    if (tipoVendaDireta.length >= 1) {
        parsedListing.auctionType = 'Venda Direta';
    }
};
