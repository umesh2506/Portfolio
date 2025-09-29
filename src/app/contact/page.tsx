import { PageHeader } from "@/components/app/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-svh">
      <PageHeader title="Contact Me" />
      <main className="flex-1 p-6 sm:p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                You can reach out to me via the following methods. I'm looking forward to hearing from you!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">The best way to reach me for any inquiries.</p>
                  <a href="mailto:pagadojuumesh869@gmail.com" className="text-accent hover:underline break-all">pagadojuumesh869@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Available for calls during business hours.</p>
                  <a href="tel:+919390254712" className="text-accent hover:underline">+91 9390254712</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-accent/10 text-accent flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Hyderabad, Telangana</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
