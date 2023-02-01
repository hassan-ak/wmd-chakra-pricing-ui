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
