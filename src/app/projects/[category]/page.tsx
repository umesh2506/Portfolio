
import { PageHeader } from "@/components/app/page-header";
import { projects, ProjectCategory } from "@/lib/projects-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Github, Play } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";


const categoryDetails: Record<ProjectCategory, { title: string; description: string }> = {
    'web-development': {
        title: 'Web Development Projects',
        description: 'A collection of my web development projects.'
    },
    'android-development': {
        title: 'Android Development Projects',
        description: 'A collection of my Android development projects.'
    },
    'video-editing': {
        title: 'Video Editing Projects',
        description: 'A showcase of my video editing work.'
    }
};


export default function ProjectsCategoryPage({ params }: { params: { category: string } }) {
    const category = params.category as ProjectCategory;

    if (!Object.keys(categoryDetails).includes(category)) {
        notFound();
    }

    const categoryProjects = projects.filter(p => p.category === category);
    const details = categoryDetails[category];

    return (
        <div className="flex flex-col min-h-svh">
            <PageHeader title={details.title} />
            <main className="flex-1 p-6 sm:p-8 md:p-12">
                <div className="max-w-6xl mx-auto">
                    <p className="text-lg text-muted-foreground mb-8 text-center">{details.description}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoryProjects.map((project) => {
                             const projectImage = PlaceHolderImages.find(p => p.id === project.imageId);
                            return (
                                <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    {projectImage && (
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={projectImage.imageUrl}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                                data-ai-hint={projectImage.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="secondary">{tag}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex gap-2">
                                        {project.sourceCodeUrl && (
                                            <Button asChild variant="outline">
                                                <Link href={project.sourceCodeUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github /> Source
                                                </Link>
                                            </Button>
                                        )}
                                        {project.liveUrl && (
                                             <Button asChild>
                                                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                    <Play /> View
                                                </Link>
                                            </Button>
                                        )}
                                    </CardFooter>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(categoryDetails).map(category => ({
        category,
    }));
}
