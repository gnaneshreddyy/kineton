import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Network, Zap, Shield, Globe, Layers } from "lucide-react"

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Products
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Veo Cores */}
          <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-purple-400 mr-3" />
                <CardTitle className="text-2xl text-white">Veo Cores</CardTitle>
              </div>
              <CardDescription className="text-gray-300 text-lg">
                Specialised AI-centric semiconductor cores designed for efficient, context-aware compute across edge,
                embedded, and autonomous systems.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Purpose-built semiconductor IP cores delivering ultra-efficient AI and ML computation at the edge.
                Optimized for low-latency inference and real-time control in resource-constrained environments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Advanced architecture for AI inference</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Optimized for edge computing</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Built-in hardware acceleration</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fabric */}
          <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-purple-400 mr-3" />
                <CardTitle className="text-2xl text-white">Fabric</CardTitle>
              </div>
              <CardDescription className="text-gray-300 text-lg">
                Intelligent Connector and Memory Layer for distributed AI systems, enabling dynamic orchestration of
                heterogeneous resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                The Fabric Engine is an intelligent orchestration layer for real-time, peer-to-peer coordination of
                agents, devices, and workloads. It manages execution across cloud, edge, and swarm environments with
                built-in control, memory, and scheduling systems.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Layers className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Distributed compute orchestration</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Intelligent data flow optimization</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Secure peer-to-peer communication</span>
                </div>
                <div className="flex items-center">
                  <Network className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">Dynamic resource allocation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
