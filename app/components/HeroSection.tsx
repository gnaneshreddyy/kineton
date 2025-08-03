import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm">where the edge thinks</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            INTELLIGENT COMPUTING
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            INFRASTRUCTURE
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
          POWERING AI FROM FRAGMENTED HARDWARE TO FLUID INTELLIGENCE
        </p>

        <div className="text-lg text-purple-300 mb-8 space-y-2">
          <p>idea to orchestration - Instantly</p>
          <p className="text-2xl font-semibold">Kineton: Where AI Hits the Edge Running</p>
        </div>

        <p className="text-gray-400 mb-12 max-w-3xl mx-auto text-lg">
          Our vision is to ensure seamless interaction and integration between hardware and intelligence. Kineton, where
          the edge thinks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-3 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Glowing orb effect */}
        <div className="relative mt-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
          </div>
          <div className="relative">
            <div className="w-64 h-32 mx-auto bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
