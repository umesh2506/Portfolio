'use server';

/**
 * @fileOverview Resume formatting tool that allows users to edit the formatting of their resume using AI.
 *
 * - formatResume - A function that formats the resume based on user instructions.
 * - FormatResumeInput - The input type for the formatResume function.
 * - FormatResumeOutput - The return type for the formatResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FormatResumeInputSchema = z.object({
  resumeText: z.string().describe('The text content of the resume to be formatted.'),
  formattingInstructions: z.string().describe('Instructions on how to format the resume, e.g., change font, spacing, etc.'),
});
export type FormatResumeInput = z.infer<typeof FormatResumeInputSchema>;

const FormatResumeOutputSchema = z.object({
  formattedResumeText: z.string().describe('The formatted resume text based on the provided instructions.'),
});
export type FormatResumeOutput = z.infer<typeof FormatResumeOutputSchema>;

export async function formatResume(input: FormatResumeInput): Promise<FormatResumeOutput> {
  return formatResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'formatResumePrompt',
  input: {schema: FormatResumeInputSchema},
  output: {schema: FormatResumeOutputSchema},
  prompt: `You are an AI tool that takes resume text and formatting instructions and returns a formatted resume.

  Resume Text: {{{resumeText}}}
  Formatting Instructions: {{{formattingInstructions}}}

  Please apply the formatting instructions to the resume text and return the formatted resume text.
  The output should only be the resume and nothing else.`,
});

const formatResumeFlow = ai.defineFlow(
  {
    name: 'formatResumeFlow',
    inputSchema: FormatResumeInputSchema,
    outputSchema: FormatResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
