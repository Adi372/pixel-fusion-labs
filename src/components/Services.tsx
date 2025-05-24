
import { Globe, Smartphone, Database, Shield, Zap, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Web Development",
      description: "Scalable web applications built with modern frameworks and best practices for optimal performance.",
      features: ["React/Next.js", "Node.js", "Cloud Integration", "API Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive designs that provide seamless experiences across all devices and platforms.",
      features: ["Progressive Web Apps", "Mobile Optimization", "Cross-Platform", "Touch Interfaces"]
    },
    {
      icon: Database,
      title: "Enterprise Solutions",
      description: "Robust enterprise-grade applications with advanced data management and security protocols.",
      features: ["Microservices", "Database Design", "System Integration", "Scalable Architecture"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Comprehensive security implementations ensuring data protection and regulatory compliance.",
      features: ["Data Encryption", "GDPR Compliance", "Security Audits", "Access Control"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for speed, SEO, and exceptional user experience.",
      features: ["Core Web Vitals", "SEO Optimization", "CDN Integration", "Performance Monitoring"]
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business processes.",
      features: ["Legacy Migration", "Process Automation", "Digital Strategy", "Change Management"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 text-sm font-medium">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Web Development Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to deployment, we provide full-stack development services 
            that power your digital transformation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
