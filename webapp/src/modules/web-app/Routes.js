import React from 'react'
import { connect } from 'react-redux';

import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

const mapStateToProps = ({ navigation }) => {
  return {
    navigation
  }
}

const Routes = ({ navigation: { currentPage } }) => {
  switch(currentPage) {
    case 'HOME_PAGE': return (<HomePage />)
    case 'DETAIL_PAGE': return (<DetailPage />)
    default: return (<HomePage />)
  }
}

export default connect(mapStateToProps)(Routes)