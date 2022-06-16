import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Carousel } from './carousel';

export default {
  component: Carousel,
  title: 'Carousel',
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => (
  <Carousel {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
