import { BR_STATES } from '../consts/states';

export type BrazilStates = (typeof BR_STATES)[number];

export interface FormPayload {
    cmb_estado: BrazilStates;
    cmb_cidade: string;
    cmb_tp_venda: string;
    cmb_tp_imovel: string;
    cmb_area_util: string;
    cmb_faixa_vlr: string;
    cmb_quartos: string;
    cmb_vg_garagem: string;
    strValorSimulador: string;
    strAceitaFGTS: string;
    strAceitaFinanciamento: string;
}

export interface SearchPayload {
    hdn_estado: BrazilStates;
    hdn_cidade: string;
    hdn_bairro: string;
    hdn_tp_venda: string;
    hdn_tp_imovel: string;
    hdn_area_util: string;
    hdn_faixa_vlr: string;
    hdn_quartos: string;
    hdn_vg_garagem: string;
    strValorSimulador: string;
    strAceitaFGTS: string;
    strAceitaFinanciamento: string;
}
