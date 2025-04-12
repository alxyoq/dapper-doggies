// app/head.tsx
export default function Head() {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* General Meta */}
      <meta name="description" content="Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire." />

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:url" content="https://dapperdoggies.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Devon's Dapper Dogs Pet Grooming" />
      <meta property="og:description" content="Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire." />
      <meta property="og:image" content="https://dapperdoggies.com/home-page.png" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://dapperdoggies.com/" />
      <meta name="twitter:title" content="Devon's Dapper Dogs Pet Grooming" />
      <meta name="twitter:description" content="Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire." />
      <meta name="twitter:image" content="https://dapperdoggies.com/home-page.png" />

      <title>Devon's Dapper Dogs Pet Grooming</title>
    </>
  );
}
