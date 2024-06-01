import { sharedMetadata } from '@/shared-metadata';
import React from 'react';

export const metadata = {
  title: 'Payment | Rising Panel',
  ...sharedMetadata.openGraph,
};


const page = () => {
  return <div>payment</div>;
};

export default page;
