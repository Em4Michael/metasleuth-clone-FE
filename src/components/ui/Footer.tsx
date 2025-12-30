import Button from "./Button";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: 'Security Audits', href: '#' },
      { name: 'Phalcon Security', href: '#' },
      { name: 'Safe(Wallet) Monitor', href: '#' },
      { name: 'Stop for L2 Chains', href: '#' },
      { name: 'Phalcon Compliance', href: '#' },
      { name: 'MetaSleuth', href: '#' }
    ],
    tools: [
      { name: 'Phalcon Explorer', href: '#' },
      { name: 'MetaSuites', href: '#' },
      { name: 'Simulation API', href: '#' },
      { name: 'Anti-MEV RPC', href: '#' }
    ],
    resources: [
      { name: 'Docs', href: '#' },
      { name: 'Blog', href: '#' }
    ],
    company: [
      { name: 'Website', href: '#' },
      { name: 'Customers', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: '📧', name: 'Email', href: '#' },
    { icon: '𝕏', name: 'Twitter', href: '#' },
    { icon: '📱', name: 'Telegram', href: '#' },
    { icon: '💬', name: 'Medium', href: '#' },
    { icon: '🐙', name: 'GitHub', href: '#' },
    { icon: '🌐', name: 'Website', href: '#' },
    { icon: '💼', name: 'LinkedIn', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-zinc-800">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-b from-stone-900 to-black py-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h3 className="text-white font-semibold text-xl mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400 mb-6">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-amber-600 transition-colors"
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Products */}
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tools */}
            <div>
              <h4 className="text-white font-semibold mb-4">Tools</h4>
              <ul className="space-y-3">
                {footerLinks.tools.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.href} className="text-gray-400 hover:text-amber-600 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="flex items-center gap-6">
                <div className="text-gray-500 text-sm">
                  © 2025 BlockSec, Inc. All rights reserved.
                </div>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                    Terms of Service
                  </a>
                  <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                    Privacy Policy
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="text-gray-500 hover:text-amber-600 transition-colors text-xl"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;