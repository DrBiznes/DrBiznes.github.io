import { NavigationMenu } from '../Navigation/NavigationMenu';
import Stars from '../Lighthouse/Stars';
import { Outlet } from 'react-router-dom';
import { Lighthouse } from '../Lighthouse/Lighthouse';
import { Moon } from '../Moon/Moon';
import { NowPlaying } from '../NowPlaying/NowPlaying';

export const Layout = () => {
  console.log('Layout component rendering');
  
  return (
    <div className="relative min-h-screen bg-[#1A1A1A] overflow-hidden">
      <div className="fixed inset-0 z-0">
        <Stars />
      </div>
      
      <div className="fixed top-0 right-[15%] z-10">
        <Moon />
      </div>
      
      <div className="fixed bottom-0 right-0 z-10">
        <Lighthouse />
      </div>
      
      <div className="fixed top-1/2 -translate-y-1/2 left-[8%] z-30">
        <NavigationMenu />
      </div>
      
      <main className="relative z-20">
        <Outlet />
      </main>

      <div className="fixed bottom-0 left-0 z-30">
        <NowPlaying />
      </div>
    </div>
  );
};