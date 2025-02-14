import { useState } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  name: string;
  path: string;
  children?: MenuItem[];
}

const menuData: MenuItem = {
  name: 'me.jamino',
  path: '/',
  children: [
    {
      name: 'Web-Works',
      path: '/web-works',
      children: [
        { name: 'Beautiful-NTD', path: '/transit-database' },
        { name: 'Route-67', path: 'https://route67.jamino.me' },
        { name: "Zaamurets", path: "https://zaamurets.jamino.me" },
        { name: 'Tracy-Lane-Portfolio', path: 'https://tracylane.work' },
      ]
    },
    {
      name: 'Games',
      path: '/games',
      children: [
        { name: '100-Women', path: 'https://100.jamino.me' },
        { name: 'Steam-Gauge', path: 'https://gauge.jamino.me' },
        { name: 'Location-Scout', path: 'https://scout.jamino.me' },
        

      ]
    },
    {
      name: 'Minecraft-Mods',
      path: '/minecraft-mods',

      children: [
        { name: 'Wynn-Weapon-Bigger', path: '/minecraft-mods/wynn-weapon-bigger' },
        { name: 'WynnVista', path: '/minecraft-mods/wynnvista' },
        { name: 'WynnLODGrabber', path: '/minecraft-mods/wynnlodgrabber' },
        { name: 'WynnBubbles', path: '/minecraft-mods/wynnbubbles' },
        { name: 'Class-Keybind-Profiles', path: '/minecraft-mods/class-keybind-profiles' },
        { name: 'Nimble-ReWynnded', path: '/minecraft-mods/nimble-rewynnded' }
      ]
    },
    {
      name: 'Photos',
      path: '/photos',
      children: [
        { name: 'National-Parks', path: '/photos/national-parks' },
        { name: 'American-South', path: '/photos/american-south' },
        { name: 'Misc', path: '/photos/misc' }
      ]
    },
    { 
      name: 'Music', 
      path: '/music',
      children: [
        { name: 'The-Stoning', path: 'https://www.thestoning.us/' },
        { name: 'Thunderegg-Records', path: 'https://www.thundereggrecords.com/' },
        { name: 'UO-ALC-Wrapped-2024', path: 'https://alc.jamino.me' },
        { name: 'Jam-Page', path: '/jam' },
      ]
    },
    { name: 'Biznes-Card', path: '/biznes-card' }
  ]
};

const NavigationItem = ({ 
  item, 
  level = 0, 
  isLastChild = false,
  openFolders,
  setOpenFolders
}: { 
  item: MenuItem; 
  level?: number;
  isLastChild?: boolean;
  openFolders: string[];
  setOpenFolders: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [visited, setVisited] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (item.children) {
      if (item.name === 'me.jamino') {
        setOpenFolders(currentFolders => 
          currentFolders.includes(item.name) ? [] : [item.name]
        );
        setVisited(true);
        return;
      }
      
      e.stopPropagation();
      setOpenFolders((currentFolders: string[]) => {
        if (currentFolders.includes(item.name)) {
          return currentFolders.filter((folder: string) => folder !== item.name);
        } else {
          const newFolders = [...currentFolders];
          if (level === 1) {
            const level1Folders = menuData.children?.map(child => child.name) || [];
            return [...newFolders.filter(folder => !level1Folders.includes(folder)), item.name];
          }
          return [...newFolders, item.name];
        }
      });
    }
    setVisited(true);
  };

  const isOpen = openFolders.includes(item.name);

  return (
    <div className="relative">
      <div className="flex items-center h-8">
        <div className="flex items-center">
          {level > 0 && (
            <>
              {Array.from({ length: level - 1 }).map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-8 flex items-center justify-center"
                >
                  <div className="w-[1px] h-full bg-white"/>
                </div>
              ))}
              <div className="w-6 h-8 flex items-center justify-center text-white">
                {isLastChild ? '└' : '├'}
              </div>
              <div className="w-3 h-8 flex items-center justify-center text-white">
                ──
              </div>
            </>
          )}
          <div 
            className={`flex items-center cursor-pointer ${level === 0 ? 'pl-1' : 'pl-0'}`}
            onClick={handleClick}
          >
            <span className="mr-2 text-base">
              {item.children ? (isOpen ? '📂' : '📁') : '📄'}
            </span>
            {item.children && level === 0 ? (
              <Link 
                to={item.path}
                className={`font-['IBM_Plex_Mono'] hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} ${level === 0 ? 'text-2xl' : 'text-base'}`}
              >
                {item.name}
              </Link>
            ) : item.children ? (
              <span 
                className={`font-['IBM_Plex_Mono'] hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} ${level === 0 ? 'text-xl' : 'text-base'}`}
              >
                {item.name}
              </span>
            ) : item.path.startsWith('http') ? (
              <a 
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-['IBM_Plex_Mono'] hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} text-base`}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                to={item.path} 
                className={`font-['IBM_Plex_Mono'] hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} text-base`}
              >
                {item.name}
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {isOpen && item.children && (
        <div className="relative">
          {item.children.map((child, index) => (
            <NavigationItem 
              key={child.path} 
              item={child} 
              level={level + 1}
              isLastChild={index === item.children!.length - 1}
              openFolders={openFolders}
              setOpenFolders={setOpenFolders}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const NavigationMenu = () => {
  const [openFolders, setOpenFolders] = useState<string[]>(['me.jamino']);

  return (
    <div className="font-['IBM_Plex_Mono'] pl-2">
      <NavigationItem 
        item={menuData} 
        openFolders={openFolders}
        setOpenFolders={setOpenFolders}
      />
    </div>
  );
};