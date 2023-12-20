export interface Listing {
    name: string;
    minPrice: minPrice;
    price: number;
    discount?: number;
    realtyType: string;
    rooms?: number;
    garage?: number;
    auctionType: string;
    realtyNumber: number;
    registration: number;
    county: string;
    address: string;
    office: string;
    realtyRegistration: number;
    privateArea?: number;
    plotArea?: number;

    //ISO Date string
    endDate: string;
}

export interface CityCodes {
    name: string;
    code: string;
}

interface minPrice {
    price: {
        firstAuction: number;
        secondAuction?: number;
    };
    isCashDown: boolean;
}
