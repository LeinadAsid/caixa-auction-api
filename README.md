# Caixa Auction

caixa-auction is a wrapper around [CAIXA's website](https://venda-imoveis.caixa.gov.br/sistema/busca-imovel.asp?sltTipoBusca=imoveis) "hidden API's" that allows you to query for house/property auctions and their details.

## Installation

Use [npm](https://www.npmjs.com/) to install caixa-auction.

```bash
npm install caixa-auction
```

## Usage

```typescript
import * as auction from 'caixa-auction';

const cityCodes = await auction.getCityCodes('RJ');
const cityListings = await auction.getPropertyCodes('RJ', cityCodes[0].code);
const listings = await auction.getPropertyListings(cityListings[0]);

console.log(listings);

/*prints
[
    {
    discount: undefined,
    minPrice: { isCashDown: false, price: 1147000 },
    realtyNumber: 8555517024953,
    registration: 83697,
    realtyRegistration: 3592904,
    county: 'RIO DE JANEIRO-RJ',
    auctionType: 'Leilão SFI - Edital Único',
    realtyType: 'Apartamento',
    address: 'RUA ITIRAPINA,N. 25 APTO. 406 AP 406, TOMAS COELHO - CEP: 21370-490, ABARRACAMENTO - RIO DE JANEIRO',
    price: 147000,
    office: '06',
    name: 'ABARRACAMENTO - TOMAS COELHO',
    endDate: '2023-12-19T23:49:53.152Z',
    privateArea: 40.002
  }
]
*/
```

## Observations
privateArea and plotArea are m²
price is in R$ (Real Brasileiro).

The website endpoints can sometimes take long to respond and even timeout. because of this the default axios timeout is pretty high.

This was made as a personal project, I do not plan to keep updating this for too long.

also don't abuse this please. If you are going to use this in your app, cache the responses.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


## To-do list
- [ ] Add property images links.
- [ ] Handle properties with more than 1 auction.
- [ ] Add other details (FGTS, Types of loans, etc...)
- [ ] Add more tests and add CI

## License

[MIT](https://choosealicense.com/licenses/mit/)


## Changelog

#### 1.1.0
 - Handling listings with more than one auction.
