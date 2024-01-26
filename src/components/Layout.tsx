import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full bg-surround flex">
      <Navbar />
      <div className="relative" style={{ width: 'calc(100vw - 80px)' }}>
        <Header />
        <div
          className="bg-transparent mt-[70px] p-5 flex gap-4"
          style={{ height: 'calc(100vh - 70px)' }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
