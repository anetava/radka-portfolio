'use client';

import { useState } from 'react';
import { Photo } from '@/lib/data';
import Navigation from './Navigation';
import Hero from './Hero';
import Gallery from './Gallery';
import Tearsheets from './Tearsheets';
import Manifesto from './Manifesto';
import PhotoModal from './PhotoModal';
import InquirySlideOver from './InquirySlideOver';

export default function PortfolioClient() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [inquiryOpen,  setInquiryOpen]  = useState(false);

  function handleInquire() {
    setInquiryOpen(true);
  }

  function handleCloseModal() {
    setSelectedPhoto(null);
    // Don't close inquiry if it's open independently
  }

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Gallery onPhotoSelect={setSelectedPhoto} />
        <Tearsheets />
        <Manifesto />
      </main>

      {/* Modal system — rendered at root level for proper stacking */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={handleCloseModal}
        onInquire={handleInquire}
      />
      <InquirySlideOver
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        photoTitle={selectedPhoto?.title}
      />
    </>
  );
}
