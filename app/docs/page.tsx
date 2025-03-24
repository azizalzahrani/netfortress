"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Code,
  Server,
  Shield,
  Terminal,
  Zap,
  Database,
  Network,
  Lock,
  Copy,
  Check,
  Menu,
  X,
  Download,
  Github,
} from "lucide-react"

export default function DocsPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
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
              />
              <span className="text-xl font-bold text-white">Net Fortress</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-white font-medium">
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
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link href="/docs" className="text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
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

      <div className="w-full py-12 px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Net Fortress Documentation</h1>
          <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
            Comprehensive guides and code examples to help you implement and use Net Fortress effectively
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl border border-white/5 p-4 sticky top-20">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5 text-orange-400" />
                Documentation
              </h3>
              <nav className="space-y-1">
                {[
                  { name: "Getting Started", href: "#getting-started", icon: Zap },
                  { name: "Installation", href: "#installation", icon: Server },
                  { name: "API Reference", href: "#api-reference", icon: Code },
                  { name: "Security Features", href: "#security-features", icon: Shield },
                  { name: "Configuration", href: "#configuration", icon: Terminal },
                  { name: "Examples", href: "#examples", icon: BookOpen },
                  { name: "Best Practices", href: "#best-practices", icon: Shield },
                  { name: "Troubleshooting", href: "#troubleshooting", icon: Terminal },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-white hover:bg-white/5 rounded-lg px-3 py-2 transition-colors"
                  >
                    <item.icon className="mr-2 h-4 w-4 text-orange-400" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Documentation Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Getting Started */}
            <section id="getting-started" className="mb-16">
              <div className="flex items-center mb-6">
                <Zap className="h-6 w-6 text-orange-400 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Getting Started</h2>
              </div>
              <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle>What is Net Fortress?</CardTitle>
                  <CardDescription>An overview of Net Fortress and its capabilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-300">
                  <p>
                    Net Fortress is an AI-powered security solution designed to protect local networks from advanced
                    threats. It uses machine learning algorithms to detect anomalies, predict potential security
                    breaches, and automatically respond to incidents.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-blue-950/50 rounded-lg p-4 flex items-start">
                      <div className="mr-4 mt-1">
                        <Shield className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Real-time Protection</h4>
                        <p className="text-sm text-gray-300">Continuous monitoring and instant threat detection</p>
                      </div>
                    </div>
                    <div className="bg-blue-950/50 rounded-lg p-4 flex items-start">
                      <div className="mr-4 mt-1">
                        <Database className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Data Analysis</h4>
                        <p className="text-sm text-gray-300">Process up to 1TB of network data daily</p>
                      </div>
                    </div>
                    <div className="bg-blue-950/50 rounded-lg p-4 flex items-start">
                      <div className="mr-4 mt-1">
                        <Network className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Network Mapping</h4>
                        <p className="text-sm text-gray-300">Visualize your entire network topology</p>
                      </div>
                    </div>
                    <div className="bg-blue-950/50 rounded-lg p-4 flex items-start">
                      <div className="mr-4 mt-1">
                        <Lock className="h-5 w-5 text-orange-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white mb-1">Automated Response</h4>
                        <p className="text-sm text-gray-300">Isolate threats and deploy patches automatically</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Installation */}
            <section id="installation" className="mb-16">
              <div className="flex items-center mb-6">
                <Server className="h-6 w-6 text-orange-400 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Installation</h2>
              </div>
              <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle>Installation Guide</CardTitle>
                  <CardDescription>Step-by-step instructions for installing Net Fortress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-300">
                  <Tabs defaultValue="windows" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-6 bg-blue-950/50">
                      <TabsTrigger value="windows">Windows</TabsTrigger>
                      <TabsTrigger value="linux">Linux</TabsTrigger>
                      <TabsTrigger value="macos">macOS</TabsTrigger>
                    </TabsList>
                    <TabsContent value="windows" className="space-y-4">
                      <p>Follow these steps to install Net Fortress on Windows:</p>
                      <ol className="space-y-4 mt-4">
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">1. Download the installer</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">https://netfortress.io/download/windows</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("https://netfortress.io/download/windows", 1)}
                            >
                              {copiedIndex === 1 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">2. Run the installer</h4>
                          <p className="text-sm mb-2">Execute the downloaded file and follow the setup wizard</p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">netfortress-setup.exe</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("netfortress-setup.exe", 2)}
                            >
                              {copiedIndex === 2 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">3. Configure network settings</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">netfortress --config</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("netfortress --config", 3)}
                            >
                              {copiedIndex === 3 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                      </ol>
                      <div className="mt-6">
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                          asChild
                        >
                          <Link href="/install">
                            <Download className="mr-2 h-4 w-4" />
                            View Detailed Installation Guide
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="linux" className="space-y-4">
                      <p>Follow these steps to install Net Fortress on Linux:</p>
                      <ol className="space-y-4 mt-4">
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">1. Add the repository</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">
                                curl -fsSL https://repo.netfortress.io/gpg | sudo gpg --dearmor -o
                                /usr/share/keyrings/netfortress-archive-keyring.gpg
                              </code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() =>
                                copyToClipboard(
                                  "curl -fsSL https://repo.netfortress.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/netfortress-archive-keyring.gpg",
                                  4,
                                )
                              }
                            >
                              {copiedIndex === 4 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">2. Install the package</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo apt update && sudo apt install netfortress</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("sudo apt update && sudo apt install netfortress", 5)}
                            >
                              {copiedIndex === 5 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">3. Start the service</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo systemctl enable --now netfortress</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("sudo systemctl enable --now netfortress", 6)}
                            >
                              {copiedIndex === 6 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                      </ol>
                      <div className="mt-6">
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                          asChild
                        >
                          <Link href="/install">
                            <Download className="mr-2 h-4 w-4" />
                            View Detailed Installation Guide
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="macos" className="space-y-4">
                      <p>Follow these steps to install Net Fortress on macOS:</p>
                      <ol className="space-y-4 mt-4">
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">1. Download the package</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">https://netfortress.io/download/macos</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("https://netfortress.io/download/macos", 7)}
                            >
                              {copiedIndex === 7 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">2. Install the package</h4>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">open NetFortress.pkg</code>
                            </pre>
                            <button
                              className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                              onClick={() => copyToClipboard("open NetFortress.pkg", 8)}
                            >
                              {copiedIndex === 8 ? (
                                <Check className="h-4 w-4 text-emerald-400" />
                              ) : (
                                <Copy className="h-4 w-4 text-gray-300" />
                              )}
                            </button>
                          </div>
                        </li>
                        <li className="bg-blue-950/50 rounded-lg p-4">
                          <h4 className="font-medium text-white mb-2">3. Grant permissions</h4>
                          <p className="text-sm">Allow Net Fortress to monitor network traffic in System Preferences</p>
                        </li>
                      </ol>
                      <div className="mt-6">
                        <Button
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                          asChild
                        >
                          <Link href="/install">
                            <Download className="mr-2 h-4 w-4" />
                            View Detailed Installation Guide
                          </Link>
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            {/* Code Section */}
            <section id="code-examples" className="mb-16">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-orange-400 mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-white">Real Code Examples</h2>
              </div>
              <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                <CardHeader>
                  <CardTitle>Explore Our Source Code</CardTitle>
                  <CardDescription>Dive into real implementation examples from Net Fortress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 text-gray-300">
                  <p>
                    Net Fortress is built with transparency in mind. Explore our actual implementation code to
                    understand how our security features work under the hood.
                  </p>

                  <div className="bg-blue-950/50 rounded-lg p-5">
                    <h4 className="font-medium text-white mb-3 flex items-center">
                      <Shield className="h-5 w-5 text-orange-400 mr-2" />
                      Threat Detection Algorithm
                    </h4>
                    <div className="relative">
                      <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Core threat detection algorithm
export class ThreatDetector {
  private readonly anomalyThreshold: number;
  private readonly baselineData: Map<string, NetworkBaseline>;
  private readonly mlModel: MachineLearningModel;
  
  constructor(config: ThreatDetectorConfig) {
    this.anomalyThreshold = config.anomalyThreshold || 0.85;
    this.baselineData = new Map();
    this.mlModel = new MachineLearningModel(config.modelPath);
  }
  
  public async detectThreats(networkTraffic: NetworkPacket[]): Promise<Threat[]> {
    const threats: Threat[] = [];
    
    // Group packets by source
    const packetsBySource = this.groupPacketsBySource(networkTraffic);
    
    // Analyze each source
    for (const [source, packets] of packetsBySource.entries()) {
      // Get or create baseline for this source
      const baseline = this.getOrCreateBaseline(source);
      
      // Extract features from packets
      const features = this.extractFeatures(packets);
      
      // Calculate anomaly score using ML model
      const anomalyScore = await this.mlModel.calculateAnomalyScore(features);
      
      // Update baseline with new data
      baseline.update(features);
      
      // Check if anomaly score exceeds threshold
      if (anomalyScore > this.anomalyThreshold) {
        const threat = this.createThreat(source, packets, anomalyScore);
        threats.push(threat);
      }
    }
    
    return threats;
  }
  
  private groupPacketsBySource(packets: NetworkPacket[]): Map<string, NetworkPacket[]> {
    const result = new Map<string, NetworkPacket[]>();
    
    for (const packet of packets) {
      const source = packet.sourceIp;
      if (!result.has(source)) {
        result.set(source, []);
      }
      result.get(source)!.push(packet);
    }
    
    return result;
  }
  
  private getOrCreateBaseline(source: string): NetworkBaseline {
    if (!this.baselineData.has(source)) {
      this.baselineData.set(source, new NetworkBaseline(source));
    }
    return this.baselineData.get(source)!;
  }
  
  private extractFeatures(packets: NetworkPacket[]): FeatureVector {
    // Implementation of feature extraction from network packets
    // ...
  }
  
  private createThreat(source: string, packets: NetworkPacket[], anomalyScore: number): Threat {
    // Determine threat type and severity based on packets and anomaly score
    // ...
  }
}`}</code>
                      </pre>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `// Core threat detection algorithm
export class ThreatDetector {
  private readonly anomalyThreshold: number;
  private readonly baselineData: Map<string, NetworkBaseline>;
  private readonly mlModel: MachineLearningModel;
  
  constructor(config: ThreatDetectorConfig) {
    this.anomalyThreshold = config.anomalyThreshold || 0.85;
    this.baselineData = new Map();
    this.mlModel = new MachineLearningModel(config.modelPath);
  }
  
  public async detectThreats(networkTraffic: NetworkPacket[]): Promise<Threat[]> {
    const threats: Threat[] = [];
    
    // Group packets by source
    const packetsBySource = this.groupPacketsBySource(networkTraffic);
    
    // Analyze each source
    for (const [source, packets] of packetsBySource.entries()) {
      // Get or create baseline for this source
      const baseline = this.getOrCreateBaseline(source);
      
      // Extract features from packets
      const features = this.extractFeatures(packets);
      
      // Calculate anomaly score using ML model
      const anomalyScore = await this.mlModel.calculateAnomalyScore(features);
      
      // Update baseline with new data
      baseline.update(features);
      
      // Check if anomaly score exceeds threshold
      if (anomalyScore > this.anomalyThreshold) {
        const threat = this.createThreat(source, packets, anomalyScore);
        threats.push(threat);
      }
    }
    
    return threats;
  }
  
  private groupPacketsBySource(packets: NetworkPacket[]): Map<string, NetworkPacket[]> {
    const result = new Map<string, NetworkPacket[]>();
    
    for (const packet of packets) {
      const source = packet.sourceIp;
      if (!result.has(source)) {
        result.set(source, []);
      }
      result.get(source)!.push(packet);
    }
    
    return result;
  }
  
  private getOrCreateBaseline(source: string): NetworkBaseline {
    if (!this.baselineData.has(source)) {
      this.baselineData.set(source, new NetworkBaseline(source));
    }
    return this.baselineData.get(source)!;
  }
  
  private extractFeatures(packets: NetworkPacket[]): FeatureVector {
    // Implementation of feature extraction from network packets
    // ...
  }
  
  private createThreat(source: string, packets: NetworkPacket[], anomalyScore: number): Threat {
    // Determine threat type and severity based on packets and anomaly score
    // ...
  }
}`,
                            20,
                          )
                        }
                      >
                        {copiedIndex === 20 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                      asChild
                    >
                      <Link href="https://github.com/netfortress/netfortress">
                        <Github className="mr-2 h-4 w-4" />
                        View Full Source Code on GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Rest of the content sections would continue here... */}

            {/* Next Steps */}
            <section className="mb-8">
              <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border-white/5">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
                      <p className="text-gray-300">
                        Install Net Fortress today and start protecting your network with AI-powered security.
                      </p>
                    </div>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                      asChild
                    >
                      <Link href="/install">
                        <Download className="mr-2 h-4 w-4" />
                        Download Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </motion.div>
        </div>
      </div>

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

