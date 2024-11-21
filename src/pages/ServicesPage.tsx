import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  Palette,
  LineChart,
  Smartphone,
  Globe,
  Search,
} from 'lucide-react';

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies and best practices.',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    description:
      'User-centered design that creates engaging and intuitive experiences.',
  },
  {
    icon: <LineChart className="w-8 h-8" />,
    title: 'Digital Marketing',
    description:
      'Data-driven marketing strategies to grow your online presence.',
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'E-Commerce Solutions',
    description:
      'Complete online store setups with payment integration and inventory management.',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO Optimization',
    description:
      'Improve your search engine rankings and drive organic traffic.',
  },
];

export default function ServicesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Comprehensive digital solutions to help your business thrive in the
              modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals.
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-200">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}