import React from 'react'
import ImageShowcase from '../ImageShowcase'
import InfoTable from '../InfoTable';
import ContactInfo from '../ContactInfo';

function GeneralSection() {
    const images = [
        '/images/image_catalogue.png',
        '/images/image_catalogue.png',
        '/images/image_catalogue.png',
        '/images/image_catalogue.png'
    ];

  return (
    <div className="md:mx-24 lg:mx-32 my-12 md:my-24">
        <h1 className="text-[32px] font-semibold text-center mb-4 md:mb-8 px-12">[강원도 영월] 포도농장과 가까운 남자 전용숙소</h1>
        <ImageShowcase images={images} type="job" />
        <InfoTable />
        <ContactInfo />
    </div>
  )
}

export default GeneralSection