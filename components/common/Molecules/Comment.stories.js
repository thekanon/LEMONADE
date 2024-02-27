// Comment.stories.ts
import Comment from './Comment.vue';
import DateLabel from '@/components/common/Molecules/DateLabel.vue';

export default {
  title: 'Components/Molecules/Comment',
  component: Comment,
  tags: ['autodocs'],
  argTypes: {
    comment: {
      control: 'object',
    },
  },
};

const Template = args => ({
  components: { Comment, DateLabel },
  setup() {
    return { args };
  },
  template: '<Comment v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  comment: {
    id: 1,
    UserId: 'user123',
    content: '이것은 예시 댓글입니다.',
    createdAt: '2021-01-01T00:00:00.000Z',
    updatedAt: '2021-01-02T00:00:00.000Z',
  },
};
