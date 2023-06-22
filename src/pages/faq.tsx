// import { useEffect } from 'react';
import Head from 'next/head';
import Layout from 'containers/layout/layout';
import Accordion from 'components/accordion';

const accordionData = [
  {
    id: 1,
    title: '要怎麼聯絡你們?',
    details:
      '您可以使用電子郵件、臉書、Line和我們聯絡!.',
  },
  {
    id: 2,
    title: '我需要事先註冊嗎?',
    details:
      '不需要的，直接購買就可以',
  },
  {
    id: 3,
    title: '可以幫我送到家?',
    details:
      '如果您在我們的配送範圍內，我們是可以幫您送到家的？',
  },
  {
    id: 4,
    title: '如果要到店面自取怎麼做?',
    details:
      '您可以在備註欄備註“自取”就可以了！.',
  },
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="Description" content="Put your description here." />
        <title>常見問題</title>
      </Head>

      <div className="py-35px px-4 md:p-35px">
        <h3 className="w-full flex justify-center mb-30px text-24px text-gray-900 text-center font-semibold">
          常見問題
        </h3>
        <Accordion items={accordionData} />
      </div>
    </Layout>
  );
}
