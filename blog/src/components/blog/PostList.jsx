
import { Link, useParams } from 'react-router-dom';

const PostList = ({ data }) => {
  const { username } = useParams();
  return (
    <div>
      <h2>Posts by {username}</h2>
      <ul>
        {data.map(post => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;