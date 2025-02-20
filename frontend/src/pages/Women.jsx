import React from 'react'
import HeroSec from '../components/HeroSec'
import SecLatestCollection from '../components/SecLatestCollection'
import SecBestSeller from '../components/SecBestSeller'
import WomenCards from '../components/WomenCards'

const Women = () => {
  return (
    <div>
        <HeroSec/>
        <WomenCards/>
        <SecLatestCollection/>
        <SecBestSeller/>
    </div>
  )
}

export default Women