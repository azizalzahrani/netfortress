import type React from "react"
import Link from "next/link"
import { BookOpen, Code, Server, Shield, Terminal, Zap, AlertTriangle, HelpCircle, Link2 } from "lucide-react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { name: "Documentation Home", href: "/docs", icon: BookOpen },
    { name: "Getting Started", href: "/docs#getting-started", icon: Zap },
    { name: "Installation", href: "/docs#installation", icon: Server },
    { name: "API Reference", href: "/docs#api-reference", icon: Code },
    { name: "Security Features", href: "/docs#security-features", icon: Shield },
    { name: "Configuration", href: "/docs#configuration", icon: Terminal },
    { name: "Examples", href: "/docs#examples", icon: BookOpen },
    { name: "Best Practices", href: "/docs#best-practices", icon: Shield },
    { name: "Troubleshooting", href: "/docs#troubleshooting", icon: AlertTriangle },
    { name: "Integration Guide", href: "/docs/integration-guide", icon: Link2 },
    { name: "FAQ", href: "/docs/faq", icon: HelpCircle },
  ]

  return (
    <div className="flex min-h-screen">
      <aside className="hidden lg:block w-64 bg-slate-900 border-r border-slate-800 p-4 sticky top-0 h-screen overflow-y-auto">
        <div className="mb-8">
          <Link href="/" className="flex items-center">
            <img src="/images/netfortress-logo.png" alt="Net Fortress" className="h-8 w-8 mr-2" />
            <span className="text-white font-bold">Net Fortress</span>
          </Link>
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg px-3 py-2 transition-colors"
            >
              <item.icon className="mr-2 h-4 w-4 text-netfortress-500" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}

