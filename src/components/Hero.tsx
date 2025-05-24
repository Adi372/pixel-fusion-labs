
import { ArrowRight, Code, Laptop, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-1/4 left-1/4 w-8 h-8 text-blue-400/30 animate-bounce" style={{ animationDelay: '0s' }} />
        <Laptop className="absolute top-1/3 right-1/4 w-6 h-6 text-green-400/30 animate-bounce" style={{ animationDelay: '1s' }} />
        <Smartphone className="absolute bottom-1/3 left-1/3 w-7 h-7 text-purple-400/30 animate-bounce" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
              <span className="text-blue-300 text-sm font-medium">🚀 Next-Generation Web Solutions</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting Digital
              <span className="block bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We transform your vision into powerful web experiences. From enterprise solutions to cutting-edge applications, 
              we deliver technology that drives business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-slate-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-slate-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-slate-400">Expert Developers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
