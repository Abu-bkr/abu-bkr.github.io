import { motion } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white flex items-center gap-2"
          >
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              SoporeNetwork
            </span>
          </motion.a>

          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1, color: '#3B82F6' }}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 bg-black/80 backdrop-blur-lg rounded-b-2xl border-t border-white/10"
          >
            {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}