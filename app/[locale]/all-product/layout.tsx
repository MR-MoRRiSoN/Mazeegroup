import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Equipment Catalog | LG Samsung TVs, LED Screens, Minibars | Maze Group',
  description: 'Browse complete hotel equipment catalog: LG & Samsung TVs, LED video walls, minibars, safes, Balsan carpets. Georgia, Azerbaijan, Armenia delivery.',
  keywords: [
    // Product Categories
    'hotel equipment catalog Georgia',
    'hotel product catalog Tbilisi',
    'LG Samsung hotel TV catalog',
    'hotel minibar catalog',
    'hotel safe catalog',
    'Balsan carpet catalog Georgia',
    'LED screen catalog hotels',
    'hotel room equipment catalog',

    // Russian
    'каталог оборудования для отелей Грузия',

    // Georgian
    'სასტუმროების აღჭურვილობის კატალოგი საქართველო',
  ],
  openGraph: {
    title: 'Hotel Equipment Catalog | Maze Group',
    description: 'Complete catalog of hotel equipment and solutions for Georgia, Azerbaijan, Armenia',
  },
};

export default function AllProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
