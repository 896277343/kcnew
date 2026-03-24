import { Container, Section } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <>
      <Section className="py-12 md:py-20 bg-slate-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
            <p className="mt-4 text-lg text-slate-600">
              We're here to help. Contact us for technical support, sales inquiries, or any other questions you may have.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-24">
        <Container className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-800">Get in Touch</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our team is ready to provide you with the best solutions for your induction heating needs. Reach out to us via phone, email, or visit our office.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Phone</h3>
                  <p className="text-slate-600">0086-371-60983870</p>
                  <p className="text-slate-600">+86 18937640479</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Email</h3>
                  <p className="text-slate-600">info@gslipai.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Address</h3>
                  <p className="text-slate-600 max-w-sm">
                    No. 101, 1st Floor, Unit 1, Building 72, International Medical Industrial Park, North Of Wutong Road, East Of Nuanquan Road, Xuedian Town, Xinzheng, Zhengzhou, Henan, China
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-lg border shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-slate-700">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-slate-700">Email</label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium text-slate-700">Subject</label>
                <Input id="subject" placeholder="Inquiry about..." />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-slate-700">Message</label>
                <Textarea id="message" placeholder="Please describe your needs..." rows={6} />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                Submit Message
              </Button>
            </form>
          </div>
        </Container>
      </Section>

      {/* Map Section Placeholder */}
      <Section className="bg-slate-200 h-96 flex items-center justify-center">
        <div className="text-center text-slate-500">
          <MapPin size={48} className="mx-auto mb-4"/>
          <h3 className="text-2xl font-bold">Map Placeholder</h3>
          <p>An interactive map will be displayed here.</p>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
