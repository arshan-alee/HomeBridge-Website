import React from 'react';

const InfoTable = () => {
    const contactData = [
        { label: '지역', value: '강원도 영월' },
        { label: '냉난방', value: '개별 냉난방' },
        { label: '건물', value: '지상 2층 1개동' },
        { label: '주차장', value: '2대 주차가능' },
        { label: '총 방수', value: '6개' },//
        { label: '실내흡연', value: '불가능' },
        { label: '남여층 분리', value: '남여층 분리됨(남성전용)' },
        { label: '택배', value: '택배수령가능' },
        { label: '화장실', value: '2개' },
    ];

  const features = [
    '안전시설 : CCTV, 스프링클러, 화재감지기, 소화기, 비상용개인랜턴, 현관 도어락, 각 층 도어락, 각 방 도어락',
    '세탁실 : 세탁기 2대',
    '인터넷 : 무선 WIFI',
    '식사제공안됨',
    '제공비품 : 없음',
    '주방시설 : 인덕션, 전자레인지, 정수기, 냉장고'
  ];

  return (
    <div className="w-full mt-8 custom-shadow-right-bottom p-6 md:p-12 rounded-2xl bg-white">
        <div className='mb-6'>
            <h1 className="text-[22px] font-normal mb-2">General Information</h1>
            <div className="flex flex-wrap">
                {contactData.map((item, index) => (
                    <div key={index} className="flex w-full md:w-1/2 my-2">
                        <p className={`${(index+1) % 2 === 0 && 'lg:ml-12'} w-1/2 text-[#00000080]`}>{item.label}</p>
                        <p className="w-1/2 text-left">{item.value}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='my-6 lg:mb-12'>
            <h1 className="text-[22px] font-normal mb-2">Explanation</h1>
            <p className="text-[#00000080]">영월지역 포도농장과 가까워 출퇴근이 쉽습니다. 주변에 마트와 편의점이 있습니다.</p>
        </div>

        <div>
            <h1 className="text-[22px] font-normal mb-2">External Features</h1>
            {
                features.map((feature, index) => (
                    <div className="flex items-center gap-2 mb-1">
                        <img src="/icons/tick.png" alt="" className="w-[10px] h-[8px]" />
                        <p className="text-[16px] text-[#00000080]">{feature}</p>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default InfoTable;
