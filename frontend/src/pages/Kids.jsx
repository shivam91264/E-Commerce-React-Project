import React from 'react'
import HeroSec from '../components/HeroSec'
import SecLatestCollection from '../components/SecLatestCollection'
import SecBestSeller from '../components/SecBestSeller'
import KidsCards from '../components/KidsCards'

const Kids = () => {
  return (
    <div>
        <HeroSec/>
        <KidsCards/>
        <SecLatestCollection/>
        <SecBestSeller/>
    </div>
  )
}

export default Kids