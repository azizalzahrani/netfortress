"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Server, Menu, X, Download, Github, CheckCircle2 } from "lucide-react"

export default function InstallPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              />
              <span className="text-xl font-bold text-white">Net Fortress</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-gray-300 hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="/install" className="text-white font-medium">
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
              <Link href="#download-section">
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
              <Link
                href="/docs"
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link href="/install" className="text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
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
                <Link href="#download-section">
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
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/netfortress-logo-new.png"
              alt="Net Fortress Logo"
              width={120}
              height={120}
              className="mb-6"
              priority
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Install Net Fortress</h1>
            <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
              Follow our step-by-step guide to install Net Fortress on your preferred platform
            </p>
          </div>
        </motion.div>

        {/* Download Section */}
        <section id="download-section" className="mb-16">
          <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
            <CardHeader>
              <CardTitle className="text-2xl">Download Net Fortress</CardTitle>
              <CardDescription>Choose your platform to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-blue-950/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-5 w-5 text-orange-400 mr-2" />
                      Windows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">Compatible with Windows 10 and Windows 11</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">64-bit installer (recommended)</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">Automatic updates</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download for Windows
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-blue-950/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-5 w-5 text-orange-400 mr-2" />
                      Linux
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">Compatible with Ubuntu, Debian, CentOS, and more</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">APT and YUM repositories</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">Systemd service integration</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download for Linux
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-blue-950/50 border-white/5">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="h-5 w-5 text-orange-400 mr-2" />
                      macOS
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300 mb-4">Compatible with macOS 11 (Big Sur) and newer</p>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">Universal binary (Intel & Apple Silicon)</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                        <span className="text-sm text-gray-300">Notarized by Apple</span>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                      <Download className="mr-2 h-4 w-4" />
                      Download for macOS
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Installation Instructions */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Server className="h-6 w-6 text-orange-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Installation Instructions</h2>
          </div>
          <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
            <CardContent className="p-6">
              <Tabs defaultValue="windows" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 bg-blue-950/50">
                  <TabsTrigger value="windows">Windows</TabsTrigger>
                  <TabsTrigger value="linux">Linux</TabsTrigger>
                  <TabsTrigger value="macos">macOS</TabsTrigger>
                </TabsList>
                <TabsContent value="windows" className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Windows Installation</h3>
                  <ol className="space-y-6">
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Download the installer</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Download the latest version of Net Fortress for Windows from our website.
                          </p>
                          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Download for Windows
                          </Button>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Run the installer</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Double-click the downloaded file to start the installation process. You may need to confirm
                            the User Account Control (UAC) prompt.
                          </p>
                          <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                            <code className="text-gray-300">netfortress-setup.exe</code>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Follow the setup wizard</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            The installation wizard will guide you through the setup process. Accept the license
                            agreement and choose your installation options.
                          </p>
                          <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                            <code className="text-gray-300">
                              # Default installation directory
                              <br />
                              C:\Program Files\Net Fortress
                            </code>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Configure network settings</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            After installation, the configuration wizard will open. Enter your API key and configure
                            your network settings.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">netfortress --config</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Start the service</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Net Fortress will start automatically after installation. You can verify the service is
                            running in the Windows Services console.
                          </p>
                          <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                            <code className="text-gray-300">services.msc</code>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </TabsContent>
                <TabsContent value="linux" className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Linux Installation</h3>
                  <ol className="space-y-6">
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Add the repository</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Add the Net Fortress repository to your package manager.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">
                                curl -fsSL https://repo.netfortress.io/gpg | sudo gpg --dearmor -o
                                /usr/share/keyrings/netfortress-archive-keyring.gpg
                              </code>
                            </pre>
                          </div>
                          <div className="relative mt-2">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">
                                echo "deb [signed-by=/usr/share/keyrings/netfortress-archive-keyring.gpg]
                                https://repo.netfortress.io/apt stable main" | sudo tee
                                /etc/apt/sources.list.d/netfortress.list
                              </code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Update package lists</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Update your package lists to include the Net Fortress repository.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo apt update</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Install Net Fortress</h4>
                          <p className="text-sm text-gray-300 mb-3">Install the Net Fortress package.</p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo apt install netfortress</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Configure Net Fortress</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Edit the configuration file to set your API key and network settings.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo nano /etc/netfortress/config.yaml</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Start the service</h4>
                          <p className="text-sm text-gray-300 mb-3">Start and enable the Net Fortress service.</p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">sudo systemctl enable --now netfortress</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </TabsContent>
                <TabsContent value="macos" className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">macOS Installation</h3>
                  <ol className="space-y-6">
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Download the package</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Download the latest version of Net Fortress for macOS from our website.
                          </p>
                          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white">
                            <Download className="mr-2 h-4 w-4" />
                            Download for macOS
                          </Button>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Open the package</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Double-click the downloaded .pkg file to start the installation process.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">open NetFortress.pkg</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Follow the installation wizard</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            The installation wizard will guide you through the setup process. You may need to enter your
                            administrator password.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          4
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Grant permissions</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Net Fortress requires certain permissions to monitor your network. You'll need to approve
                            these in System Preferences.
                          </p>
                          <div className="relative">
                            <pre className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                              <code className="text-gray-300">open /Applications/Net\ Fortress.app</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="bg-blue-950/50 rounded-lg p-5">
                      <div className="flex items-start">
                        <div className="bg-orange-500/20 text-orange-400 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                          5
                        </div>
                        <div>
                          <h4 className="font-medium text-white mb-2">Configure Net Fortress</h4>
                          <p className="text-sm text-gray-300 mb-3">
                            Open the Net Fortress application and enter your API key and network settings.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ol>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </section>

        {/* System Requirements */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <Server className="h-6 w-6 text-orange-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">System Requirements</h2>
          </div>
          <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Server className="h-5 w-5 text-orange-400 mr-2" />
                    Windows
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Windows 10 or Windows 11</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">4GB RAM minimum (8GB recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">2GB free disk space</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Intel or AMD 64-bit processor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Administrator privileges for installation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Server className="h-5 w-5 text-orange-400 mr-2" />
                    Linux
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Ubuntu 20.04+, Debian 11+, CentOS 8+, or RHEL 8+</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">4GB RAM minimum (8GB recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">2GB free disk space</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">x86_64 architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Root privileges for installation</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Server className="h-5 w-5 text-orange-400 mr-2" />
                    macOS
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">macOS 11 (Big Sur) or newer</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">4GB RAM minimum (8GB recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">2GB free disk space</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Intel or Apple Silicon processor</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-orange-400 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-300">Administrator privileges for installation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-orange-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-2">How do I get an API key?</h3>
                  <p className="text-gray-300">
                    You can get an API key by signing up for a Net Fortress account on our website. After signing up,
                    you'll be able to generate an API key from your account dashboard.
                  </p>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Is Net Fortress free to use?</h3>
                  <p className="text-gray-300">
                    Net Fortress offers a free tier with limited features for personal use. For business and enterprise
                    use, we offer paid plans with additional features and support.
                  </p>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    How does Net Fortress impact network performance?
                  </h3>
                  <p className="text-gray-300">
                    Net Fortress is designed to have minimal impact on network performance. The agent uses efficient
                    algorithms and adaptive monitoring to ensure it doesn't slow down your network.
                  </p>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-2">Can I install Net Fortress on multiple devices?</h3>
                  <p className="text-gray-300">
                    Yes, you can install Net Fortress on multiple devices. The number of devices you can monitor depends
                    on your subscription plan.
                  </p>
                </div>
                <div className="bg-blue-950/50 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-white mb-2">How do I update Net Fortress?</h3>
                  <p className="text-gray-300">
                    Net Fortress automatically checks for updates and installs them when available. You can also
                    manually check for updates from the application settings.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="mb-8">
          <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border-white/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
                  <p className="text-gray-300">
                    Download Net Fortress now and start protecting your network with AI-powered security.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                  asChild
                >
                  <Link href="#download-section">
                    <Download className="mr-2 h-4 w-4" />
                    Download Now
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
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

