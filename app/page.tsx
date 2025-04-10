"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Menu,
  X,
  Download,
  Github,
  ArrowRight,
  CheckCircle,
  Code,
  Copy,
  Check,
  ChevronRight,
  Rocket,
  BarChart3,
  Users,
  Sparkles,
  Layers,
  Settings,
  Zap,
  Star,
  Globe,
  Hexagon,
  PlayCircle,
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState(0)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-md w-9 h-9 flex items-center justify-center">
                  <Hexagon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Nexus</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/products" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Products
              </Link>
              <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Solutions
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Pricing
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Documentation
              </Link>
              <div className="flex items-center gap-3 pl-3 border-l border-gray-700">
                <Link href="/login" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                  Login
                </Link>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                  asChild
                >
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-white/10">
            <div className="flex flex-col px-4 py-4 space-y-4">
              <Link href="/products" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Products
              </Link>
              <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Solutions
              </Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                Documentation
              </Link>
              <div className="pt-2 border-t border-gray-800 flex flex-col gap-3">
                <Link 
                  href="/login" 
                  className="text-gray-300 hover:text-white transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white w-full"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="/signup">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950/0 via-slate-950/0 to-slate-950/80"></div>
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/30 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-violet-500/30 rounded-full filter blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center px-3 py-1.5 mb-6 border border-violet-700/30 rounded-full bg-violet-900/20 backdrop-blur-sm"
            >
              <span className="px-2 py-0.5 mr-2 text-xs font-semibold bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full">NEW</span>
              <span className="text-sm text-violet-200">Introducing Nexus Platform v2.0</span>
              <ChevronRight className="h-4 w-4 text-violet-400 ml-1" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              The platform for <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
                modern development
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mb-10"
            >
              Build, deploy, and scale applications faster with our unified platform. 
              Streamline your workflow from development to production with integrated tools.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white group text-base"
                asChild
              >
                <Link href="/signup" className="group">
                  <Rocket className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Start for Free
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/5 group text-base" 
                asChild
              >
                <Link href="/demo" className="group flex items-center">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Hero Image/Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 h-20 bottom-0"></div>
            <div className="bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl p-1 shadow-2xl">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <Image 
                  src="/dashboard-preview.png" 
                  alt="Platform dashboard" 
                  width={1200} 
                  height={600}
                  className="w-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">Trusted by 5,000+ companies worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-items-center items-center">
            {['Acme Inc', 'Globex', 'Soylent', 'Initech', 'Umbrella', 'Cyberdyne'].map((company, index) => (
              <div key={index} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-8 flex items-center justify-center">
                  <div className="bg-white/10 rounded-md px-5 py-2">
                    <span className="text-white font-semibold">{company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Why developers <span className="text-blue-400">choose Nexus</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A modern platform built for the way you work. Integrate, automate, and accelerate your development.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <Rocket className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">10x Faster Development</h3>
              <p className="text-gray-400">
                Accelerate your development cycle with our intelligent workflows and pre-built components.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 bg-gradient-to-r from-violet-500/20 to-violet-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <Globe className="h-8 w-8 text-violet-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Edge Network</h3>
              <p className="text-gray-400">
                Deploy to our worldwide edge network for ultra-low latency and 99.99% uptime.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 bg-gradient-to-r from-purple-500/20 to-purple-500/10 rounded-2xl p-4 w-16 h-16 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered Tools</h3>
              <p className="text-gray-400">
                Leverage machine learning to automate routine tasks and get intelligent suggestions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-violet-500/20 rounded-full filter blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful features for modern teams</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale your applications
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-6 w-6 text-white" />,
                title: "Infrastructure as Code",
                description: "Define your infrastructure using code for consistent, repeatable deployments."
              },
              {
                icon: <Settings className="h-6 w-6 text-white" />,
                title: "Seamless Integrations",
                description: "Connect with over 200 tools and services via our extensible API ecosystem."
              },
              {
                icon: <Zap className="h-6 w-6 text-white" />,
                title: "Real-time Collaboration",
                description: "Work together with your team in real-time with built-in collaboration tools."
              },
              {
                icon: <BarChart3 className="h-6 w-6 text-white" />,
                title: "Advanced Analytics",
                description: "Gain insights into application performance, usage, and user behavior."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-white" />,
                title: "AI-Powered Automation",
                description: "Leverage machine learning to automate routine tasks and workflows."
              },
              {
                icon: <Globe className="h-6 w-6 text-white" />,
                title: "Global Edge Network",
                description: "Deploy to our global edge network for ultra-low latency content delivery."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-white/5 h-full overflow-hidden group hover:bg-slate-900/70 transition-all duration-300">
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-blue-500/20 to-violet-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                    <div className="bg-gradient-to-br from-blue-600 to-violet-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Tabs Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-violet-500/20 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Our <span className="text-blue-400">product suite</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              A comprehensive platform for the entire application lifecycle
            </motion.p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {["Development", "Deployment", "Monitoring", "Collaboration"].map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === index
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white"
                    : "bg-slate-800/50 text-gray-300 hover:bg-slate-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {activeTab === 0 && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">Nexus Development</h3>
                      <p className="text-gray-300">
                        Streamline your development process with our integrated toolkit designed for modern web and mobile applications.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Collaborative code editor with AI suggestions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Instant development environments in the cloud</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Built-in testing and quality assurance tools</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Component library with 200+ pre-built elements</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeTab === 1 && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">Nexus Deployment</h3>
                      <p className="text-gray-300">
                        Deploy your applications to our global edge network with a single command or click.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">One-click deployments to production</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Automatic scaling based on traffic demands</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Global CDN with 99.99% uptime guarantee</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Rollback and staged deployment capabilities</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeTab === 2 && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">Nexus Monitoring</h3>
                      <p className="text-gray-300">
                        Get real-time insights into your application performance, usage, and health.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Real-time metrics and performance dashboards</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Intelligent alerting and anomaly detection</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Error tracking and automated diagnostics</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">User behavior analytics and session replay</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  {activeTab === 3 && (
                    <>
                      <h3 className="text-2xl font-bold text-white mb-4">Nexus Collaboration</h3>
                      <p className="text-gray-300">
                        Work seamlessly with your team through integrated collaboration tools.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Real-time collaborative editing and review</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Built-in chat, comments, and video calls</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Project management with task tracking</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-400 mr-3 mt-0.5 shrink-0" />
                          <span className="text-gray-300">Document sharing and version history</span>
                        </li>
                      </ul>
                    </>
                  )}
                  
                  <div className="pt-4">
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                      asChild
                    >
                      <Link href={`/product/${["development", "deployment", "monitoring", "collaboration"][activeTab]}`}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
              
              {/* Image Side */}
              <motion.div
                key={`image-${activeTab}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-950 p-6 flex items-center"
              >
                <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl w-full">
                  <Image
                    src={`/product-${activeTab + 1}.png`}
                    alt={`${["Development", "Deployment", "Monitoring", "Collaboration"][activeTab]} screenshot`}
                    width={600}
                    height={400}
                    className="w-full rounded-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-violet-500/20 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-900/80 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Code Side */}
                <div className="relative bg-slate-900 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-blue-400 mr-2" />
                      <h3 className="text-lg font-semibold text-white">Simple Integration</h3>
                    </div>
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 transition-colors text-sm text-white"
                      onClick={() =>
                        copyToClipboard(
                          `import { Nexus } from '@nexus/sdk';

// Initialize the Nexus platform with your API key
const nexus = new Nexus({
  apiKey: process.env.NEXUS_API_KEY,
  project: 'my-awesome-app'
});

// Deploy your application
async function deployToProduction() {
  const deployment = await nexus.deployments.create({
    source: './build',
    environment: 'production',
    auto_scale: true
  });
  
  console.log(\`Deployment started: \${deployment.id}\`);
  
  // Wait for deployment to complete
  const result = await nexus.deployments.waitForStatus(deployment.id, 'complete');
  
  console.log(\`Successfully deployed to \${result.url}\`);
  console.log(\`Deployment took \${result.duration}s\`);
  
  // Set up monitoring
  await nexus.monitoring.configure({
    alerts: [
      { 
        metric: 'response_time', 
        threshold: 500, // ms
        channel: 'slack'
      },
      {
        metric: 'error_rate',
        threshold: 0.01, // 1%
        channel: 'email'
      }
    ]
  });
}

// Run the deployment
deployToProduction().catch(error => {
  console.error('Deployment failed:', error);
});`,
                          0,
                        )
                      }
                    >
                      {copiedIndex === 0 ? (
                        <>
                          <Check className="h-4 w-4 text-green-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="bg-slate-950 rounded-md p-4 overflow-x-auto text-sm max-h-[400px] overflow-y-auto">
                      <code className="text-gray-300">{`import { Nexus } from '@nexus/sdk';

// Initialize the Nexus platform with your API key
const nexus = new Nexus({
  apiKey: process.env.NEXUS_API_KEY,
  project: 'my-awesome-app'
});

// Deploy your application
async function deployToProduction() {
  const deployment = await nexus.deployments.create({
    source: './build',
    environment: 'production',
    auto_scale: true
  });
  
  console.log(\`Deployment started: \${deployment.id}\`);
  
  // Wait for deployment to complete
  const result = await nexus.deployments.waitForStatus(deployment.id, 'complete');
  
  console.log(\`Successfully deployed to \${result.url}\`);
  console.log(\`Deployment took \${result.duration}s\`);
  
  // Set up monitoring
  await nexus.monitoring.configure({
    alerts: [
      { 
        metric: 'response_time', 
        threshold: 500, // ms
        channel: 'slack'
      },
      {
        metric: 'error_rate',
        threshold: 0.01, // 1%
        channel: 'email'
      }
    ]
  });
}

// Run the deployment
deployToProduction().catch(error => {
  console.error('Deployment failed:', error);
});`}</code>
                    </pre>
                  </div>
                </div>

                {/* Explanation Side */}
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Powerful APIs, Simple Integration</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our robust SDK makes it easy to automate your entire workflow, from development to deployment and monitoring. With just a few lines of code, you can:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="bg-blue-500/10 text-blue-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Deploy to production with a single command</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-500/10 text-blue-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Configure auto-scaling for peak performance</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-500/10 text-blue-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Set up intelligent monitoring and alerts</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-500/10 text-blue-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Integrate with your favorite development tools</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button
                        className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white"
                        asChild
                      >
                        <Link href="/docs">
                          Explore the Documentation
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Trusted by developers worldwide</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of developers who have transformed their workflow with Nexus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nexus has completely transformed our development workflow. We've cut our deployment time by 80% and our team collaboration is better than ever.",
                author: "Sarah Johnson",
                role: "CTO, TechForward",
                rating: 5
              },
              {
                quote: "The integrated monitoring and alerting has saved us countless hours of debugging. We catch issues before they affect our users.",
                author: "Michael Chen",
                role: "Lead Developer, DataStream",
                rating: 5
              },
              {
                quote: "After switching to Nexus, our development velocity increased dramatically. What used to take weeks now takes days.",
                author: "Alex Rodriguez",
                role: "Engineering Manager, CloudScale",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-white/5 h-full hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <p className="text-white font-medium">{testimonial.author}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 group"
              asChild
            >
              <Link href="/testimonials">
                See more testimonials
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-violet-500/20 rounded-full filter blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Simple, transparent pricing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Choose the plan that's right for your team
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border-white/5 relative overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-blue-400 font-medium">Starter</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">$29</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">per seat, billed annually</p>
                  </div>
                  <p className="text-gray-300 mb-6 border-b border-gray-800 pb-6">Perfect for small teams and individual developers.</p>
                  <ul className="space-y-3 mb-8">
                    {['5 users', '10GB storage', '3 environments', 'Basic analytics', 'Community support'].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-2 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-slate-900 hover:bg-gray-100" asChild>
                    <Link href="/signup?plan=starter">Start Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-violet-600 h-1"></div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold py-1 px-3 rounded-full">Popular</div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-blue-400 font-medium">Pro</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">$79</span>
                      <span className="text-gray-400 ml-2">/month</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">per seat, billed annually</p>
                  </div>
                  <p className="text-gray-300 mb-6 border-b border-gray-800 pb-6">Great for growing teams that need more power and features.</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Unlimited users', 
                      '100GB storage', 
                      'Unlimited environments', 
                      'Advanced analytics', 
                      'Priority support',
                      'Automated CI/CD',
                      'Custom domains',
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-2 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white" asChild>
                    <Link href="/signup?plan=pro">Start Free Trial</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-900/50 backdrop-blur-sm border-white/5 relative overflow-hidden h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="text-blue-400 font-medium">Enterprise</span>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-white">Custom</span>
                    </div>
                    <p className="text-gray-500 text-sm mt-1">contact us for pricing</p>
                  </div>
                  <p className="text-gray-300 mb-6 border-b border-gray-800 pb-6">For large teams that need advanced features and dedicated support.</p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Everything in Pro', 
                      'Unlimited storage', 
                      'Custom integrations', 
                      'Dedicated support', 
                      'Enterprise SSO',
                      'Compliance features',
                      'Custom SLAs',
                      'On-premise option'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-2 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-white text-slate-900 hover:bg-gray-100" asChild>
                    <Link href="/contact-sales">Contact Sales</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-900/20 to-violet-900/20 backdrop-blur-sm border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/20 rounded-full filter blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center">
                        <Sparkles className="h-6 w-6 mr-2 text-blue-400" />
                        Ready to transform your development workflow?
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xl text-gray-300 mb-6 md:mb-0">
                        Start your free 14-day trial today. No credit card required.
                      </p>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-base"
                      asChild
                    >
                      <Link href="/signup">
                        <Rocket className="mr-2 h-5 w-5" />
                        Start Free Trial
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 text-base"
                      asChild
                    >
                      <Link href="/demo">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Watch Demo
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-md w-8 h-8 flex items-center justify-center">
                  <Hexagon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Nexus</span>
              </Link>
              <p className="text-gray-400 text-sm mb-4">
                The modern platform for development, deployment, and scaling your applications.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Products</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/development" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/deployment" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Deployment
                  </Link>
                </li>
                <li>
                  <Link href="/monitoring" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Monitoring
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Collaboration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/guides" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Nexus Technologies, Inc. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}