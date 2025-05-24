
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 mb-6">
            <span className="text-blue-300 text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Let's discuss how we can transform your vision into a powerful digital solution. 
            Our team is ready to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                  <Input 
                    placeholder="John" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Company</label>
                <Input 
                  placeholder="Your Company" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Project Details</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white group">
                Send Message
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Ready to transform your business with cutting-edge web solutions? 
                Our expert team is here to help you every step of the way.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-slate-300">hello@webdevpro.com</p>
                  <p className="text-slate-300">sales@webdevpro.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-slate-300">+1 (555) 123-4567</p>
                  <p className="text-slate-300">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                  <p className="text-slate-300">123 Tech Hub Avenue</p>
                  <p className="text-slate-300">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/20">
              <h4 className="text-white font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-slate-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
