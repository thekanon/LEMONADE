// DateLabel.stories.ts
import TextLabel from '../Atoms/TextLabel.vue';
import DateLabel from './DateLabel.vue';

export default {
  title: 'Components/Molecules/DateLabel',
  component: DateLabel,
  tags: ['autodocs'],
  argTypes: {
    date: {
      control: 'text',
      description: 'The date to be displayed, in ISO string format.',
    },
    className: {
      control: 'text',
      description: 'Custom class name for styling.',
    },
  },
};

const Template = args => ({
  components: { DateLabel, TextLabel },
  setup() {
    return { args };
  },
  template: '<DateLabel v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  date: '2024-02-27T00:00:00.000Z',
  className: '',
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  date: '2024-02-27T00:00:00.000Z',
  className: 'text-red-500',
};
