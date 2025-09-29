import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/app/page-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Home() {
  const profileImage = PlaceHolderImages.find(p => p.id === 'profile-picture');

  return (
    <div className="flex flex-col min-h-svh">
      <PageHeader title="Home" />
      <main className="flex-1 p-6 sm:p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0 md:flex md:items-stretch">
              <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary font-headline mb-4">
                  Pagadoju Umesh
                </h1>
                <p className="text-xl text-muted-foreground mb-6">
                  a passionate Full Stack Developer currently pursuing my B.Tech (3rd Year) at Methodist College of Engineering and Technology.
                </p>
                <div className="space-y-4 leading-relaxed">
                  <p>
                    💻 Skilled in developing web and Android applications, I can take up projects across any domain—from idea to deployment. I enjoy solving real-world problems with modern technologies and delivering end-to-end solutions.
                  </p>
                  <p>
                    📸 Beyond tech, I am a content creator with expertise in video editing, photography, and videography, where I blend creativity with technical skills.
                  </p>
                  <p>
                    🎥 I previously built a YouTube channel with 1K+ subscribers, which grew through original creative content before it was lost due to technical issues. This experience strengthened my skills in audience engagement, content creation, and digital storytelling.
                  </p>
                  <p>
                    🎬 With a strong interest in the direction and creative field, I aspire to merge technology, creativity, and storytelling to bring innovative ideas to life.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-8 pt-4">
                  <Button asChild>
                    <Link href="#" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                      <Github />
                      <span>GitHub</span>
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                      <Linkedin />
                      <span>LinkedIn</span>
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="#" aria-label="Personal Website" target="_blank" rel="noopener noreferrer">
                      <Globe />
                      <span>Website</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/3 h-64 md:h-auto relative">
                {profileImage && (
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
