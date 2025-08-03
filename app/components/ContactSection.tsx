import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Globe, Users, Handshake, Building, DollarSign, Calendar, FileText, UserPlus } from "lucide-react"

export default function ContactSection() {
  const interests = [
    {
      icon: Users,
      title: "Early Access Program",
      description: "Get priority access to our Fabric Engine and development tools.",
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Collaborate with us on AI infrastructure solutions for your industry.",
    },
    {
      icon: Building,
      title: "OEM Integration",
      description: "Custom solutions for autonomous systems, robotics, and edge AI deployments.",
    },
    {
      icon: DollarSign,
      title: "Investment & Media",
      description: "Press inquiries and investment discussions.",
    },
  ]

  const nextSteps = [
    { icon: Calendar, text: "Schedule a Demo" },
    { icon: FileText, text: "Request Technical Documentation" },
    { icon: UserPlus, text: "Join Early Access Program" },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your AI infrastructure? We're here to help you build the future of intelligent computing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-purple-300 mb-8">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">General Inquiries: </span>
                <a href="mailto:kineton.technologies@gmail.com" className="text-purple-400 hover:text-purple-300 ml-2">
                  kineton.technologies@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-5 h-5 text-purple-400 mr-3" />
                <span className="text-gray-300">Website: </span>
                <a href="https://kineton.co/" className="text-purple-400 hover:text-purple-300 ml-2">
                  https://kineton.co/
                </a>
              </div>
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-purple-300">Areas of Interest</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="bg-gray-800/30 border-purple-500/20 hover:border-purple-400/40 transition-colors"
                >
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <interest.icon className="w-6 h-6 text-purple-400 mr-3" />
                      <CardTitle className="text-lg text-white">{interest.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-purple-300 mb-8">Next Steps</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto">
              Whether you're building AI-native products, integrating intelligent systems, or deploying edge AI
              solutions, Kineton's platform can accelerate your development and improve your performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {nextSteps.map((step, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-6 py-3 bg-transparent"
                >
                  <step.icon className="w-4 h-4 mr-2" />
                  {step.text}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
