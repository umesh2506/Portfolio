'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { getFormattedResume } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';

const resumeSchema = z.object({
  formattingInstructions: z.string().min(10, {
    message: 'Instructions must be at least 10 characters.',
  }),
});

const initialResumeText = `Jane Doe
Full-Stack Developer | San Francisco, CA | (123) 456-7890 | jane.doe@email.com | linkedin.com/in/janedoe | github.com/janedoe

Summary
Innovative and detail-oriented Full-Stack Developer with 5+ years of experience in building and maintaining responsive web applications. Proficient in JavaScript, React, Node.js, and cloud technologies. Passionate about creating seamless user experiences and writing clean, efficient code.

Experience
Senior Software Engineer, TechCorp Inc. - San Francisco, CA | 2021 - Present
- Led the development of a new client-facing analytics dashboard using React and D3.js, resulting in a 20% increase in user engagement.
- Architected and implemented a microservices-based backend with Node.js and Express, improving system scalability and reducing latency by 30%.
- Mentored junior developers and conducted code reviews to ensure high-quality code standards.

Software Engineer, Innovate Solutions - San Francisco, CA | 2018 - 2021
- Developed and maintained features for a large-scale e-commerce platform using React and Redux.
- Collaborated with UX/UI designers to translate wireframes into high-quality, responsive code.
- Wrote unit and integration tests with Jest and React Testing Library, achieving 90% code coverage.

Education
Bachelor of Science in Computer Science
University of California, Berkeley | 2014 - 2018

Skills
- Languages: JavaScript (ES6+), TypeScript, HTML5, CSS3, Python
- Frontend: React, Redux, Next.js, Vue.js, Tailwind CSS
- Backend: Node.js, Express, NestJS, Python, Django
- Databases: PostgreSQL, MongoDB, Redis
- Cloud/DevOps: AWS (EC2, S3, Lambda), Docker, CI/CD, Git`;

export function ResumeEditor() {
  const [resumeText, setResumeText] = useState(initialResumeText);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof resumeSchema>>({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      formattingInstructions: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resumeSchema>) {
    setIsLoading(true);
    const result = await getFormattedResume({
      resumeText,
      formattingInstructions: values.formattingInstructions,
    });
    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Formatting Failed',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.formattedResumeText) {
      setResumeText(result.formattedResumeText);
      toast({
        title: 'Success!',
        description: 'Your resume has been updated.',
      });
      form.reset();
    }
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8 p-6 sm:p-8 md:p-12 h-full">
      <div className="lg:col-span-2">
        <Card className="h-full">
          <CardHeader>
            <CardTitle>Resume Preview</CardTitle>
            <CardDescription>This is a live preview of your resume.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 rounded-md border bg-muted/50 whitespace-pre-wrap font-mono text-xs leading-relaxed overflow-auto">
                {resumeText}
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card className="sticky top-24">
          <CardHeader>
            <CardTitle>AI Editing Tool</CardTitle>
            <CardDescription>
              Use natural language to format your resume. Try "make all headings bold" or "change the font to Times New Roman".
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="formattingInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Formatting Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder='e.g., "Add 10px of spacing after each section"'
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <><Wand2 className="mr-2 h-4 w-4" /> Apply Formatting</>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
