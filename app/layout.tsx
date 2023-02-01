// Root Layout

import React from 'react';
import ChakraWrapper from '@/chakraWrapper/Chakra';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <ChakraWrapper>{children}</ChakraWrapper>
      </body>
    </html>
  );
}
