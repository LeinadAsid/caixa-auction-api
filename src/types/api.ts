export interface Listing {
    nome: string;
    minAvaliacao: minAvaliacao;
    avaliacao: number;
    desconto?: number;
    tipoCasa: string;
    quartos?: number;
    garagem?: number;
    tipoLeilao: string;
    numeroImovel: number;
    matricula: number;
    comarca: string;
    endereco: string;
    oficio: string;
    inscricaoImobiliaria: number;
    areaPrivada_m2?: number;
    areaTerreno_m2?: number;

    //ISO Date string
    endDate: string;
}

interface minAvaliacao {
    price: number;
    isAvista: boolean;
}
