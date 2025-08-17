import React from 'react'
import NavBar from '@/components/NavBar';
// import { Home } from 'lucide-react';
import Hero from '@/components/Home/Hero';
import ServicesSection from '@/components/Home/ServiceSection';
import Why from '@/components/Home/Why';
import EstimateSection from '@/components/Home/EstimateSection';
import ShowCase from '@/components/Home/ShowCase';
import FooterSection from '@/components/Home/FooterSection';
import Footer from '@/components/Footer';
const Page = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <ServicesSection/>
      <Why/>
      <EstimateSection/>
      <ShowCase/>
      <FooterSection/>
      <Footer/>
    </div>
  )
}

export default Page;
