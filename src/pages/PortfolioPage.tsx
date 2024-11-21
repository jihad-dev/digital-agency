import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Modern e-commerce solution with advanced features and seamless checkout.',
  },
  {
    title: 'Financial Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    description: 'Intuitive dashboard for tracking financial metrics and performance.',
  },
  {
    title: 'Travel App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    description: 'Cross-platform mobile app for travel planning and booking.',
  },
  {
    title: 'Marketing Campaign',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80',
    description: 'Successful digital marketing campaign that increased conversions by 150%.',
  },
  {
    title: 'Healthcare Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    description: 'Telemedicine platform connecting patients with healthcare providers.',
  },
  {
    title: 'Restaurant Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: 'Modern restaurant website with online ordering and reservation system.',
  },
];

export default function PortfolioPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our portfolio of successful projects and digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <span className="text-purple-300 text-sm font-semibold">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}