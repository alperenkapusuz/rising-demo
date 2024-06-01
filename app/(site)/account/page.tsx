import { sharedMetadata } from '@/shared-metadata';
import React from 'react';

export const metadata = {
  title: 'Account | Rising Panel',
  ...sharedMetadata.openGraph,
};

const page = () => {
  return <div>account</div>;
};

export default page;
