// Header component

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
      <Heading
        as='h1'
        fontWeight='extrabold'
        fontSize={['3xl', '3xl', '4xl', '5xl']}
      >
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
