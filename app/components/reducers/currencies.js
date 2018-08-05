import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULTS, CONVERSION_ERROR } from '../actions/currencies';


const setConversions = (state, action) => {


  let baseCurrency = state.baseCurrency;
  let quoteCurrency = state.quoteCurrency;
  let conversions = state.conversions;
  let rates = conversions[`${baseCurrency}`].rates;
  let date = conversions[`${baseCurrency}`].date;

  let price = null;
  if(action.type === CHANGE_BASE_CURRENCY){
    price = rates[`${action.currency}`];
  }else{
    price = rates[`${quoteCurrency}`];
  }
  

  if (action.type === CHANGE_BASE_CURRENCY) {

  } else {
    delete rates[`${quoteCurrency}`];

  }

  for (x in rates) {
    if(action.type === CHANGE_BASE_CURRENCY){
      rates[x] = rates[x]/price;
    }else{
      rates[x] = price / rates[x];
    }
    
  }


  rates = {
    ...rates,
    [`${baseCurrency}`]: 1 / price,
  }
  if (action.type === CHANGE_BASE_CURRENCY) {
    conversions = {
      [`${action.currency}`]: {
        isFetching: false,
        base: action.currency,
        date: date,
        rates: rates,
      }
    }
  } else {
    conversions = {
      [`${quoteCurrency}`]: {
        isFetching: false,
        base: quoteCurrency,
        date: date,
        rates: rates,
      }
    }
  }

  return conversions;
};

const initialState = {
  baseCurrency: 'EUR',
  quoteCurrency: 'USD',
  amount: 100,
  conversions: {
  },
  error: '',
};

export default (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
        conversions: setConversions(state, action),
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),

      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
      };
    // case GET_INITIAL_CONVERSION:
    //   return {
    //     ...state,
    //     conversions: action.conversions,
    //   };
    case CONVERSION_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case CONVERSION_RESULTS:
      return {
        ...state,
        conversions: {
          ...state.conversions,
          [action.results.base]: {
            isFetching: false,
            ...action.results,
          }
        }
      };
    default:
      return state;
  }
};