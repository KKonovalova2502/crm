'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import CompanyFormModal from '@/app/components/company-form-modal';

export interface PageProps {
  // TODO: add props later
  [key: string]: unknown;
}

export default function Page({}: PageProps) {
  const router = useRouter();
  return <CompanyFormModal show={true} onClose={() => router.back()} />;
}