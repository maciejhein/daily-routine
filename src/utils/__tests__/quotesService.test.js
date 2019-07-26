import { FRONT_END_ROLE, BACK_END_ROLE, DEV_OPS_ROLE } from '../../constants/roles';
import { BRAG, CONFESS } from '../../constants/roleActions';

import { getQuote, getRandomQuoteID } from '../quotesService';

function countChars(str, char) {
  return str.split('').reduce((acc, ch) => (ch === char ? acc + 1 : acc), 0);
}

describe('quotesService - getRandomQuoteID should return something long enough with spacers', () => {
  [BACK_END_ROLE, FRONT_END_ROLE, DEV_OPS_ROLE].forEach(role => {
    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteID = getRandomQuoteID(role, BRAG);
      expect(countChars(randomQuoteID, '-')).toEqual(3);
      expect(randomQuoteID.length).toBeGreaterThan(3 * 4);
    });

    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteID = getRandomQuoteID(role, CONFESS);
      expect(countChars(randomQuoteID, '-')).toEqual(3);
      expect(randomQuoteID.length).toBeGreaterThan(3 * 4);
    });
  });

  it('should return undefined for not defined action', () => {
    const quote = getQuote(DEV_OPS_ROLE, null, '1');

    expect(quote).toBeUndefined();
  });
});

describe('quotesService - getRandomQuoteID and then verify if text is the same', () => {
  [BACK_END_ROLE, FRONT_END_ROLE, DEV_OPS_ROLE].forEach(role => {
    it('given 4 trials it should generate at least 2 different quotes', () => {
      // this is probability but given 4 iterations the list should be different
      let uniqQuotes = new Set();
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      uniqQuotes.add(getRandomQuoteID(role, BRAG));
      expect(uniqQuotes.size).toBeGreaterThan(1);
    });

    it('should return random possible quoteID for backend role and BRAG', () => {
      const randomQuoteIDbrag = getRandomQuoteID(role, BRAG);
      const bragQuote0 = getQuote(role, BRAG, randomQuoteIDbrag);
      const bragQuote1 = getQuote(role, BRAG, randomQuoteIDbrag);

      // different action should always return different quote
      const confessQuote = getQuote(role, CONFESS, randomQuoteIDbrag);
      expect(bragQuote0).toEqual(bragQuote1);
      expect(confessQuote).not.toEqual(bragQuote1);
    });

    it('malformed quote should return null', () => {
      const randomQuoteIdBrag = getRandomQuoteID(role, BRAG);
      let words = randomQuoteIdBrag.split('-');
      words[3] = 'somethingnotreal';
      let randomQuoteIdBragMalformed = words.join('-');
      const quoteNone = getQuote(role, BRAG, randomQuoteIdBragMalformed);
      expect(quoteNone).toBeUndefined();
    });
  });
});
