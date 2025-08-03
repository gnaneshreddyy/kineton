import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bot,
  Car,
  DrillIcon as Drone,
  Glasses,
  Watch,
  Cog,
  Cpu,
  Network,
  Clock,
  Users,
  MicroscopeIcon as Microchip,
  Zap,
  HardDrive,
  Layers,
  Settings,
  Gauge,
} from "lucide-react"

export default function SolutionsSection() {
  const industries = [
    {
      icon: Bot,
      title: "Robotics",
      description: "Ultra-low latency AI for real-time control and multi-robot coordination.",
    },
    {
      icon: Car,
      title: "Autonomous Vehicles",
      description: "High-performance silicon and intelligent networking for safety-critical navigation.",
    },
    {
      icon: Drone,
      title: "Drones & UAV Systems",
      description: "Power-efficient processing and peer-to-peer coordination for advanced swarm operations.",
    },
    {
      icon: Glasses,
      title: "Extended Reality (XR)",
      description: "Seamless compute for immersive, real-time AR/VR experiences.",
    },
    { icon: Watch, title: "Wearables & IoT", description: "Always-on AI with compact, energy-conscious solutions." },
    {
      icon: Cog,
      title: "Autonomous Systems",
      description: "Reliable distributed intelligence across cloud, edge, and embedded environments.",
    },
  ]

  const applications = [
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Local, efficient AI processing for environments with resource or power limits.",
    },
    {
      icon: Network,
      title: "Distributed AI",
      description: "Unified orchestration across diverse devices and locations.",
    },
    { icon: Clock, title: "Real-Time Systems", description: "Deterministic performance for mission-critical timing." },
    {
      icon: Users,
      title: "Swarm Intelligence",
      description: "Collaborative, multi-agent systems that adapt and learn together.",
    },
    {
      icon: Microchip,
      title: "Embedded Intelligence",
      description: "Direct AI integration into compact hardware—no unnecessary overhead.",
    },
  ]

  const challenges = [
    { icon: HardDrive, title: "Memory Wall", description: "Minimize data movement, maximize compute efficiency." },
    {
      icon: Layers,
      title: "Hardware Fragmentation",
      description: "Bridge gaps between different processors and platforms.",
    },
    {
      icon: Zap,
      title: "Power Constraints",
      description: "Deliver high performance within strict energy and thermal limits.",
    },
    {
      icon: Settings,
      title: "Integration Complexity",
      description: "Streamline deployment across hybrid environments.",
    },
    {
      icon: Gauge,
      title: "Orchestration Overhead",
      description: "Replace legacy stacks with lean, hardware-aware execution.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kineton: Intelligent computing infrastructure for any device, any environment, any scale.
          </p>
        </div>

        {/* By Industry */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">By Industry</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <industry.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <CardTitle className="text-lg text-white">{industry.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* By Application */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">By Application</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <app.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <CardTitle className="text-lg text-white">{app.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{app.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* By Challenge */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">By Challenge</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <challenge.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <CardTitle className="text-lg text-white">{challenge.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{challenge.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
