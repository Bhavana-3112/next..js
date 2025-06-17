import React from 'react'
import Image from 'next/image';

export default function LogoPage() {
  return (
    <div>
      <Image
        src="https://sirisapps.com/og-image.png"
        alt="image"
        width={600}
        height={400}
      />
    </div>
  );
}


// This code defines a React component that renders an image using the Next.js Image component.
// The image is sourced from a specified URL 