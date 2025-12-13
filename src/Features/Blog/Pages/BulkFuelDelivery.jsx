import React from 'react'
import BulkFuelArticle from '../Components/FuelDeliveryHero'
import BulkFuelWorking from '../Components/HowItWorks'
import BulkFuelDeliveryNeeds from '../Components/BulkDeliveryNeeds'
import IndustriesCompliance from '../Components/IndustryCompilance'
import BlogConclusion from '../Components/BlogConclusion'
import DiscoverMore from '../Components/DiscoverMore'

export default function BulkFuelDelivery() {
  return (
    <div>
      <BulkFuelArticle />
      <BulkFuelWorking />
      <BulkFuelDeliveryNeeds />
      <IndustriesCompliance />
      <BlogConclusion />
      <DiscoverMore />
    </div>
  )
}
