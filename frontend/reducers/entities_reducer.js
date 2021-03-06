import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import portfoliosReducer from './portfolios_reducer';
import companiesReducer from './companies_reducer';
import transactionsReducer from './transactions_reducer';
import marketReducer from './market_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  portfolios: portfoliosReducer,
  companies: companiesReducer,
  transactions: transactionsReducer,
  market: marketReducer
});

export default entitiesReducer;