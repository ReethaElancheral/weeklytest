export const getPostsByUsername = async (username) => {
  return [
    { slug: 'how-to-use-react', title: 'How to Use React' },
    { slug: 'understanding-jsx', title: 'Understanding JSX' }
  ];
};

export const getPostBySlug = async (slug) => {
  return { slug, title: `Post titled ${slug}`, content: 'This is the full post content.' };
};