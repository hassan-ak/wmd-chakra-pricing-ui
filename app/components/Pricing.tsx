// Pricing Component

'use client';
import React from 'react';
import { CheckIcon } from '../icons/Icons';
import { HStack, Icon, StackProps, Stack } from '@chakra-ui/react';
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';

// List items displaying content of the un-ordered list
// to be used on right side of the comnponent
const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='5' {...rest} align='flex-start'>
      <Icon as={CheckIcon} w='6' h='6' flexShrink={0}></Icon>
      <Text textAlign='left'>{children}</Text>
    </HStack>
  );
};

// Pricing function to export component
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
