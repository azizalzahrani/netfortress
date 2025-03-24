"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, RefreshCw, Lock, Zap, FileSearch, ShieldAlert, Server, Wifi } from "lucide-react"
import { runSecurityAction } from "@/lib/actions"

export function SecurityActions() {
  const [isRunning, setIsRunning] = useState<Record<string, boolean>>({})
  const [results, setResults] = useState<Record<string, string>>({})

  const handleAction = async (actionId: string, actionName: string) => {
    setIsRunning((prev) => ({ ...prev, [actionId]: true }))
    setResults((prev) => ({ ...prev, [actionId]: "Running..." }))

    try {
      const result = await runSecurityAction(actionId)
      setResults((prev) => ({ ...prev, [actionId]: result.message }))
    } catch (error) {
      setResults((prev) => ({ ...prev, [actionId]: "Error: Action failed" }))
    } finally {
      setIsRunning((prev) => ({ ...prev, [actionId]: false }))
    }
  }

  const actions = [
    {
      id: "scan-network",
      name: "Network Scan",
      description: "Scan all devices on the network for vulnerabilities",
      icon: Wifi,
      category: "scan",
    },
    {
      id: "scan-endpoints",
      name: "Endpoint Scan",
      description: "Scan all endpoints for malware and security issues",
      icon: FileSearch,
      category: "scan",
    },
    {
      id: "update-signatures",
      name: "Update Signatures",
      description: "Update threat detection signatures to latest version",
      icon: RefreshCw,
      category: "update",
    },
    {
      id: "patch-systems",
      name: "Patch Systems",
      description: "Apply security patches to all systems",
      icon: Shield,
      category: "update",
    },
    {
      id: "quarantine-device",
      name: "Quarantine Device",
      description: "Isolate a compromised device from the network",
      icon: Lock,
      category: "protect",
    },
    {
      id: "block-traffic",
      name: "Block Suspicious Traffic",
      description: "Block traffic from suspicious IP addresses",
      icon: ShieldAlert,
      category: "protect",
    },
    {
      id: "backup-data",
      name: "Backup Critical Data",
      description: "Create backup of critical system data",
      icon: Server,
      category: "protect",
    },
    {
      id: "run-simulation",
      name: "Run Attack Simulation",
      description: "Simulate an attack to test defenses",
      icon: Zap,
      category: "test",
    },
  ]

  return (
    <Tabs defaultValue="scan" className="w-full">
      <TabsList className="grid grid-cols-4 mb-4">
        <TabsTrigger value="scan">Scan</TabsTrigger>
        <TabsTrigger value="update">Update</TabsTrigger>
        <TabsTrigger value="protect">Protect</TabsTrigger>
        <TabsTrigger value="test">Test</TabsTrigger>
      </TabsList>

      {["scan", "update", "protect", "test"].map((category) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid gap-4 md:grid-cols-2">
            {actions
              .filter((action) => action.category === category)
              .map((action) => (
                <Card key={action.id}>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <action.icon className="h-5 w-5 text-primary" />
                    <div>
                      <CardTitle>{action.name}</CardTitle>
                      <CardDescription>{action.description}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {results[action.id] && (
                      <div className="text-sm mt-2 p-2 bg-muted rounded-md">{results[action.id]}</div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <Button
                      onClick={() => handleAction(action.id, action.name)}
                      disabled={isRunning[action.id]}
                      className="w-full"
                    >
                      {isRunning[action.id] ? (
                        <>
                          <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                          Running...
                        </>
                      ) : (
                        <>Run Action</>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

