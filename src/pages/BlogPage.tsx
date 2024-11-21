import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies in web development.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    date: '2024-03-15',
    author: 'John Smith',
    category: 'Technology',
  },
  {
    title: 'Mastering Digital Marketing',
    excerpt: 'Essential strategies for successful digital marketing campaigns.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    date: '2024-03-12',
    author: 'Emma Wilson',
    category: 'Marketing',
  },
  {
    title: 'UI/UX Design Principles',
    excerpt: 'Key principles for creating engaging user experiences.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    date: '2024-03-10',
    author: 'Alex Johnson',
    category: 'Design',
  },
  {
    title: 'Mobile App Development Tips',
    excerpt: 'Best practices for building successful mobile applications.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    date: '2024-03-08',
    author: 'Sarah Lee',
    category: 'Development',
  },
  {
    title: 'SEO Optimization Guide',
    excerpt: 'Comprehensive guide to improve your search engine rankings.',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    date: '2024-03-05',
    author: 'Mike Brown',
    category: 'SEO',
  },
  {
    title: 'E-commerce Trends 2024',
    excerpt: 'Latest trends shaping the future of online retail.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    date: '2024-03-01',
    author: 'Lisa Chen',
    category: 'E-commerce',
  },
];

export default function BlogPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Insights, tips, and trends from our digital experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <User className="w-4 h-4 ml-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-purple-600 font-semibold inline-flex items-center hover:text-purple-700 transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}