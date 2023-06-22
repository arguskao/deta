import React from 'react';
import FeatureBlock from 'components/feature-block';

const data = [
  {
    id: 1,
    background: '#feeec8',
    title: '選購商品',
    description: '將產品放入購物車，輸入資料，再按確定.',
  },
  {
    id: 2,
    background: '#ceeffe',
    title: '產品出貨',
    description:
      '您的產品正在被妥善準備和打包.',
  },
  {
    id: 3,
    background: '#d4f8c4',
    title: '準備寄送',
    description: '包裝後，準備寄送',
  },
  {
    id: 4,
    background: '#d8dafe',
    title: '寄送中或者等待取貨',
    description:
      '您可以選擇寄送或者到店裡取貨.',
  },
];

export default function HowItWorks() {
  return (
    <div className="flex w-full px-15px lg:px-35px mt-35px xxl:mt-60px">
      <div className="flex w-full px-20px md:p-30px py-40px rounded border border-gray-300 bg-white">
        <div className="feature-block-wrapper w-full grid grid-cols-1 gap-x-30px gap-y-40px md:grid-cols-2 xl:grid-cols-4 xxl:gap-30px">
          {data.map((item, index) => (
            <FeatureBlock
              key={item.id}
              title={item.title}
              description={item.description}
              counterBg={item.background}
              counter={index + 1}
              className="feature-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
