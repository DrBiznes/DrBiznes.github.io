import { NavigationMenu } from '../Navigation/NavigationMenu';
import Stars from '../Lighthouse/Stars';
import { Outlet } from 'react-router-dom';
import { Lighthouse } from '../Lighthouse/Lighthouse';
import { Moon } from '../Moon/Moon';

export const Layout = () => {
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      {/* Background - lowest layer */}
      <div className="fixed inset-0 z-0">
        <Stars />
      </div>
      
      {/* Moon - middle layer */}
      <div className="fixed top-0 right-[15%] z-10">
        <Moon />
      </div>
      
      {/* Lighthouse - middle layer */}
      <div className="fixed bottom-0 right-0 z-10">
        <Lighthouse />
      </div>
      
      {/* Navigation - top layer */}
      <div className="fixed top-1/2 -translate-y-1/2 left-[8%] z-30">
        <NavigationMenu />
      </div>
      
      {/* Main content - top layer */}
      <main className="relative z-20">
        <Outlet />
      </main>
    </div>
  );
};