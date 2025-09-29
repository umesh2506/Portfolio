import { PageHeader } from "@/components/app/page-header";
import { ContactForm } from "@/components/app/contact-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-svh">
      <PageHeader title="Contact Me" />
      <main className="flex-1 p-6 sm:p-8 md:p-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Get in Touch</CardTitle>
                        <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ContactForm />
                    </CardContent>
                </Card>
            </div>
            <aside className="space-y-8 pt-2">
                <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-muted-foreground">Reach out via email for any inquiries.</p>
                            <a href="mailto:hello@profolio.dev" className="text-accent hover:underline break-all">hello@profolio.dev</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                            <Phone className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-muted-foreground">Available for calls during business hours.</p>
                            <a href="tel:+1234567890" className="text-accent hover:underline">(123) 456-7890</a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                            <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Location</h3>
                            <p className="text-muted-foreground">San Francisco, California</p>
                            <p className="text-muted-foreground">Working remotely worldwide.</p>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
      </main>
    </div>
  );
}
