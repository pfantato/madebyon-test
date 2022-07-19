import { Helmet } from 'react-helmet-async';

export const Fonts = () => {
  return (
    <Helmet>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin="" />
      <link
        href='https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;500;700&family=Exo+2:wght@300;500;700&family=Josefin+Sans:wght@200;400;600&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
};
