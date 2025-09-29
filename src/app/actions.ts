
'use server';

import { z } from 'zod';
import { formatResume } from '@/ai/flows/resume-formatting';
import type { FormatResumeInput } from '@/ai/flows/resume-formatting';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function sendContactMessage(prevState: { message: string, errors?: any }, formData: FormData) {
  // This is a dummy implementation.
  // In a real application, you would use a service like Resend or Nodemailer to send an email.
  console.log('New contact message:');
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  return { message: 'Your message has been sent successfully!', errors: {} };
}


export async function getFormattedResume(input: FormatResumeInput): Promise<{ formattedResumeText?: string; error?: string }> {
  try {
    const result = await formatResume(input);
    if (result.formattedResumeText) {
      return { formattedResumeText: result.formattedResumeText };
    }
    return { error: 'Failed to format resume. The AI did not return a valid output.' };
  } catch (error) {
    console.error(error);
    return { error: 'An unexpected error occurred while formatting the resume.' };
  }
}
