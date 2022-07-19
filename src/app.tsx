import { Router } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';

import { Fonts, PageRouter, Seo } from '@/components';
import { useHashLocation } from '@/hooks';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router hook={useHashLocation}>
      <HelmetProvider>
        <Seo />
        <Fonts />
        <main role='main'>
          <div className='content'>
            {/* Router specifies which component to insert here as the main content */}
            <PageRouter />
          </div>
        </main>
      </HelmetProvider>
    </Router>
  );
}
