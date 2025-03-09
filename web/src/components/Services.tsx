import { motion } from 'framer-motion';
import { Code2, Server, GitBranch, Eye, Bot, Search } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Creating responsive, intuitive user interfaces with modern frameworks and technologies.'
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Building robust server-side solutions that power your applications.'
  },
  {
    icon: GitBranch,
    title: 'DevOps',
    description: 'Streamlining deployment and maintaining high-performance infrastructure.'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'Implementing advanced visual recognition and processing solutions.'
  },
  {
    icon: Bot,
    title: 'AI Development',
    description: 'Creating intelligent agents and ML-powered solutions for your business.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Enhancing your digital presence and improving search rankings.'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive digital solutions for modern businesses</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6"
              >
                {<service.icon className="w-8 h-8 text-blue-600" />}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}