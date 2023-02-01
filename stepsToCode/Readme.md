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

### 5. Create Pricing Component

- Create `./app/icons/Icons.tsx` to define a function which returns an svg of check mark

- Create `./app/components/Pricing.tsx` to define pricing section

  ```tsx
  'use client';
  import React from 'react';
  import { HStack, Icon, StackProps, Stack } from '@chakra-ui/react';
  import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';
  import { CheckIcon } from '../icons/Icons';
  const ListItem = (props: StackProps) => {
    const { children, ...rest } = props;
    return (
      <HStack as='li' spacing='5' {...rest} align='flex-start'>
        <Icon as={CheckIcon} w='6' h='6' flexShrink={0}></Icon>
        <Text textAlign='left'>{children}</Text>
      </HStack>
    );
  };
  export default function Pricing() {
    return (
      <Box as='section' mx='6'>
        <Box
          maxW='994px'
          margin='auto'
          mt='-40'
          borderRadius='xl'
          overflow='hidden'
          boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
          textAlign='center'
        >
          <Flex direction={['column', 'column', 'row']}>
            {/* Left side */}
            <Box bg='#F0EAFB' p={['8', '8', '16', '16']}>
              <Text fontWeight='extrabold' fontSize='xl'>
                Premium PRO
              </Text>
              <Heading as='h3' fontSize={['5xl', '5xl', '5xl', '6xl']} mt='4'>
                $329
              </Heading>
              <Text color='gray.900' fontSize='lg' fontWeight='medium' mt='2'>
                billed just once
              </Text>
              <Button
                colorScheme='purple'
                size='lg'
                w={['auto', '72', '36', '72']}
                mt='6'
              >
                Get Started
              </Button>
            </Box>
            {/* Right Side */}
            <Box p={['8', '8', '16']} fontSize='lg' bg='gray.50'>
              <Text textAlign='left'>
                Access these features when you get this pricing package for your
                business.
              </Text>
              <Stack as='ul' spacing='5' pt='6'>
                <ListItem>International calling and messaging API</ListItem>
                <ListItem>Additional phone numbers</ListItem>
                <ListItem>Automated messages via Zapier</ListItem>
                <ListItem>24/7 support and consulting</ListItem>
              </Stack>
            </Box>
          </Flex>
        </Box>
      </Box>
    );
  }
  ```

### 6. Create Features Component

- Create `./app/icons/Icons.tsx` to define a functions which returns an svg of icons

- Create `./app/components/Features.tsx` to define feature section

  ```tsx
  'use client';
  import { Box, HStack, StackProps, Icon, Text, Stack } from '@chakra-ui/react';
  import { MBGIcon, HFIcon, MSIcon } from '../icons/Icons';
  import React from 'react';
  interface FeatureProps extends StackProps {
    icon: React.ElementType;
  }
  export const Feature = (props: FeatureProps) => {
    const { icon, children, ...rest } = props;
    return (
      <HStack {...rest} spacing='6' align='start'>
        <Icon as={icon} boxSize={['8', '8', '8', '12']}></Icon>
        <Text textAlign='left' fontSize='lg' fontWeight='bold'>
          {children}
        </Text>
      </HStack>
    );
  };
  export default function Features() {
    return (
      <Box as='section' maxW='906px' m='auto' pt='16' pb='8'>
        <Stack
          px={['6', '6', '8']}
          spacing={['6', '6', '5']}
          direction={['column', 'column', 'row']}
          width={['auto', '480px', 'auto']}
          margin='auto'
        >
          <Feature icon={MBGIcon}>30 days money back Guarantee</Feature>
          <Feature icon={HFIcon}>No setup fees 100% hassle-free</Feature>
          <Feature icon={MSIcon}>
            No monthly subscription Pay once and for all
          </Feature>
        </Stack>
      </Box>
    );
  }
  ```

### 7. Combine components

- Update `./app/page.tsx` to use all components in the app

  ```tsx
  'use client';
  import { Box } from '@chakra-ui/react';
  import Header from './components/Header';
  import Pricing from './components/Pricing';
  import Features from './components/Features';
  export default function Home() {
    return (
      <Box backgroundColor='white' minH='100vh'>
        <Header />
        <Pricing />
        <Features />
      </Box>
    );
  }
  ```

### 8. Deploy on vercel

- use follwoing command to deploy the app on vercel

  ```cmd
  vercel
  ```

- deployed app can be used by visiting following URL

  ```url
  https://wmd-chakra-pricing-ui.vercel.app
  ```
