# Steps to code Pricing UI with Chakra and NextJS

### 1. Create Next app

- Create a simple next13 app with experimental app directory using following command

  ```cmd
  npx create-next-app@latest --experimental-app
  ```

- When app is installed, run using following command

  ```cmd
  npm run dev
  ```

### 2. CleanUp working directory

- Newly created next app comes with pre-defined data, we need to clean up the working directory for that delete follwoing files

  ```
  ./app/global.css
  ./app/page.modules.css
  ```

- Delete style imports from `./app/layout.tsx` and delete un-necessary comments
- Replace `./public/favicon.ico` to update app logo and update `./app/head.tsx` to edit app title and app descripton
- Update `./app/page.tsx` with following code

  ```tsx
  export default function Home() {
    return <>Pricing UI</>;
  }
  ```

### 3. Install and Integrate Chakra UI

- Install chakraUI in the app using follwoing command

  ```cmd
  npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
  ```

- create `./chakraWrapper/Chakra.tsx` to define chakra wrapper

  ```tsx
  'use client';
  import React from 'react';
  import { ChakraProvider } from '@chakra-ui/react';
  export default function ChakraWrapper({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <ChakraProvider>{children}</ChakraProvider>;
  }
  ```

- update `./app/layout.tsx` to wrap app elements in the chakra provider and also use some chakra component in `./app/page.tsx` to check if chakra is installed properly

### 4. Create Header Component

- Create `./app/components/Header.tsx` to define header section

  ```tsx
  'use client';
  import React from 'react';
  import { Box, Heading, Text } from '@chakra-ui/react';

  export default function Header() {
    return (
      <Box
        as='section'
        color='gray.50'
        bg='purple.600'
        pt={['14', '14', '24']}
        pb={['44', '44', '48']}
        px='8'
        textAlign={['left', 'left', 'center']}
      >
        <Heading fontWeight='extrabold' fontSize={['3xl', '3xl', '4xl', '5xl']}>
          Simple pricing for your business
        </Heading>
        <Text
          fontWeight='medium'
          fontSize={['lg', 'lg', '2xl']}
          opacity='0.84'
          pt={['5', '5', '4']}
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    );
  }
  ```
