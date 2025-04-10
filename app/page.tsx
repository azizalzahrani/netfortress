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
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 to-slate-950">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-sm border-b border-white/10">
        <div className="w-full px-4 md:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md w-8 h-8 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Fusion</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-white font-medium">
              Home
            </Link>
            <Link href="/features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Documentation
            </Link>
            <Link
              href="https://github.com/yourusername/fusion"
              className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </Link>
            <Button
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
              asChild
            >
              <Link href="/signup">
                <Rocket className="mr-2 h-4 w-4" />
                Get Started
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
                href="/features"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/docs"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/yourusername/fusion"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white w-full"
                asChild
                onClick={() => setMobileMenuOpen(false)}
              >
                <Link href="/signup">
                  <Rocket className="mr-2 h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-5 animate-pulse"></div>

        <div className="w-full mx-auto relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring" }}
              className="mb-8"
            >
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-xl">
                <Layers className="h-8 w-8 text-white" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Build, Connect, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Transform
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mb-10"
            >
              An all-in-one platform for modern teams. Build powerful applications, connect your tools, and transform your workflow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white group"
                asChild
              >
                <Link href="/signup" className="group">
                  <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Start for Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 group" asChild>
                <Link href="/demo" className="group">
                  <Zap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 md:px-6 bg-slate-950/50">
        <div className="w-full mx-auto">
          <div className="text-center mb-8">
            <p className="text-gray-400 uppercase tracking-wider text-sm font-medium">Trusted by innovative teams</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
              <div key={index} className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <div className="h-7 flex items-center justify-center">
                  <div className="bg-white/80 rounded px-4 py-1">
                    <span className="text-slate-900 font-semibold">{company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-slate-950 to-indigo-950/70 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-40 left-20 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>

        <div className="w-full mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features to help you build, connect, and transform your workflow
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Lightning Fast Development
                  </h3>
                  <p className="text-gray-300">Build and deploy applications with our intuitive toolset in record time.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Settings className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Powerful Integrations
                  </h3>
                  <p className="text-gray-300">Connect with over 150+ tools and services to streamline your workflow.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Team Collaboration
                  </h3>
                  <p className="text-gray-300">Work seamlessly with your team in real-time with shared workspaces.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <BarChart3 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-300">Gain insights into your performance with comprehensive analytics dashboards.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    AI-Powered Automation
                  </h3>
                  <p className="text-gray-300">Automate repetitive tasks with our cutting-edge AI assistant.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 h-full overflow-hidden group">
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-indigo-500/20 to-purple-600/5 rounded-bl-3xl -mr-6 -mt-6"></div>
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                    Enterprise-Grade Security
                  </h3>
                  <p className="text-gray-300">Protect your data with our advanced security features and compliance tools.</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl border border-white/5 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Code Side */}
                <div className="relative bg-indigo-950/70 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Code className="h-5 w-5 text-indigo-400 mr-2" />
                      <h3 className="text-lg font-semibold text-white">Quick Integration</h3>
                    </div>
                    <button
                      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-indigo-800/50 hover:bg-indigo-800 transition-colors text-sm text-white"
                      onClick={() =>
                        copyToClipboard(
                          `import { Fusion } from '@fusion/core';

// Initialize the Fusion platform with your API key
const fusion = new Fusion({
  apiKey: process.env.FUSION_API_KEY,
  region: 'us-east',
  features: ['analytics', 'automation', 'collaboration']
});

// Connect your services
await fusion.connect([
  { type: 'github', config: { org: 'yourCompany' } },
  { type: 'slack', config: { channels: ['dev', 'product'] } },
  { type: 'aws', config: { services: ['lambda', 's3'] } }
]);

// Create a workflow
const workflow = fusion.createWorkflow({
  name: 'Issue Tracker',
  trigger: {
    source: 'github',
    event: 'issue.created'
  },
  actions: [
    {
      type: 'slack.message',
      channel: 'dev',
      template: 'New issue created: {{issue.title}}'
    },
    {
      type: 'analytics.track',
      event: 'github_issue_created',
      properties: {
        issue_id: '{{issue.id}}',
        repository: '{{repository.name}}'
      }
    }
  ]
});

// Start the workflow
await workflow.start();

console.log('Workflow started successfully!');`,
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
                    <pre className="bg-indigo-950 rounded-md p-4 overflow-x-auto text-sm max-h-[400px] overflow-y-auto">
                      <code className="text-gray-300">{`import { Fusion } from '@fusion/core';

// Initialize the Fusion platform with your API key
const fusion = new Fusion({
  apiKey: process.env.FUSION_API_KEY,
  region: 'us-east',
  features: ['analytics', 'automation', 'collaboration']
});

// Connect your services
await fusion.connect([
  { type: 'github', config: { org: 'yourCompany' } },
  { type: 'slack', config: { channels: ['dev', 'product'] } },
  { type: 'aws', config: { services: ['lambda', 's3'] } }
]);

// Create a workflow
const workflow = fusion.createWorkflow({
  name: 'Issue Tracker',
  trigger: {
    source: 'github',
    event: 'issue.created'
  },
  actions: [
    {
      type: 'slack.message',
      channel: 'dev',
      template: 'New issue created: {{issue.title}}'
    },
    {
      type: 'analytics.track',
      event: 'github_issue_created',
      properties: {
        issue_id: '{{issue.id}}',
        repository: '{{repository.name}}'
      }
    }
  ]
});

// Start the workflow
await workflow.start();

console.log('Workflow started successfully!');`}</code>
                    </pre>
                  </div>
                </div>

                {/* Explanation Side */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-white mb-4">Simple API, Powerful Results</h3>
                  <div className="space-y-4 text-gray-300">
                    <p>
                      Our intuitive API lets you connect your services and build powerful workflows in just a few lines of code. No complex setup required.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <div className="bg-indigo-500/10 text-indigo-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Connect all your services with a single platform</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-500/10 text-indigo-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Create automated workflows in minutes</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-500/10 text-indigo-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Track analytics across all your integrations</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-indigo-500/10 text-indigo-400 p-1 rounded-full mr-3 mt-0.5">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <p className="text-sm">Deploy to production with confidence</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <Button
                        className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
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
      <section className="py-16 px-4 md:px-6 bg-slate-950/50">
        <div className="w-full mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of teams who have transformed their workflow with our platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-indigo-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "Fusion has completely transformed how our team works. We've cut our development time in half and our collaboration has never been better."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">JD</div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Jane Doe</p>
                    <p className="text-gray-400 text-sm">CTO, TechStart Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-indigo-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The integrations are seamless and the analytics dashboard gives us insights we never had before. It's been a game-changer for our business."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">MS</div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Michael Smith</p>
                    <p className="text-gray-400 text-sm">Product Lead, DataFlow</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-indigo-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "The AI-powered automation has saved us countless hours on repetitive tasks. Our team can now focus on what really matters."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-white font-semibold">AW</div>
                  <div className="ml-3">
                    <p className="text-white font-medium">Alex Williams</p>
                    <p className="text-gray-400 text-sm">Engineering Manager, CloudSys</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-5"></div>

        <div className="w-full mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that's right for your team. All plans include core features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 relative overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Perfect for small teams and individuals just getting started.</p>
                <ul className="space-y-3 mb-6">
                  {['5 team members', '3 integrations', 'Basic analytics', '5GB storage', 'Community support'].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-indigo-900 hover:bg-gray-200" asChild>
                  <Link href="/signup?plan=starter">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-indigo-900/30 to-purple-900/30 backdrop-blur-sm border-indigo-400/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 h-1"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full">Popular</div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$79</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">Great for growing teams that need more power and flexibility.</p>
                <ul className="space-y-3 mb-6">
                  {['15 team members', 'Unlimited integrations', 'Advanced analytics', '50GB storage', 'Priority support', 'AI automation'].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white" asChild>
                  <Link href="/signup?plan=pro">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-indigo-900/20 backdrop-blur-sm border-white/5 relative overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">$199</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">For large teams that need advanced features and dedicated support.</p>
                <ul className="space-y-3 mb-6">
                  {['Unlimited team members', 'Unlimited integrations', 'Custom analytics', 'Unlimited storage', 'Dedicated support', 'Advanced security', 'Custom branding'].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-indigo-400 mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-white text-indigo-900 hover:bg-gray-200" asChild>
                  <Link href="/signup?plan=enterprise">Get Started</Link>
                </Button>
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
            <Card className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full filter blur-3xl"></div>
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
                        <Sparkles className="h-6 w-6 mr-2 text-indigo-400" />
                        Ready to transform your workflow?
                      </h2>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xl text-gray-300 mb-6 md:mb-0">
                        Get started today and see the difference our platform can make for your team.
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
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white group"
                      asChild
                    >
                      <Link href="/signup">
                        <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                        Start for Free
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 group"
                      asChild
                    >
                      <Link href="/contact">
                        <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Contact Sales
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
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md w-8 h-8 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Fusion</span>
              </div>
              <p className="text-gray-400 text-sm">
                The all-in-one platform for modern teams. Build, connect, and transform your workflow.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roadmap"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Roadmap
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
                  <Link
                    href="/guides"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/legal" className="text-gray-400 hover:text-white transition-colors text-sm">
                    Legal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Fusion Platform, Inc. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}