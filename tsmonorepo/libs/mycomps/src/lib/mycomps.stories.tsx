import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Mycomps } from './mycomps';

export default {
  component: Mycomps,
  title: 'Mycomps',
} as ComponentMeta<typeof Mycomps>;

const Template: ComponentStory<typeof Mycomps> = (args) => (
  <Mycomps {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
