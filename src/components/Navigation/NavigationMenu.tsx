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
    { name: 'Beautiful NTD', path: '/transit-database' },
    { name: 'Thunderegg Records', path: 'https://www.thundereggrecords.com/' },
    {
      name: 'Minecraft Mods',
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
        { name: 'National Parks', path: '/photos/national-parks' },
        { name: 'American South', path: '/photos/american-south' },
        { name: 'Misc', path: '/photos/misc' }
      ]
    },
    { name: 'Biznes Card', path: '/biznes-card' }
  ]
};

const NavigationItem = ({ 
  item, 
  level = 0, 
  isLastChild = false 
}: { 
  item: MenuItem; 
  level?: number;
  isLastChild?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    if (item.children) {
      setIsOpen(!isOpen);
    }
    setVisited(true);
  };

  return (
    <div className="relative">
      <div className="flex items-center h-8">
        <div className="flex items-center">
          {level > 0 && (
            <>
              {Array.from({ length: level - 1 }).map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <div className="w-[1px] h-full bg-white"/>
                </div>
              ))}
              <div className="w-8 h-8 flex items-center justify-center text-white">
                {isLastChild ? '└' : '├'}
              </div>
              <div className="w-4 h-8 flex items-center justify-center text-white">
                ──
              </div>
            </>
          )}
          <div 
            className="flex items-center cursor-pointer"
            onClick={handleClick}
          >
            <span className="mr-1 text-base">
              {item.children ? (isOpen ? '📂' : '📁') : '📄'}
            </span>
            {item.children && level === 0 ? (
              <Link 
                to={item.path}
                className={`font-mono hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} ${level === 0 ? 'text-xl' : 'text-base'}`}
              >
                {item.name}
              </Link>
            ) : item.children ? (
              <span 
                className={`font-mono hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} ${level === 0 ? 'text-xl' : 'text-base'}`}
              >
                {item.name}
              </span>
            ) : item.path.startsWith('http') ? (
              <a 
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-mono hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} text-base`}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                to={item.path} 
                className={`font-mono hover:text-blue-400 ${visited ? 'text-blue-400' : 'text-white'} text-base`}
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
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const NavigationMenu = () => {
  return (
    <div className="font-mono pl-2">
      <NavigationItem item={menuData} />
    </div>
  );
};