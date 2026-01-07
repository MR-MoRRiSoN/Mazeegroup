import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Projects Portfolio | Completed Installations Georgia, Azerbaijan, Armenia | Maze Group',
  description: 'View our completed hotel projects: TV systems, LED installations, IT infrastructure. Tbilisi, Baku, Yerevan. 100+ successful hotel equipment installations.',
  keywords: [
    // Project-related
    'hotel projects Georgia',
    'hotel installation projects Tbilisi',
    'completed hotel projects Caucasus',
    'hotel equipment installation Georgia',
    'hotel TV installation projects',
    'LED installation projects hotels',
    'hotel IT projects Georgia',
    'hospitality projects Azerbaijan Armenia',

    // Russian
    'проекты для отелей Грузия',
    'завершенные проекты отелей Тбилиси',

    // Georgian
    'სასტუმროების პროექტები საქართველო',
    'დასრულებული პროექტები თბილისი',
  ],
  openGraph: {
    title: 'Hotel Projects Portfolio | Maze Group',
    description: '100+ completed hotel equipment projects in Georgia, Azerbaijan, and Armenia',
  },
};

export default function AllProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
