import Link from "next/link";
import { PageHeader } from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Film, ArrowRight } from "lucide-react";

const skills = [
  {
    slug: "web-development",
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-accent" />,
    description: "Building responsive and interactive web applications using modern frameworks like React, Vue.js, and Node.js. Focused on creating seamless user experiences with clean, maintainable code and optimal performance.",
    tags: ["JavaScript", "React", "CSS"]
  },
  {
    slug: "android-development",
    title: "Android Development",
    icon: <Smartphone className="w-8 h-8 text-accent" />,
    description: "Developing native Android applications with intuitive user interfaces and robust functionality. Experienced in Kotlin, Java, and modern Android architecture patterns to deliver high-quality mobile experiences.",
    tags: ["Kotlin", "Java", "XML"]
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    icon: <Film className="w-8 h-8 text-accent" />,
    description: "Creating compelling visual stories through professional video editing and post-production. Skilled in color grading, motion graphics, and audio synchronization to produce engaging content for various platforms.",
    tags: ["Premiere Pro", "After Effects", "DaVinci"]
  }
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-svh bg-background">
      <header className="py-16 md:py-24 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Pagadojuumesh</h1>
          <p className="mt-4 text-lg md:text-xl text-blue-100">
            Passionate developer and creative professional crafting digital experiences through code and design
          </p>
        </div>
      </header>

      <main className="flex-1">
        <section id="skills" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
              <p className="text-muted-foreground mt-2">
                Explore my expertise across different domains of technology and creativity
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <Card key={skill.title} className="bg-card shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="p-4 bg-accent/10 rounded-full mb-4">
                      {skill.icon}
                    </div>
                    <CardTitle className="text-2xl">{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center flex-1">
                    <p className="text-muted-foreground mb-6">{skill.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {skill.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="justify-center">
                      <Button asChild variant="outline">
                        <Link href={`/projects/${skill.slug}`}>
                            View Projects <ArrowRight className="ml-2"/>
                        </Link>
                      </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="pb-16 md:pb-24">
            <div className="container mx-auto px-4">
                <Card className="max-w-3xl mx-auto p-8 text-center shadow-xl bg-card">
                    <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                    <p className="text-muted-foreground mb-6">
                        Ready to bring your ideas to life? I'm always excited to collaborate on new projects and challenges.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/contact">Get In Touch</Link>
                    </Button>
                </Card>
            </div>
        </section>
      </main>
    </div>
  );
}
