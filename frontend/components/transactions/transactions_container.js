import { connect } from 'react-redux';
import Transactions from './transactions';

const mapStateToProps = state => {
  let companyObj = {};

  Object.values(state.entities.companies).forEach(company => {
    companyObj[company.id] = company;
  });

  return {
    companies: companyObj,
    transactions: Object.values(state.entities.transactions)
  }
};

// const mapDispatchToProps = dispatch => {
//   return {

//   };
// };

export default connect(mapStateToProps)(Transactions);