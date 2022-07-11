import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Box from './Box';

export default {
  title: 'cores/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const BoxTemplate: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const BaseBox = BoxTemplate.bind({});
BaseBox.args = {
  border: '1px solid red',
  width: '300px',
  height: '200px',
  children: 'red',
  backgroundColor: 'gray450',
};
