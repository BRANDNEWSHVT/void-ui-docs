import { Header, MobileBottomNav } from '@/components/header';
import { Footer } from '@/components/footer';

interface BlocksLayoutProps {
  children: React.ReactNode;
}

export function BlocksLayout({ children }: BlocksLayoutProps) {
  return (
    <div className="min-h-screen bg-(--void-bg)">
      <Header maxWidth="wide" />
      {children}
      <MobileBottomNav />
      <Footer />
    </div>
  );
}
