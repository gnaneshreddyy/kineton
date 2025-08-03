import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Layers, Zap, Globe, Network, Rocket } from "lucide-react"

export default function WhyKinetonSection() {
  const features = [
    {
      icon: Layers,
      title: "Vertically Integrated Stack",
      description: "From semiconductor cores to orchestration—everything designed to work together",
    },
    {
      icon: Zap,
      title: "AI-Native by Design",
      description: "Built specifically for intelligent workloads, not adapted from legacy systems",
    },
    {
      icon: Globe,
      title: "Edge-Ready Performance",
      description: "Low-latency, power-efficient operation where it matters most",
    },
    {
      icon: Network,
      title: "Real-Time Orchestration",
      description: "Dynamic coordination across cloud, edge, and swarm environments",
    },
    {
      icon: Rocket,
      title: "Future-Proof Architecture",
      description: "Ready for the next generation of autonomous and agentic systems",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Why Kineton?
          </h2>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">Less Bulk, More Intelligence</h3>
            <p className="text-gray-300 text-lg mb-8">
              While the world builds AI systems that deploy everything—bloated models, generic infrastructure, full
              cloud stacks—chasing generalization, we focus only on what's needed for execution, precision, and control.
            </p>

            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              AI is Foundational, Infrastructure is the Bottleneck
            </h3>
            <p className="text-gray-300 text-lg">
              AI rests on four core pillars: Data, Architecture, Infrastructure, Energy. While the world focuses on
              architecture and data, the real bottleneck lies in the execution layer. Kineton builds infrastructure that
              builds, runs, adapts, and scales intelligence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">What Makes Us Different:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <feature.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <CardTitle className="text-lg text-white">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
