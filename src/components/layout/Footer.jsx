import React from 'react'
import { motion } from 'framer-motion'
import { Music, Mail, Phone, MapPin } from 'lucide-react'
import { Container, Flex, Button } from '../ui'
import { scrollToElement } from '../../utils/helpers'

/**
 * Footer component with company information and links
 * 
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 */
const Footer = ({ className = '', ...props }) => {
  // Footer links configuration
  const platformLinks = [
    {
      label: 'How It Works',
      href: '#how-it-works',
      onClick: () => scrollToElement('how-it-works')
    },
    {
      label: 'The Artists',
      href: '#artists',
      onClick: () => scrollToElement('artists')
    },
    {
      label: 'Early Access',
      href: '#early-access',
      onClick: () => scrollToElement('early-access')
    }
  ]

  const companyLinks = [
    {
      label: 'About Syni.ai',
      href: '#about',
      onClick: () => scrollToElement('about')
    },
    {
      label: 'Contact',
      href: '#contact',
      onClick: () => scrollToElement('contact')
    },
    {
      label: 'Privacy',
      href: '#privacy',
      onClick: () => scrollToElement('privacy')
    }
  ]

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: 'hello@wimbo.ai',
      href: 'mailto:hello@wimbo.ai'
    },
    {
      icon: <Phone size={18} />,
      text: '+254 XXX XXX XXX',
      href: 'tel:+254XXXXXXXXX'
    },
    {
      icon: <MapPin size={18} />,
      text: 'Nairobi, Kenya',
      href: '#'
    }
  ]

  return (
    <footer className={`bg-background border-t border-border-dark/10 ${className}`} {...props}>
      <Container>
        <div className="py-12 md:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Music size={18} className="text-white" />
                </div>
                <span className="font-heading font-black text-xl text-text-primary">
                  wimbo.ai
                </span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                AI not as disruption — as disciplined studio infrastructure built to strengthen human creative output.
              </p>
              <div className="flex gap-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    className="w-10 h-10 bg-background-light rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    {contact.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Platform Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-heading font-black text-text-primary mb-6">
                PLATFORM
              </h3>
              <ul className="space-y-3">
                {platformLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        link.onClick()
                      }}
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-heading font-black text-text-primary mb-6">
                COMPANY
              </h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        link.onClick()
                      }}
                      className="text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-heading font-black text-text-primary mb-6">
                STAY UPDATED
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Get the latest updates on East Africa's AI music revolution.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-border-dark rounded-button focus:border-primary focus:shadow-focus transition-all duration-150"
                />
                <Button variant="primary" fullWidth>
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Bottom Footer */}
          <motion.div
            className="pt-8 border-t border-border-dark/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Flex justify="between" align="center" className="flex-col md:flex-row gap-4">
              <p className="text-text-secondary text-sm">
                © 2024 Wimbo.ai. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
              </div>
            </Flex>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
