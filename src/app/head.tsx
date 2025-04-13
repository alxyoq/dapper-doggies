// app/head.tsx

export const metadata = {
  // Browser tab title
  title: "Devon's Dapper Dogs Pet Grooming",
  
  // General site description
  description:
    "Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire.",
  
  // Open Graph (Facebook, Instagram) metadata
  openGraph: {
    type: "website",
    url: "https://dapperdoggies.com/",
    title: "Devon's Dapper Dogs Pet Grooming",
    description:
      "Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire.",
    images: [
      {
        url: "https://dapperdoggies.com/logo.png",
        width: 1200,      // Update if needed
        height: 1200,     // Update if needed
        alt: "Devon's Dapper Dogs Pet Grooming Logo",
      },
    ],
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image",
    url: "https://dapperdoggies.com/",
    title: "Devon's Dapper Dogs Pet Grooming",
    description:
      "Mobile Dog Grooming Service – The royal treatment your pet deserves, with the convenience you desire.",
    images: ["https://dapperdoggies.com/logo.png"],
  },
};

export default function Head() {
  return (
    <>
      {/* Device responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon and App Icons */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Extra <title> for older Next.js usage;
          The metadata API sets the actual <title> for crawlers. */}
      <title>Devon's Dapper Dogs Pet Grooming</title>
    </>
  );
}
