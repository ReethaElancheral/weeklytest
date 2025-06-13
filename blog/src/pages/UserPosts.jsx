
import PostList from '../components/blog/PostList';
import withLoader from '../components/blog/WithLoader';
import { getPostsByUsername } from '../api/posts';
import { useParams } from 'react-router-dom';

const UserPosts = () => {
  const { username } = useParams();
  const WrappedPostList = withLoader(PostList, () => getPostsByUsername(username));
  return <WrappedPostList />;
};

export default UserPosts;