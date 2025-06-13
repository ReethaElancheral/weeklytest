
import PostDetail from '../components/blog/PostDetail';
import withLoader from '../components/blog/WithLoader';
import { getPostBySlug } from '../api/posts';
import { useParams } from 'react-router-dom';

const ViewPost = () => {
  const { slug } = useParams();
  const WrappedPostDetail = withLoader(PostDetail, () => getPostBySlug(slug));
  return <WrappedPostDetail />;
};

export default ViewPost;