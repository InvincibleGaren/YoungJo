import React from 'react'
import Category from '../components/Category'
import FooterNav from '../components/ui/FooterNav'
import Header from '../layouts/Header';

function MainCategory() {
  return (
    <>
      <Header/>
      <Category/>
      <FooterNav/>
    </>
  )
}

export default MainCategory;