import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Compass, AlertTriangle, Lightbulb, Building, Wrench } from "lucide-react"

export default function AboutSection() {
  const customers = [
    {
      icon: Lightbulb,
      title: "AI-First Product Companies",
      description:
        "Companies where AI is the core of their product—not just a feature. They need infrastructure that natively understands AI from runtime to orchestration.",
    },
    {
      icon: Building,
      title: "Original Equipment Manufacturers (OEMs)",
      description:
        "Companies building smart, autonomous systems—drones, vehicles, robots—where everything runs in constrained, connected, real-world environments.",
    },
    {
      icon: Wrench,
      title: "System Integrators and Computing Centers",
      description:
        "Organizations that design and deploy intelligent compute infrastructure for enterprises across cloud, on-premises, and edge environments.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Us
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* Vision */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-purple-300">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-lg">
              We envision a world where any device can be instantly intelligent. Kineton ensures seamless interaction
              and integration between hardware and intelligence—enabling AI to run anywhere, instantly.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Compass className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-purple-300">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-lg">
              To bridge the gap between fragmented hardware and fluid, scalable AI by building intelligent computing
              infrastructure that powers the next generation of autonomous systems across robotics, drones, XR,
              wearables, and edge devices.
            </p>
          </div>

          {/* Challenge */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-3xl font-bold text-purple-300">The Challenge We're Solving</h3>
            </div>
            <div className="space-y-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">AI is Outgrowing Today's Compute</h4>
                <p className="text-gray-400">
                  Current chips and clouds can't handle emerging AI scale and latency requirements.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">No AI-Native Runtime Exists</h4>
                <p className="text-gray-400">
                  The current development stack is fragmented—hardware, orchestration, and AI tooling aren't integrated.
                  There's no standard execution layer built for intelligent workloads.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">Infrastructure Must Be Intelligent</h4>
                <p className="text-gray-400">
                  Enterprises and nations want control, auditability, and local deployability. Real-time, decentralized
                  systems—like swarm and edge AI—lack native support.
                </p>
              </div>
            </div>
          </div>

          {/* Unique Approach */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-300 mb-4">Our Unique Approach</h3>
            <p className="text-gray-300 text-lg">
              AI rests on four core pillars: Data, Architecture, Infrastructure, Energy. While the world is focused on
              architecture and data, the real bottleneck lies in the execution layer—Kineton is building infrastructure
              that builds, runs, adapts, and scales this intelligence.
            </p>
          </div>
        </div>

        {/* Customers */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">Our Customers</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {customers.map((customer, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <customer.icon className="w-6 h-6 text-purple-400 mr-3" />
                    <CardTitle className="text-lg text-white">{customer.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{customer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
