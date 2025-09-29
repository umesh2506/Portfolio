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

const initialResumeText = `PAGADOJU UMESH
pagadojuumesh869@gmail.com | +91 9390254712 | DOB - 25 JUN 2005

CAREER OBJECTIVE
To leverage my skills and experiences in full stack development, content creation, and community building while exploring opportunities to grow both technically and creatively. I aim to build a strong professional network, contribute to impactful projects, and continuously learn to make a positive impact in technology and society.

EDUCATION
B. Tech, CSE
METHODIST COLLEGE OF ENGINEERING AND TECHNOLOGY
HYDERBAD, INDIA
EXPECTED 2027
Intermediate, MPC SIDDARTHA JUNIOR COLLEGE HYDERBAD, INDIA
2021-2023
Percentage: 81%
SSC
SAI CHAITANYA MODEL SCHOOL
HYDERBAD, INDIA 2020-201
Percentage: 97%

SKILLS
💻 Technical
•	Full Stack Web & Android App Development
•	MS Excel, Word, PowerPoint
•	Video Editing, Photography & Videography
•	Content Creation & Direction
🗣️ Communication
•	Public Speaking
•	Writing
•	Social Media Management

LANGUAGES KNOWN	
•	English • Hindi • Telugu`;

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
            <CardTitle>My Resume</CardTitle>
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
