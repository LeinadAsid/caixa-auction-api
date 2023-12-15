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
    plotArea_m2?: number;

    //ISO Date string
    endDate: string;
}

interface minPrice {
    price: number;
    isCashDown: boolean;
}
