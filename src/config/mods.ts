export interface ModConfig {
    id: string;
    title: string;
    description: string;
    iconUrl: string;
    githubUrl: string;
    modrinthUrl: string;
    curseforgeUrl: string;
    readmeUrl: string;
  }
  
  export const mods: Record<string, ModConfig> = {
    'wynn-weapon-bigger': {
      id: 'wynn-weapon-bigger',
      title: 'Wynncraft Weapon Bigger',
      description: 'I make your weapon big, duh. A fork of Big Items, Duh designed to only show Wynncraft gear and updated to 1.21.',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/WynnWeaponViewer',
      modrinthUrl: 'https://modrinth.com/mod/wynnweaponbigger',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/wynnweaponbigger',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/WynnWeaponViewer/master/README.md'
    },
    'wynnlodgrabber': {
      id: 'wynnlodgrabber',
      title: 'WynnLODGrabber',
      description: 'Automatically download the Distant Horizons LODs for Wynncraft',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/WynnLODGrabber',
      modrinthUrl: 'https://modrinth.com/mod/wynnlodgrabber',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/wynnlodgrabber',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/WynnLODGrabber/master/README.md'
    },
    'wynnvista': {
      id: 'wynnvista',
      title: 'WynnVista',
      description: 'Automagically adjusts Distant Horizons render distance when outside the Wynncraft map.',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/WynnVista',
      modrinthUrl: 'https://modrinth.com/mod/wynnvista',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/wynnvista',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/WynnVista/master/README.md'
    },
    'wynnbubbles': {
      id: 'wynnbubbles',
      title: 'WynnBubbles',
      description: 'Wynncraft chat floats above players\' heads and changes colors for party, guild, and private chat.',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/WynnBubbles',
      modrinthUrl: 'https://modrinth.com/mod/wynnbubbles',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/wynnbubbles',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/WynnBubbles/main/README.md'
    },
    'class-keybind-profiles': {
      id: 'class-keybind-profiles',
      title: 'Class Keybind Profiles',
      description: 'Automatically switches between presaved keybind profiles for Wynncraft classes.',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/Class-Keybind-Profiles',
      modrinthUrl: 'https://modrinth.com/mod/class-keybind-profiles',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/class-keybind-profiles',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/Class-Keybind-Profiles/master/README.md'
    },
    'nimble-rewynnded': {
      id: 'nimble-rewynnded',
      title: 'Nimble ReWynnded',
      description: 'Wynncraft-specific camera utilities, inspired by the mod Nimble.',
      iconUrl: '/path-to-icon.png',
      githubUrl: 'https://github.com/DrBiznes/Nimble-ReWynnded',
      modrinthUrl: 'https://modrinth.com/mod/nimble-rewynnded',
      curseforgeUrl: 'https://www.curseforge.com/minecraft/mc-mods/nimble-rewynnded',
      readmeUrl: 'https://raw.githubusercontent.com/DrBiznes/Nimble-ReWynnded/master/README.md'
    }
  };