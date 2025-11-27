import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
    // TODO: add props later
  [key: string]: unknown;
}

export default function Page({}: PageProps) {
  return <Header>Add new company</Header>;
}