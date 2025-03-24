"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button-netfortress"
import { Card, CardContent } from "@/components/ui/card-netfortress"
import { Badge } from "@/components/ui/badge-netfortress"
import { Input } from "@/components/ui/input"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    "general",
    "installation",
    "configuration",
    "troubleshooting",
    "api",
  ])

  const toggleCategory = (category: string) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category))
    } else {
      setExpandedCategories([...expandedCategories, category])
    }
  }

  const faqCategories = [
    {
      id: "general",
      title: "General Questions",
      questions: [
        {
          question: "What is Net Fortress?",
          answer:
            "Net Fortress is an AI-powered security solution designed to protect local networks from advanced threats. It uses machine learning algorithms to detect anomalies, predict potential security breaches, and automatically respond to incidents in real-time.",
        },
        {
          question: "How does Net Fortress use AI?",
          answer:
            "Net Fortress uses artificial intelligence in several ways: 1) Anomaly detection to identify unusual network behavior, 2) Pattern recognition to detect known attack signatures, 3) Predictive analysis to forecast potential threats based on historical data, and 4) Automated response to contain threats without human intervention.",
        },
        {
          question: "What types of threats can Net Fortress detect?",
          answer:
            "Net Fortress can detect a wide range of threats, including but not limited to: malware infections, ransomware attacks, data exfiltration attempts, network intrusions, suspicious user behavior, unauthorized access attempts, and zero-day exploits.",
        },
        {
          question: "Is Net Fortress suitable for small businesses?",
          answer:
            "Yes, Net Fortress is designed to scale to organizations of all sizes. We offer different tiers of service to accommodate the needs and budgets of small businesses, while still providing enterprise-grade security features.",
        },
        {
          question: "How does Net Fortress compare to traditional firewall solutions?",
          answer:
            "While traditional firewalls primarily focus on filtering traffic based on predefined rules, Net Fortress goes beyond this by using AI to detect anomalies, predict threats, and automatically respond to incidents. It complements existing firewall solutions by adding an intelligent layer of security that can adapt to evolving threats.",
        },
      ],
    },
    {
      id: "installation",
      title: "Installation & Setup",
      questions: [
        {
          question: "What are the system requirements for Net Fortress?",
          answer:
            "Net Fortress requires a dedicated server or virtual machine with at least 4 CPU cores, 8GB RAM, and 100GB of storage. It supports Windows Server 2016+, Ubuntu 18.04+, CentOS 7+, and RHEL 7+. For monitoring large networks, we recommend scaling up these specifications accordingly.",
        },
        {
          question: "How long does it take to install Net Fortress?",
          answer:
            "A basic installation of Net Fortress typically takes 30-60 minutes, depending on your environment. However, full deployment including agent installation across all network nodes and initial configuration may take several hours to a few days for large environments.",
        },
        {
          question: "Do I need to install agents on all devices?",
          answer:
            "For optimal security coverage, we recommend installing Net Fortress agents on all critical systems and network devices. However, Net Fortress can also operate in an agentless mode for certain devices, though with reduced capabilities.",
        },
        {
          question: "Can Net Fortress be deployed in a cloud environment?",
          answer:
            "Yes, Net Fortress can be deployed in cloud environments including AWS, Azure, and Google Cloud. We provide specific deployment guides for each major cloud provider to ensure optimal configuration.",
        },
        {
          question: "Is there a trial version available?",
          answer:
            "Yes, we offer a 30-day free trial of Net Fortress with full functionality. This allows you to evaluate the solution in your environment before making a purchase decision. Contact our sales team to arrange a trial.",
        },
      ],
    },
    {
      id: "configuration",
      title: "Configuration & Management",
      questions: [
        {
          question: "How do I configure alert thresholds?",
          answer:
            "Alert thresholds can be configured in the Net Fortress management console under Settings > Alerts. You can set different thresholds for various types of security events and customize notification settings for each threshold level.",
        },
        {
          question: "Can I customize the automated response actions?",
          answer:
            "Yes, Net Fortress allows you to customize automated response actions based on threat severity, type, and source. You can define response policies in the management console under Settings > Response Policies.",
        },
        {
          question: "How often should I update Net Fortress?",
          answer:
            "We recommend keeping Net Fortress updated to the latest version at all times. The system can be configured to automatically download and install updates, or you can manage updates manually. Critical security updates should be applied as soon as they are available.",
        },
        {
          question: "Can I integrate Net Fortress with my existing security tools?",
          answer:
            "Yes, Net Fortress provides integration capabilities with many popular security tools and platforms, including SIEM systems, ticketing systems, and communication platforms. See our Integration Guide for detailed information.",
        },
        {
          question: "How do I back up the Net Fortress configuration?",
          answer:
            "Net Fortress includes built-in backup functionality that can be scheduled to run automatically. Navigate to Settings > Backup & Restore in the management console to configure backup settings. We recommend storing backups in a secure, off-site location.",
        },
      ],
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting & Support",
      questions: [
        {
          question: "What should I do if Net Fortress is not detecting threats?",
          answer:
            "If Net Fortress is not detecting threats, check the following: 1) Verify that agents are properly installed and communicating with the management server, 2) Check that monitoring is enabled for the relevant network segments, 3) Review detection sensitivity settings, 4) Ensure that the system is receiving network traffic data. If issues persist, run the built-in diagnostic tool or contact support.",
        },
        {
          question: "How can I reduce false positives?",
          answer:
            "To reduce false positives, you can: 1) Adjust detection sensitivity settings, 2) Create exclusion rules for known benign activities, 3) Train the AI by marking false positives in the alert system, 4) Update to the latest version which may include improved detection algorithms, 5) Configure baseline periods during normal operation to help the system learn normal behavior patterns.",
        },
        {
          question: "What logs should I check for troubleshooting?",
          answer:
            "For troubleshooting, check the following logs: 1) System logs located at /var/log/netfortress/system.log (Linux) or C:\\ProgramData\\NetFortress\\Logs\\system.log (Windows), 2) Agent logs on individual endpoints, 3) Detection engine logs, 4) API logs if using the API. The management console also provides a centralized log viewer under Diagnostics > Logs.",
        },
        {
          question: "How do I contact technical support?",
          answer:
            "Technical support can be reached through multiple channels: 1) Email: support@netfortress.io, 2) Phone: +1-800-NET-FORT, 3) In-app support ticket system, 4) Live chat on our website during business hours. Premium support plans include 24/7 phone support and dedicated technical account managers.",
        },
        {
          question: "Is there a knowledge base or community forum?",
          answer:
            "Yes, we maintain a comprehensive knowledge base at kb.netfortress.io with articles, guides, and troubleshooting information. We also have a community forum at community.netfortress.io where users can share experiences, ask questions, and get help from other Net Fortress users and our support team.",
        },
      ],
    },
    {
      id: "api",
      title: "API & Integrations",
      questions: [
        {
          question: "How do I get an API key?",
          answer:
            "You can generate an API key in the Net Fortress management console under Settings > API. You'll need administrator privileges to generate API keys. We recommend creating separate API keys for different integrations or purposes to maintain better security control.",
        },
        {
          question: "What can I do with the Net Fortress API?",
          answer:
            "The Net Fortress API allows you to: 1) Retrieve security events and alerts, 2) Manage devices and network segments, 3) Configure security policies and rules, 4) Trigger automated responses, 5) Generate reports and analytics, 6) Integrate with other security tools and platforms.",
        },
        {
          question: "Are there rate limits on the API?",
          answer:
            "Yes, the Net Fortress API has rate limits to ensure system stability. The default limit is 100 requests per minute per API key. Enterprise customers can request increased limits if needed. The API returns standard HTTP 429 responses when rate limits are exceeded.",
        },
        {
          question: "Do you provide client libraries for the API?",
          answer:
            "Yes, we provide official client libraries for several programming languages including Python, JavaScript/Node.js, Java, and Go. These libraries are available on our GitHub repository at github.com/netfortress. Community-maintained libraries are also available for other languages.",
        },
        {
          question: "Can I use webhooks for real-time notifications?",
          answer:
            "Yes, Net Fortress supports webhooks for real-time notifications of security events and alerts. You can configure webhooks in the management console under Settings > Integrations > Webhooks. You can specify which events trigger webhooks and customize the payload format.",
        },
      ],
    },
  ]

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    }))
    .filter((category) => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-950 to-slate-950">
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/netfortress-logo.png"
              alt="Net Fortress Logo"
              width={120}
              height={120}
              className="mb-6"
              priority
            />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
              Find answers to common questions about Net Fortress
            </p>
          </div>
        </motion.div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-blue-900/30 border-white/10 text-white placeholder:text-gray-400 focus:border-netfortress-500"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto space-y-6">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5 overflow-hidden">
                  <div
                    className="p-6 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center">
                      <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                      <Badge variant="netfortress-subtle" className="ml-3">
                        {category.questions.length} {category.questions.length === 1 ? "Question" : "Questions"}
                      </Badge>
                    </div>
                    <button className="text-gray-300 hover:text-white">
                      {expandedCategories.includes(category.id) ? (
                        <ChevronDown className="h-6 w-6" />
                      ) : (
                        <ChevronRight className="h-6 w-6" />
                      )}
                    </button>
                  </div>

                  {expandedCategories.includes(category.id) && (
                    <CardContent className="border-t border-white/5 pt-6">
                      <div className="space-y-6">
                        {category.questions.map((faq, index) => (
                          <div key={index} className="space-y-2">
                            <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                            <p className="text-gray-300">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg mb-4">No results found for "{searchQuery}"</p>
              <Button variant="netfortress" onClick={() => setSearchQuery("")}>
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="max-w-4xl mx-auto mt-16">
          <Card variant="netfortress-gradient">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Couldn't find what you're looking for?</h2>
                <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                  Our support team is here to help. Contact us for personalized assistance with any questions or issues
                  you may have.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/docs">Browse Documentation</Link>
                  </Button>
                  <Button className="bg-white text-netfortress-600 hover:bg-gray-100" asChild>
                    <Link href="/contact">
                      Contact Support
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

