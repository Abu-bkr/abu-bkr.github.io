import { motion } from 'framer-motion';
import { Code2, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <Code2 className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                DigitalCraft
              </span>
            </motion.div>
            <p className="text-gray-400">
              Transforming ideas into powerful digital solutions. Building the future of web technology.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, color: '#3B82F6' }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'AI Development'].map((item) => (
                <motion.li key={item} whileHover={{ x: 5 }}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Tech Street, Digital City, 12345</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+1 (555) 123-4567</span>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>contact@digitalcraft.com</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>© 2024 DigitalCraft. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}