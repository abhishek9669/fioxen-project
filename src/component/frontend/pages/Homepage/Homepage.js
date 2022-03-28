import React from 'react'
import Welcome from '../../common/Welcome'
import BlogArea from '../BlogArea'
import CategorySection from '../CategorySection'
import ClientArea from '../ClientArea'
import DownloadApp from '../DownloadApp'
import FeaturesArea from '../FeaturesArea'
import HeroSection from '../HeroSection'
import IntroVideo from '../IntroVideo'
import ListingSection from '../ListingSection'
import NewsLaterArea from '../NewsLaterArea'
import PlaceArea from '../PlaceArea'
import PopularListing from '../PopularListing'
import StartOfferSection from '../StartOfferSection'

export default function Homepage() {
  return (
   <>
     <Welcome>
        <HeroSection/>
        <CategorySection/>
        <ListingSection/>
        <StartOfferSection/>
        <FeaturesArea/>
        <PlaceArea/>
        <DownloadApp/>
        <PopularListing/>
        <IntroVideo/>
        <NewsLaterArea/>
        <ClientArea/>
        <BlogArea/>
     </Welcome>
   </>
  )
}
