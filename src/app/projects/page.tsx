import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "QuantumLeap CRM",
    description: "A comprehensive customer relationship management platform designed for SaaS companies, featuring advanced analytics and a modular interface.",
    imageId: "project-1",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "2",
    title: "Aethera E-commerce",
    description: "An online marketplace for artisanal goods, focusing on a seamless user experience, secure payments, and vendor management.",
    imageId: "project-2",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "3",
    title: "NovaTask Manager",
    description: "A productivity app that combines Kanban boards, calendars, and to-do lists into a single, intuitive workflow.",
    imageId: "project-3",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    id: "4",
    title: "ConnectSphere Social",
    description: "A mobile-first social networking app for hobbyists to connect and share their creative projects.",
    imageId: "project-4",
    liveUrl: "#",
    sourceUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-svh">
      <PageHeader title="Projects" />
      <main className="flex-1 p-6 sm:p-8 md:p-12">
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          {projects.map((project) => {
            const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <Card key={project.id} className="flex flex-col overflow-hidden transition-shadow hover:shadow-xl">
                {projectImage && (
                  <div className="aspect-video relative">
                    <Image
                      src={projectImage.imageUrl}
                      alt={projectImage.description}
                      data-ai-hint={projectImage.imageHint}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <div className="flex-grow" />
                <CardFooter className="flex justify-end gap-4 bg-muted/50 p-4">
                  <Button variant="outline" asChild>
                    <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span>Source</span>
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span>Live Demo</span>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
