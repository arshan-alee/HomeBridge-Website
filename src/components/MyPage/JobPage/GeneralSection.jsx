import React from 'react'
import ImageShowcase from '../ImageShowcase'
import InfoTable from '../InfoTable';
import ContactInfo from '../ContactInfo';

function GeneralSection() {
    const images = [
        'https://picsum.photos/id/1018/1000/600/',
        'https://picsum.photos/id/1015/1000/600/',
        'https://picsum.photos/id/1018/1000/600/',
    ];

  return (
    <div className="mx-4 md:mx-32 my-12 md:my-24">
        <h1 className="text-[32px] font-semibold text-center mb-4 md:mb-8">[강원도 영월] 포도농장과 가까운 남자 전용숙소</h1>
        <ImageShowcase images={images} />
        <InfoTable />
        <ContactInfo />
    </div>
  )
}

export default GeneralSection