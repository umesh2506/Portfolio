
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
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the form fields.',
    };
  }

  // Simulate sending an email
  console.log('New contact message:');
  console.log(validatedFields.data);

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
