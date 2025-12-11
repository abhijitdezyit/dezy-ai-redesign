"use client"

import { useState, useEffect } from "react"
import { Menu, X, Play, CheckCircle, Zap, Shield, Users, Stethoscope } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="Dezy It Logo" width={320} height={60} style={{marginTop: '-10px'}} className="w-auto" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground/80 hover:text-foreground transition">
                Product
              </a>
              <a href="#company" className="text-foreground/80 hover:text-foreground transition">
                Company
              </a>
              <a href="#resources" className="text-foreground/80 hover:text-foreground transition">
                Resources
              </a>
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition">
                Book a demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 overflow-hidden">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {/* Animated mesh gradient background */}
          <div
            className="absolute inset-0 animate-mesh-gradient"
            style={{
              background:
                "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.08) 25%, rgba(124, 58, 237, 0.1) 50%, rgba(6, 182, 212, 0.12) 100%)",
            }}
          />

          {/* Large pulsing orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow filter saturate-150" />
          <div
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-float-slower"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "4s" }}
          />

          {/* Smaller accent orbs */}
          <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-cyan-400/20 rounded-full blur-2xl animate-orb-pulse" />
          <div
            className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-purple-400/15 rounded-full blur-2xl animate-orb-pulse"
            style={{ animationDelay: "1s" }}
          />

          {/* Animated gradient lines (neural network effect) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            style={{ filter: "drop-shadow(0 0 20px rgba(124, 58, 237, 0.2))" }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {/* Neural network connections */}
            <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            <line x1="30%" y1="40%" x2="50%" y2="35%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            <line x1="50%" y1="35%" x2="70%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            <line x1="70%" y1="50%" x2="85%" y2="30%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            <line x1="60%" y1="70%" x2="80%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            <line x1="20%" y1="60%" x2="40%" y2="75%" stroke="url(#lineGradient)" strokeWidth="2" opacity="0.4" />
            {/* Connection nodes */}
            <circle cx="10%" cy="20%" r="4" fill="#7c3aed" opacity="0.6" />
            <circle cx="30%" cy="40%" r="4" fill="#06b6d4" opacity="0.6" />
            <circle cx="50%" cy="35%" r="4" fill="#7c3aed" opacity="0.6" />
            <circle cx="70%" cy="50%" r="4" fill="#06b6d4" opacity="0.6" />
            <circle cx="85%" cy="30%" r="4" fill="#7c3aed" opacity="0.6" />
            <circle cx="60%" cy="70%" r="4" fill="#06b6d4" opacity="0.6" />
            <circle cx="80%" cy="60%" r="4" fill="#7c3aed" opacity="0.6" />
            <circle cx="20%" cy="60%" r="4" fill="#06b6d4" opacity="0.6" />
            <circle cx="40%" cy="75%" r="4" fill="#7c3aed" opacity="0.6" />
          </svg>
        </div>

        {/* Hero content with relative positioning */}
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">✨ AI Voice Assistant for Healthcare</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Voice AI That Listens,
              <br />
              Understands & Cares
            </span>
          </h1>

          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dezy transforms patient care with intelligent voice assistance. From first hello to every step of the
            patient journey, we stay connected.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition transform hover:scale-105">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border border-cyan-500/50 rounded-full font-semibold hover:bg-cyan-500/10 transition flex items-center justify-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>

          {/* Animated Hero Element */}
          <div className="relative mx-auto max-w-2xl">
            <div className="relative bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-xl glow">
              <div className="flex justify-center items-end gap-1 h-24">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full animate-waveform"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      height: Math.random() * 40 + 8,
                    }}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/60 mt-4">Intelligent Voice Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-center text-foreground/70 mb-16 max-w-2xl mx-auto">
            Designed for healthcare professionals who demand intelligence and reliability
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Instant voice analysis and response generation for seamless patient interactions",
              },
              {
                icon: Shield,
                title: "HIPAA Compliant",
                desc: "Enterprise-grade security ensuring patient data privacy and regulatory compliance",
              },
              {
                icon: Users,
                title: "Multi-Patient Management",
                desc: "Handle multiple patient interactions simultaneously with contextual awareness",
              },
              {
                icon: Stethoscope,
                title: "Clinical Integration",
                desc: "Seamlessly integrates with major EHR systems and healthcare platforms",
              },
              {
                icon: CheckCircle,
                title: "Accuracy Optimized",
                desc: "Healthcare-specific AI training for medical terminology and clinical scenarios",
              },
              {
                icon: Zap,
                title: "24/7 Availability",
                desc: "Always-on voice assistance for continuous patient engagement and support",
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <div
                  key={i}
                  className="p-6 bg-card border border-border rounded-xl hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Patient Care?</h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join healthcare providers using Dezy AI to deliver smarter, faster, and more compassionate patient care.
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-purple-500/50 transition transform hover:scale-105">
            Schedule Your Demo Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow</h3>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; 2025 Dezy AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
