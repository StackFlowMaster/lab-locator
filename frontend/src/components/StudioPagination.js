import React from 'react';
import { Pagination } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const StudioPagination = () => {

  const handlePage = (e, { activePage }) => {
    let goToPage = { activePage };
    let pageNum = goToPage.activePage;
    let pageString = pageNum.toString();
    const url = "http://localhost:3000/studios/?page=" + pageString;
    fetch(url).then(res => res.json()).then(this.initialState)
  }

  return (
    <Pagination
      onPageChange={handlePage}
      size="mini"
      siblingRange="6"
      defaultActivePage="3"
      totalPages="20"
    />
  )
}

export default StudioPagination
