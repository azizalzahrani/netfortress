"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Lock, Clock, FenceIcon as Barrier, Shield, BarChart3 } from "lucide-react"

const features = [
  {
    icon: AlertTriangle,
    title: "Real-time Detection Dashboard",
    description: "Advanced ML for anomaly detection within milliseconds.",
    color: "blue",
    gradient: "from-blue-400 to-indigo-500",
  },
  {
    icon: Lock,
    title: "Automated Quarantine & Isolation",
    description: "Rapid response for critical infrastructure protection.",
    color: "emerald",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: Clock,
    title: "Patch Management & Deployment",
    description: "50% reduction in deployment time for efficiency.",
    color: "cyan",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Barrier,
    title: "Adaptive Access Control",
    description: "Dynamic security adjustments for enhanced protection.",
    color: "violet",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    icon: Shield,
    title: "Incident Simulation & Training",
    description: "Prepare for real-world threats with advanced simulations.",
    color: "emerald",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    icon: BarChart3,
    title: "AI-Driven Forensics Analysis",
    description: "Comprehensive insights into network vulnerabilities.",
    color: "blue",
    gradient: "from-blue-400 to-indigo-500",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-emerald-500 rounded-full filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-4">Main Features</h2>
          <p className="mx-auto text-gray-300 md:text-xl leading-relaxed">
            Discover how Net Fortress protects your network with advanced AI-powered security
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full max-w-6xl">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/80 to-indigo-900/80 p-6 shadow-xl transition-all duration-300 hover:shadow-cyan-500/10 backdrop-blur-sm border border-white/5">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
                <div
                  className={`mb-5 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3 text-white shadow-lg`}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

