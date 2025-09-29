
export type ProjectCategory = 'web-development' | 'android-development' | 'video-editing';

export type Project = {
    category: ProjectCategory;
    title: string;
    description: string;
    tags: string[];
    imageId: string;
    liveUrl?: string;
    sourceCodeUrl?: string;
};

export const projects: Project[] = [
    {
        category: 'web-development',
        title: 'Portfolio Website',
        description: 'My personal portfolio to showcase my skills and projects. Built with Next.js and Tailwind CSS.',
        tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
        imageId: 'project-1',
        liveUrl: '#',
        sourceCodeUrl: 'https://github.com/25umesh'
    },
    {
        category: 'web-development',
        title: 'E-commerce Store',
        description: 'A full-featured e-commerce website with a modern design and a great user experience.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB'],
        imageId: 'project-2',
        liveUrl: '#',
        sourceCodeUrl: 'https://github.com/25umesh'
    },
    {
        category: 'android-development',
        title: 'Music Player App',
        description: 'A sleek and modern music player for Android, with playlist management and background play.',
        tags: ['Kotlin', 'Jetpack Compose', 'MVVM'],
        imageId: 'project-5',
        sourceCodeUrl: 'https://github.com/25umesh'
    },
    {
        category: 'android-development',
        title: 'Task Manager App',
        description: 'A productivity app to help you organize your tasks and stay on track.',
        tags: ['Java', 'XML', 'RoomDB'],
        imageId: 'project-6',
        sourceCodeUrl: 'https://github.com/25umesh'
    },
    {
        category: 'video-editing',
        title: 'Short Film "The Glitch"',
        description: 'A sci-fi short film I directed and edited, exploring themes of technology and reality.',
        tags: ['Premiere Pro', 'After Effects', 'Storytelling'],
        imageId: 'project-3',
        liveUrl: '#',
    },
    {
        category: 'video-editing',
        title: 'Travel Vlog - The Mountains',
        description: 'A cinematic travel video capturing the beauty of the Himalayas. Color graded in DaVinci Resolve.',
        tags: ['DaVinci Resolve', 'Videography', 'Color Grading'],
        imageId: 'project-4',
        liveUrl: '#',
    }
];
