"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button-netfortress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card-netfortress"
import { Badge } from "@/components/ui/badge-netfortress"
import { Copy, Check, ChevronRight, Server, Database, Cloud, MessageSquare, Shield } from "lucide-react"

export default function IntegrationGuidePage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Integration Guide</h1>
            <p className="text-gray-300 md:text-lg max-w-3xl mx-auto">
              Learn how to integrate Net Fortress with your existing tools and services
            </p>
          </div>
        </motion.div>

        {/* Introduction */}
        <section className="mb-16">
          <Card variant="netfortress-gradient" className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Getting Started with Integrations</h2>
              <p className="text-gray-200 mb-4">
                Net Fortress is designed to work seamlessly with your existing security infrastructure and tools. This
                guide will help you integrate Net Fortress with popular services and platforms to enhance your security
                posture and streamline your workflows.
              </p>
              <p className="text-gray-200">
                All integrations use our secure API with OAuth 2.0 authentication. Make sure you have your API key ready
                before starting the integration process.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Server,
                title: "SIEM Systems",
                description: "Connect with Security Information and Event Management systems",
                count: 4,
              },
              {
                icon: Database,
                title: "Data Platforms",
                description: "Integrate with data storage and analytics platforms",
                count: 5,
              },
              {
                icon: Cloud,
                title: "Cloud Services",
                description: "Connect with major cloud service providers",
                count: 3,
              },
              {
                icon: MessageSquare,
                title: "Communication",
                description: "Integrate with messaging and notification services",
                count: 6,
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="bg-netfortress-500/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-netfortress-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300 mb-4 flex-grow">{category.description}</p>
                    <Badge variant="netfortress-subtle" className="self-start">
                      {category.count} Integrations
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Integration Tabs */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Popular Integrations</h2>

          <Tabs defaultValue="siem" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 bg-blue-950/50">
              <TabsTrigger value="siem">SIEM Systems</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Services</TabsTrigger>
              <TabsTrigger value="communication">Communication</TabsTrigger>
              <TabsTrigger value="data">Data Platforms</TabsTrigger>
            </TabsList>

            <TabsContent value="siem" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Splunk Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Splunk Integration</CardTitle>
                      <Badge variant="netfortress">Popular</Badge>
                    </div>
                    <CardDescription>Connect Net Fortress with Splunk for enhanced log analysis</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Splunk integration allows you to forward security events and alerts from Net Fortress to your
                      Splunk instance for centralized log management and analysis.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Configure the Splunk HTTP Event Collector (HEC)</li>
                        <li>Generate an HEC token in Splunk</li>
                        <li>Configure Net Fortress to send events to Splunk</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to send events to Splunk
{
  "integration": {
    "type": "splunk",
    "endpoint": "https://splunk.example.com:8088/services/collector",
    "token": "YOUR_SPLUNK_HEC_TOKEN",
    "index": "netfortress",
    "sourcetype": "netfortress:security"
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "splunk",
    "endpoint": "https://splunk.example.com:8088/services/collector",
    "token": "YOUR_SPLUNK_HEC_TOKEN",
    "index": "netfortress",
    "sourcetype": "netfortress:security"
  }
}`,
                            1,
                          )
                        }
                      >
                        {copiedIndex === 1 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/splunk">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* IBM QRadar Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <CardTitle className="text-white">IBM QRadar Integration</CardTitle>
                    <CardDescription>Send security events to IBM QRadar SIEM</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The IBM QRadar integration allows you to forward security events from Net Fortress to your QRadar
                      SIEM for comprehensive security monitoring and analysis.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Configure QRadar to accept syslog events</li>
                        <li>Set up a log source in QRadar</li>
                        <li>Configure Net Fortress to send events to QRadar</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to send events to QRadar
{
  "integration": {
    "type": "qradar",
    "protocol": "syslog",
    "host": "qradar.example.com",
    "port": 514,
    "format": "leef",
    "facility": "local5"
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "qradar",
    "protocol": "syslog",
    "host": "qradar.example.com",
    "port": 514,
    "format": "leef",
    "facility": "local5"
  }
}`,
                            2,
                          )
                        }
                      >
                        {copiedIndex === 2 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/qradar">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* AWS Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">AWS Integration</CardTitle>
                      <Badge variant="netfortress">Popular</Badge>
                    </div>
                    <CardDescription>Integrate Net Fortress with AWS security services</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The AWS integration allows Net Fortress to monitor your AWS environment, including EC2 instances,
                      VPCs, and security groups, for potential security threats.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Create an IAM role with appropriate permissions</li>
                        <li>Configure AWS CloudTrail for logging</li>
                        <li>Set up Net Fortress to connect to your AWS account</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to connect to AWS
{
  "integration": {
    "type": "aws",
    "auth_method": "role",
    "role_arn": "arn:aws:iam::123456789012:role/NetFortressMonitoring",
    "external_id": "your-external-id",
    "regions": ["us-east-1", "us-west-2"],
    "services": ["ec2", "vpc", "cloudtrail", "guardduty"]
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "aws",
    "auth_method": "role",
    "role_arn": "arn:aws:iam::123456789012:role/NetFortressMonitoring",
    "external_id": "your-external-id",
    "regions": ["us-east-1", "us-west-2"],
    "services": ["ec2", "vpc", "cloudtrail", "guardduty"]
  }
}`,
                            3,
                          )
                        }
                      >
                        {copiedIndex === 3 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/aws">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Azure Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <CardTitle className="text-white">Microsoft Azure Integration</CardTitle>
                    <CardDescription>Connect Net Fortress with Azure Security Center</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Azure integration allows Net Fortress to monitor your Azure resources and integrate with Azure
                      Security Center for comprehensive cloud security.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Create an Azure AD application and service principal</li>
                        <li>Assign appropriate permissions to the service principal</li>
                        <li>Configure Net Fortress to connect to your Azure subscription</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to connect to Azure
{
  "integration": {
    "type": "azure",
    "tenant_id": "your-tenant-id",
    "client_id": "your-client-id",
    "client_secret": "your-client-secret",
    "subscription_ids": ["subscription-id-1", "subscription-id-2"],
    "services": ["security-center", "network-watcher", "log-analytics"]
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "azure",
    "tenant_id": "your-tenant-id",
    "client_id": "your-client-id",
    "client_secret": "your-client-secret",
    "subscription_ids": ["subscription-id-1", "subscription-id-2"],
    "services": ["security-center", "network-watcher", "log-analytics"]
  }
}`,
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

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/azure">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="communication" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Slack Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Slack Integration</CardTitle>
                      <Badge variant="netfortress">Popular</Badge>
                    </div>
                    <CardDescription>Receive security alerts in your Slack channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Slack integration allows Net Fortress to send real-time security alerts and notifications to
                      your Slack channels, ensuring your team is immediately informed of potential threats.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Create a Slack app in your workspace</li>
                        <li>Configure incoming webhooks</li>
                        <li>Add the webhook URL to Net Fortress</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to send alerts to Slack
{
  "integration": {
    "type": "slack",
    "webhook_url": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
    "channel": "#security-alerts",
    "username": "Net Fortress",
    "icon_emoji": ":shield:",
    "alert_levels": ["critical", "high", "medium"]
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "slack",
    "webhook_url": "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
    "channel": "#security-alerts",
    "username": "Net Fortress",
    "icon_emoji": ":shield:",
    "alert_levels": ["critical", "high", "medium"]
  }
}`,
                            5,
                          )
                        }
                      >
                        {copiedIndex === 5 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/slack">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Microsoft Teams Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <CardTitle className="text-white">Microsoft Teams Integration</CardTitle>
                    <CardDescription>Send security alerts to Microsoft Teams channels</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Microsoft Teams integration allows Net Fortress to send security alerts and notifications to
                      your Teams channels, keeping your team informed of security events.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Create an incoming webhook in your Teams channel</li>
                        <li>Copy the webhook URL</li>
                        <li>Configure Net Fortress to use the Teams webhook</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to send alerts to Microsoft Teams
{
  "integration": {
    "type": "teams",
    "webhook_url": "https://outlook.office.com/webhook/...",
    "alert_levels": ["critical", "high"],
    "include_details": true,
    "group_alerts": true,
    "group_interval": 300
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "teams",
    "webhook_url": "https://outlook.office.com/webhook/...",
    "alert_levels": ["critical", "high"],
    "include_details": true,
    "group_alerts": true,
    "group_interval": 300
  }
}`,
                            6,
                          )
                        }
                      >
                        {copiedIndex === 6 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/teams">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Elasticsearch Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Elasticsearch Integration</CardTitle>
                      <Badge variant="netfortress">Popular</Badge>
                    </div>
                    <CardDescription>Store and analyze security data in Elasticsearch</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Elasticsearch integration allows Net Fortress to store security events and alerts in
                      Elasticsearch for advanced search, analysis, and visualization capabilities.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Set up Elasticsearch with appropriate indices</li>
                        <li>Configure authentication for Elasticsearch</li>
                        <li>Set up Net Fortress to send data to Elasticsearch</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to send data to Elasticsearch
{
  "integration": {
    "type": "elasticsearch",
    "hosts": ["https://elasticsearch.example.com:9200"],
    "auth": {
      "username": "netfortress",
      "password": "your-password"
    },
    "index_prefix": "netfortress-",
    "index_date_pattern": "YYYY.MM.DD",
    "bulk_size": 1000,
    "flush_interval": 5
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "elasticsearch",
    "hosts": ["https://elasticsearch.example.com:9200"],
    "auth": {
      "username": "netfortress",
      "password": "your-password"
    },
    "index_prefix": "netfortress-",
    "index_date_pattern": "YYYY.MM.DD",
    "bulk_size": 1000,
    "flush_interval": 5
  }
}`,
                            7,
                          )
                        }
                      >
                        {copiedIndex === 7 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/elasticsearch">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Prometheus Integration */}
                <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
                  <CardHeader>
                    <CardTitle className="text-white">Prometheus Integration</CardTitle>
                    <CardDescription>Export security metrics to Prometheus</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      The Prometheus integration allows Net Fortress to export security metrics to Prometheus for
                      monitoring, alerting, and visualization in tools like Grafana.
                    </p>

                    <div className="bg-blue-950/70 rounded-md p-4">
                      <h4 className="text-white font-medium mb-2">Configuration Steps:</h4>
                      <ol className="text-gray-300 space-y-2 ml-5 list-decimal">
                        <li>Configure Net Fortress to expose Prometheus metrics</li>
                        <li>Set up Prometheus to scrape metrics from Net Fortress</li>
                        <li>Create dashboards in Grafana to visualize the metrics</li>
                      </ol>
                    </div>

                    <div className="relative">
                      <div className="bg-blue-950 rounded-md p-4 overflow-x-auto text-sm">
                        <code className="text-gray-300">{`// Configure Net Fortress to expose Prometheus metrics
{
  "integration": {
    "type": "prometheus",
    "endpoint": "/metrics",
    "port": 9100,
    "metrics": [
      "threats_detected_total",
      "alerts_generated_total",
      "response_time_seconds",
      "quarantine_actions_total",
      "vulnerability_scan_duration_seconds"
    ],
    "labels": {
      "environment": "production",
      "component": "security"
    }
  }
}`}</code>
                      </div>
                      <button
                        className="absolute top-3 right-3 p-1 rounded-md bg-blue-800/50 hover:bg-blue-800 transition-colors"
                        onClick={() =>
                          copyToClipboard(
                            `{
  "integration": {
    "type": "prometheus",
    "endpoint": "/metrics",
    "port": 9100,
    "metrics": [
      "threats_detected_total",
      "alerts_generated_total",
      "response_time_seconds",
      "quarantine_actions_total",
      "vulnerability_scan_duration_seconds"
    ],
    "labels": {
      "environment": "production",
      "component": "security"
    }
  }
}`,
                            8,
                          )
                        }
                      >
                        {copiedIndex === 8 ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-gray-300" />
                        )}
                      </button>
                    </div>

                    <Button variant="netfortress" asChild>
                      <Link href="/docs/integrations/prometheus">
                        View Full Documentation
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* API Integration */}
        <section className="mb-16">
          <Card variant="netfortress-gradient" className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <Shield className="h-8 w-8 text-netfortress-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Custom API Integration</h2>
                  <p className="text-gray-200 mb-4">
                    Net Fortress provides a comprehensive REST API that allows you to build custom integrations with
                    your existing tools and services. The API supports all the functionality available in the web
                    interface, including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-200 space-y-2 mb-4">
                    <li>Retrieving security events and alerts</li>
                    <li>Managing devices and network segments</li>
                    <li>Configuring security policies and rules</li>
                    <li>Triggering automated responses</li>
                    <li>Generating reports and analytics</li>
                  </ul>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                    <Link href="/docs/api">
                      View API Documentation
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Integration Best Practices */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Integration Best Practices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Security Considerations</h3>
                <ul className="space-y-3">
                  {[
                    "Use API keys with the principle of least privilege",
                    "Rotate integration credentials regularly",
                    "Use secure communication channels (HTTPS, TLS)",
                    "Implement IP whitelisting where possible",
                    "Monitor and audit integration activity",
                    "Store credentials securely using environment variables or a secrets manager",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-netfortress-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/30 backdrop-blur-sm border-white/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Performance Optimization</h3>
                <ul className="space-y-3">
                  {[
                    "Implement rate limiting in your integration code",
                    "Use bulk operations where available",
                    "Filter data at the source to reduce network traffic",
                    "Implement caching for frequently accessed data",
                    "Use asynchronous processing for non-critical operations",
                    "Monitor integration performance and optimize as needed",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-netfortress-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <details>
                    <summary className="text-white cursor-pointer">Example Rate Limiting Implementation</summary>
                    <div className="mt-2 p-4 bg-blue-950/70 rounded-md overflow-x-auto text-sm">
                      <code className="text-gray-300">
                        {`// Example rate limiting implementation
const rateLimiter = {
  maxRequests: 10,
  timeWindow: 60000, // 1 minute in ms
  requestCount: 0,
  resetTime: Date.now() + 60000,

  async makeRequest(apiCall) {
    if (Date.now() >this.resetTime) {
      this.requestCount = 0;
      this.resetTime = Date.now() + this.timeWindow;
    }

    if (this.requestCount >= this.maxRequests) {
      const waitTime = this.resetTime - Date.now();
      console.log(\`Rate limit reached. Waiting \${waitTime}ms\`);
      await new Promise(resolve => setTimeout(resolve, waitTime));
      return this.makeRequest(apiCall);
    }

    this.requestCount++;
    return apiCall();
  }
};`}
                      </code>
                    </div>
                  </details>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-8">
          <Card className="bg-gradient-to-br from-blue-900/50 to-indigo-900/50 backdrop-blur-sm border-white/5">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Ready to integrate?</h3>
                  <p className="text-gray-300">
                    Start integrating Net Fortress with your existing tools and services today.
                  </p>
                </div>
                <Button variant="netfortress-gradient" size="lg" asChild>
                  <Link href="/docs/api">
                    Get API Key
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

