import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-emerald-400">Karuna Kodwani</h3>
            <p className="text-sm text-slate-300">
              Your trusted partner in holistic healing and wellness. Transform your life through 
              personalized nutrition, yoga, meditation, and life coaching.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faq")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blog")}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>Dietetics Consultation</li>
              <li>Yoga Sessions</li>
              <li>Meditation & Mindfulness</li>
              <li>Life Coaching</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:karunakodwani@gmail.com" className="hover:text-emerald-400 transition-colors break-all">
                  karunakodwani@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="tel:+919819131121" className="hover:text-emerald-400 transition-colors">
                  +91 98191 31121
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://www.google.com/maps/place/15,+2,+Oshiwara,+Goregaon+West,+Mumbai,+Maharashtra+400102/@19.149534,72.835219,17z/data=!4m5!3m4!1s0x3be7b638a26a329d:0xe1748d4df7ff3bdb!8m2!3d19.149534!4d72.8352192?hl=en&entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Oshiwara sanskar chs Ltd, bld no 15, flat no 002, Oshiwara
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://instagram.com/p/DPi09WGEfD7/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram Post 1"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/p/DPgkH2GjJjU/?igsh=YzltdWExa3U4cmd3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label="Instagram Post 2"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2025 Karuna Kodwani. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate("privacy")}
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate("terms")}
              className="hover:text-emerald-400 transition-colors"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate("refund")}
              className="hover:text-emerald-400 transition-colors"
            >
              Return & Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
