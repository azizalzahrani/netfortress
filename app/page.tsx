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
  Shield,
  Database,
  Network,
  Lock,
  Code,
  Copy,
  Check,
  ChevronRight,
  AlertTriangle,
  Clock,
  KeyRound,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 to-slate-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-white/10">
        <div className="w-full px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/netfortress-logo-new.png"
                alt="Net Fortress Logo"
                width={40}
                height={40}
                className="w-10 h-10"
                priority
              />
              <span className="text-xl font-bold text-white">Net Fortress</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white font-medium">
              Home
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/install" className="text-gray-300 hover:text-white transition-colors">
              Installation
            </Link>
            <Link
              href="https://github.com/netfortress/netfortress"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
              asChild
            >
              <Link href="/install">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950 border-b border-white/10">
            <div className="flex flex-col px-4 py-2 space-y-3">
              <Link href="/" className="text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/docs"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/install"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Installation
              </Link>
              <Link
                href="https://github.com/netfortress/netfortress"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white w-full"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/install">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>

        <div className="w-full mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <Image
                src="/images/netfortress-logo-new.png"
                alt="Net Fortress Logo"
                width={180}
                height={180}
                className="w-36 h-36 md:w-44 md:h-44 relative z-10"
                priority
              />
              <div className="absolute -inset-1 rounded-full opacity-30 z-0 animate-pulse" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              AI-Powered Security for <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Cloud Networks
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mb-10"
            >
              Protect your network with advanced threat detection, real-time monitoring, and automated response
              capabilities powered by artificial intelligence.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group"
                asChild
              >
                <Link href="/install" className="group">
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Download Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 group" asChild>
                <Link href="/docs" className="group">
                  <Code className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  View Documentation
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-blue-950/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-orange-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-5"></div>

        <div className="w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Main Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Net Fortress protects your network with advanced AI-powered security
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <AlertTriangle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Real-time Detection Dashboard
                  </h3>
                  <p className="text-gray-300">Advanced ML for anomaly detection within milliseconds.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Automated Quarantine & Isolation
                  </h3>
                  <p className="text-gray-300">Rapid response for critical infrastructure protection.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Patch Management & Deployment
                  </h3>
                  <p className="text-gray-300">50% reduction in deployment time for efficiency.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <KeyRound className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Adaptive Access Control
                  </h3>
                  <p className="text-gray-300">Dynamic security adjustments for enhanced protection.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    Incident Simulation & Training
                  </h3>
                  <p className="text-gray-300">Prepare for real-world threats with advanced simulations.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-orange-500/20 to-orange-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    AI-Driven Forensics Analysis
                  </h3>
                  <p className="text-gray-300">Comprehensive insights into network vulnerabilities.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-blue-900/30 to-orange-900/30 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Code Side */}
                <div className="relative bg-blue-950/70 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-orange-400 mr-2" />
                      <h3 className="text-lg font-semibold text-white">Quick Start</h3>
                    </div>
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors text-sm text-white"
                      onClick={() =>
                        copyToClipboard(
                          `// Initialize Net Fortress with your API key
import { NetFortress } from 'netfortress';

// Create a new instance with your API key
const fortress = new NetFortress({
apiKey: process.env.NETFORTRESS_API_KEY,
region: 'us-west',
logLevel: 'info'
});

// Start monitoring your network
fortress.startMonitoring()
.then(status => {
  console.log(\`Monitoring started: \${status.nodes} nodes protected\`);
  
  // Set up event handlers for detected threats
  fortress.on('threat-detected', (threat) => {
    console.log(\`Threat detected: \${threat.type} from \${threat.source}\`);
    
    // Automatically quarantine if severity is high
    if (threat.severity >= 8) {
      fortress.quarantine(threat.deviceId);
    }
  });
})
.catch(error => {
  console.error('Failed to start monitoring:', error);
});`,
                          0,
                        )
                      }
                    >
                      {copiedIndex === 0 ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-400" />
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
                    <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm max-h-[400px] overflow-y-auto">
                      <code className="text-gray-300">{`// Initialize Net Fortress with your API key
import { NetFortress } from 'netfortress';

// Create a new instance with your API key
const fortress = new NetFortress({
apiKey: process.env.NETFORTRESS_API_KEY,
region: 'us-west',
logLevel: 'info'
});

// Start monitoring your network
fortress.startMonitoring()
.then(status => {
  console.log(\`Monitoring started: \${status.nodes} nodes protected\`);
  
  // Set up event handlers for detected threats
  fortress.on('threat-detected', (threat) => {
    console.log(\`Threat detected: \${threat.type} from \${threat.source}\`);
    
    // Automatically quarantine if severity is high
    if (threat.severity >= 8) {
      fortress.quarantine(threat.deviceId);
    }
  });
})
.catch(error => {
  console.error('Failed to start monitoring:', error);
});`}</code>
                    </pre>
                  </div>
                </div>

                {/* Explanation Side */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-4">Get Started in Minutes</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      This code snippet shows how to quickly integrate Net Fortress into your application. With just a
                      few lines of code, you can start monitoring your network and automatically respond to threats.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="bg-orange-500/10 text-orange-400 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Initialize the client with your API key</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-500/10 text-orange-400 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Start real-time network monitoring</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-500/10 text-orange-400 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Set up event handlers for detected threats</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-orange-500/10 text-orange-400 p-1 rounded-full mr-3 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Automatically respond to high-severity threats</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button
                        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                        asChild
                      >
                        <Link href="/docs#api-reference">
                          View Full API Reference
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

      {/* Features Section */}
      <section className="py-16 px-4 md:px-6 bg-slate-950/50">
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Net Fortress provides comprehensive security features to protect your local network
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 text-orange-400 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Real-time Protection</h3>
                <p className="text-gray-300">
                  Continuous monitoring and instant threat detection to keep your network safe at all times.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 text-orange-400 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Database className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Data Analysis</h3>
                <p className="text-gray-300">
                  Process up to 1TB of network data daily with advanced machine learning algorithms.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 text-orange-400 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Network className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Network Mapping</h3>
                <p className="text-gray-300">
                  Visualize your entire network topology and identify potential vulnerabilities.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 text-orange-400 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Lock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automated Response</h3>
                <p className="text-gray-300">
                  Automatically isolate threats and deploy security patches across your network.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6">
        <div className="w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full filter blur-3xl"></div>
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
                        <Sparkles className="h-6 w-6 mr-2 text-orange-400" />
                        Ready to secure your network?
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xl text-gray-300 mb-6 md:mb-0">
                        Download Net Fortress today and start protecting your infrastructure with AI-powered security.
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
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white group"
                      asChild
                    >
                      <Link href="/install">
                        <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                        Download Now
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 group"
                      asChild
                    >
                      <Link href="/docs">
                        <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Get Started
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
      <footer className="bg-slate-950 border-t border-white/10 py-12 px-4 md:px-6">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/netfortress-logo-new.png"
                  alt="Net Fortress Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold text-white">Net Fortress</span>
              </div>
              <p className="text-gray-400 text-sm">
                AI-powered security for local networks. Protect your infrastructure with advanced threat detection and
                automated response.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Documentation</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs#getting-started"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link href="/docs#api-reference" className="text-gray-400 hover:text-white transition-colors text-sm">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="/docs#examples" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs#best-practices"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Best Practices
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/install" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Installation Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/netfortress/netfortress"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub Repository
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
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
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://twitter.com/netfortress"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/netfortress"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Discord
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/netfortress"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Net Fortress. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

