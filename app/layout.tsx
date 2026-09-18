import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'NEXABio | AI for Biomaterials | UT Dallas',
  description: 'Explore NEXABio CyberTraining Workshops at The University of Texas at Dallas, bringing together AI, biomaterials, and hands-on computational research. Draft program website.',
  robots: { index: false, follow: false },
  icons: { icon: '/nexabio-site/favicon.svg' },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
