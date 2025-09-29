import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Film, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: "1",
    title: "QuantumLeap CRM",
    description: "A comprehensive customer relationship management platform designed for SaaS companies, featuring advanced analytics and a modular interface.",
    imageId: "project-1",
    url: "#",
    category: "Web Development",
  },
  {
    id: "2",
    title: "Aethera E-commerce",
    description: "An online marketplace for artisanal goods, focusing on a seamless user experience, secure payments, and vendor management.",
    imageId: "project-2",
    url: "#",
    category: "Web Development",
  },
  {
    id: "3",
    title: "Cinematic Travel Montage",
    description: "A short film showcasing stunning landscapes from a recent trip, edited with a focus on storytelling and visual rhythm.",
    imageId: "project-3",
    url: "#",
    category: "Video Editing",
  },
  {
    id: "4",
    title: "Product Promo Video",
    description: "A high-energy promotional video for a new tech gadget, featuring dynamic motion graphics and a compelling narrative.",
    imageId: "project-4",
    url: "#",
    category: "Video Editing",
  },
];

const categoryIcons = {
  "Web Development": <Code />,
  "Video Editing": <Film />,
};

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
                  <div className="flex items-center gap-2">
                    {/* @ts-ignore */}
                    {categoryIcons[project.category]}
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl pt-2">{project.title}</CardTitle>
                  <CardDescription className="pt-2">{project.description}</CardDescription>
                </CardHeader>
                <div className="flex-grow" />
                <CardFooter className="flex justify-end gap-4 bg-muted/50 p-4">
                  <Button asChild>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                      <span>View Project</span>
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
