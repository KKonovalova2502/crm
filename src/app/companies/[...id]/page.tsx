import React from 'react';
import Header from '@/app/components/header';

export default function Page({ params }: { params: { id: string[] } }) {
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
