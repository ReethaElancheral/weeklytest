export const getPostsByUsername = async (username) => {
  return [
  
    { slug: 'best-sedan-cars-2025', title: 'Top 10 Sedan Cars in 2025' },
    { slug: 'electric-vs-petrol', title: 'Electric vs Petrol Cars: Which is Better?' },
    { slug: 'car-maintenance-tips', title: 'Car Maintenance Tips for New Drivers' },
    { slug: 'latest-ev-launches', title: 'Latest Electric Vehicle Launches in 2025' },
    { slug: 'buying-used-car-guide', title: 'Complete Guide to Buying a Used Car' },
    { slug: 'how-to-detail-your-car', title: 'How to Professionally Detail Your Car at Home' },
  ];
};


export const getPostBySlug = async (slug) => {
  const posts = {
   
    'best-sedan-cars-2025': {
      title: 'Top 10 Sedan Cars in 2025',
      content: 'Explore the best sedans of 2025 including models from Toyota, Honda, BMW, and more. We compare price, performance, and comfort.'
    },
    'electric-vs-petrol': {
      title: 'Electric vs Petrol Cars: Which is Better?',
      content: 'We break down the pros and cons of electric vehicles and traditional petrol cars to help you choose the right one for your needs.'
    },
    'car-maintenance-tips': {
      title: 'Car Maintenance Tips for New Drivers',
      content: 'Learn the basics of car maintenance: oil changes, tire pressure, brake checks, and more to keep your car in top condition.'
    },
    'latest-ev-launches': {
      title: 'Latest Electric Vehicle Launches in 2025',
      content: 'Check out the newest electric vehicles launching in 2025 with features like autonomous driving, extended range, and fast charging.'
    },
    'buying-used-car-guide': {
      title: 'Complete Guide to Buying a Used Car',
      content: 'Avoid common pitfalls when buying a used car. This guide walks you through inspection tips, paperwork, and negotiation advice.'
    },
    'how-to-detail-your-car': {
      title: 'How to Professionally Detail Your Car at Home',
      content: 'Want that showroom shine? Learn how to wash, wax, and polish your car like a pro using basic tools and products.'
    }
  };

  return {
    slug,
    title: posts[slug]?.title || `Post titled ${slug}`,
    content: posts[slug]?.content || 'This is the full post content.'
  };
};


















