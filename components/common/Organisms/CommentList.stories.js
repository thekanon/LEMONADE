// CommentList.stories.ts
import CommentList from './CommentList.vue';
import Comment from '@/components/common/Molecules/Comment.vue';
import TextLabel from '@/components/common/Atoms/TextLabel.vue';

export default {
  title: 'Components/Organisms/CommentList',
  component: CommentList,
  subcomponents: { Comment, TextLabel }, // Optional, if you want to list subcomponents
  argTypes: {
    comments: {
      control: 'object',
      description: 'Array of comment objects',
    },
  },
};

const Template = args => ({
  components: { CommentList, Comment, TextLabel },
  setup() {
    return { args };
  },
  template: '<CommentList v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      id: 1,
      UserId: 'user001',
      content: '첫 번째 댓글입니다.',
      createdAt: '2024-02-25T12:00:00.000Z',
      updatedAt: '2024-02-25T12:00:00.000Z',
    },
    {
      id: 2,
      UserId: 'user002',
      content: '두 번째 댓글입니다.',
      createdAt: '2024-02-26T12:00:00.000Z',
      updatedAt: '2024-02-26T12:00:00.000Z',
    },
  ],
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};
