// Features Component

'use client';
import { Box, HStack, StackProps, Icon, Text, Stack } from '@chakra-ui/react';
import { MBGIcon, HFIcon, MSIcon } from '../icons/Icons';
import React from 'react';

// Interface to define StackProps along with icon
interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

// Feature items
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

// Pricing function to export component
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
