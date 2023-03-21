import { ComponentMeta, ComponentStory, Meta } from "@storybook/react";

import { NavBar } from ".";

export default {
  title: "NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = () => <NavBar />;

export const Primary = Template.bind({});
Primary.args = {};
