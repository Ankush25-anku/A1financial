import React from 'react'
import Banner1 from '@/components/Banner1'
import Partner from '@/components/Partner'
import About from '@/components/About'
import Feature from '@/components/Feature'
import Service from '@/components/Service'
import Roadmap from '@/components/Roadmap'
import Team from '@/components/Team'
import Blog from '@/components/Blog'
import Testimonial from '@/components/Testimonial'
import FAQ from '@/components/FAQ'
// import CTA from '@/components/CTA'  
import Bankloans from '@/components/Bankloans'


const page = () => {
  return (
    <div>
  
    <Banner1 />
    {/* <Partner /> */}
    <About />
    <Feature />
    <Service />
    <Bankloans />
    <Roadmap />
<Team/>
<Blog />
<Testimonial />
<FAQ />

{/* <CTA /> */}
    </div>
  )
}

export default page