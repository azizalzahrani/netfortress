"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { AlertTriangle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"
import { handleThreatAction } from "@/lib/actions"

interface Threat {
  id: string
  type: string
  source: string
  target: string
  timestamp: string
  severity: "critical" | "high" | "medium" | "low"
  status: "active" | "mitigated" | "investigating"
  description: string
}

const threats: Threat[] = [
  {
    id: "t1",
    type: "Brute Force Attack",
    source: "192.168.1.105",
    target: "Auth Server",
    timestamp: "2023-05-15 14:23:45",
    severity: "high",
    status: "active",
    description: "Multiple failed login attempts detected from external IP address targeting authentication server.",
  },
  {
    id: "t2",
    type: "Malware Detected",
    source: "Workstation-15",
    target: "Internal",
    timestamp: "2023-05-15 13:12:30",
    severity: "critical",
    status: "investigating",
    description: "Trojan malware detected on workstation. Potential data exfiltration in progress.",
  },
  {
    id: "t3",
    type: "Suspicious Traffic",
    source: "192.168.1.45",
    target: "External API",
    timestamp: "2023-05-15 11:45:22",
    severity: "medium",
    status: "mitigated",
    description: "Unusual outbound traffic pattern detected to unknown API endpoint.",
  },
  {
    id: "t4",
    type: "Port Scan",
    source: "External",
    target: "Firewall",
    timestamp: "2023-05-15 10:30:15",
    severity: "low",
    status: "mitigated",
    description: "Port scanning activity detected from external source. All ports secured.",
  },
  {
    id: "t5",
    type: "Data Exfiltration Attempt",
    source: "Workstation-22",
    target: "External FTP",
    timestamp: "2023-05-15 09:15:10",
    severity: "high",
    status: "active",
    description: "Unusual file transfer activity detected to unauthorized external FTP server.",
  },
]

interface RecentThreatsProps {
  showAll?: boolean
}

export function RecentThreats({ showAll = false }: RecentThreatsProps) {
  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const displayThreats = showAll ? threats : threats.slice(0, 3)

  const getSeverityIcon = (severity: Threat["severity"]) => {
    switch (severity) {
      case "critical":
        return <AlertCircle className="h-4 w-4" />
      case "high":
        return <AlertTriangle className="h-4 w-4" />
      case "medium":
        return <AlertTriangle className="h-4 w-4" />
      case "low":
        return <Info className="h-4 w-4" />
    }
  }

  const getSeverityColor = (severity: Threat["severity"]) => {
    switch (severity) {
      case "critical":
        return "text-destructive"
      case "high":
        return "text-destructive/80"
      case "medium":
        return "text-amber-500"
      case "low":
        return "text-blue-500"
    }
  }

  const getStatusBadge = (status: Threat["status"]) => {
    switch (status) {
      case "active":
        return <Badge variant="destructive">Active</Badge>
      case "investigating":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 hover:bg-amber-100">
            Investigating
          </Badge>
        )
      case "mitigated":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
            Mitigated
          </Badge>
        )
    }
  }

  const handleViewDetails = (threat: Threat) => {
    setSelectedThreat(threat)
    setIsDialogOpen(true)
  }

  const handleAction = async (action: string) => {
    if (selectedThreat) {
      try {
        await handleThreatAction(selectedThreat.id, action)
        setIsDialogOpen(false)
        // In a real app, you would update the threat status here
      } catch (error) {
        console.error("Error handling threat action:", error)
      }
    }
  }

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {displayThreats.map((threat) => (
            <TableRow key={threat.id}>
              <TableCell className="font-medium">{threat.type}</TableCell>
              <TableCell>{threat.source}</TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <span className={cn("mr-1", getSeverityColor(threat.severity))}>
                    {getSeverityIcon(threat.severity)}
                  </span>
                  <span className="capitalize">{threat.severity}</span>
                </div>
              </TableCell>
              <TableCell>{getStatusBadge(threat.status)}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="sm" onClick={() => handleViewDetails(threat)}>
                  Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        {selectedThreat && (
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Threat Details</DialogTitle>
              <DialogDescription>Complete information about the detected threat</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Type:</span>
                <span className="col-span-3">{selectedThreat.type}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Source:</span>
                <span className="col-span-3">{selectedThreat.source}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Target:</span>
                <span className="col-span-3">{selectedThreat.target}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Timestamp:</span>
                <span className="col-span-3">{selectedThreat.timestamp}</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Severity:</span>
                <div className="col-span-3 flex items-center gap-1">
                  <span className={cn("mr-1", getSeverityColor(selectedThreat.severity))}>
                    {getSeverityIcon(selectedThreat.severity)}
                  </span>
                  <span className="capitalize">{selectedThreat.severity}</span>
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-sm font-medium">Status:</span>
                <span className="col-span-3">{getStatusBadge(selectedThreat.status)}</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <span className="text-sm font-medium">Description:</span>
                <p className="col-span-3 text-sm">{selectedThreat.description}</p>
              </div>
            </div>
            <DialogFooter className="flex justify-between">
              <div>
                {selectedThreat.status === "active" && (
                  <Button variant="destructive" onClick={() => handleAction("quarantine")}>
                    Quarantine
                  </Button>
                )}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => handleAction("investigate")}>Investigate</Button>
              </div>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

