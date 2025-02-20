import React from 'react'
import HeroSec from '../components/HeroSec'
import LatestCollection from '../components/LatestCollection'
import SecLatestCollection from '../components/SecLatestCollection'
import SecBestSeller from '../components/SecBestSeller'
import MenCards from '../components/MenCards'

const Men = () => {
  return (
    <div>
        <HeroSec/>
        <MenCards/>
        <SecLatestCollection/>
        <SecBestSeller/>
    </div>
  )
}

export default Men