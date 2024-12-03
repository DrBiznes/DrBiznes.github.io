export interface PhotoItem {
  imageUrl: string;
  title: string;
  description?: string;
  type?: 'image' | 'video';
  thumbnailUrl?: string;
}

interface PhotoSet {
  id: string;
  title: string;
  description: string;
  folderId: string;
  photos: PhotoItem[];
  allPhotos: PhotoItem[];
}

interface PhotoGallery {
  id: string;
  title: string;
  description: string;
  photoSets: PhotoSet[];
}

export const photoGalleries: Record<string, PhotoGallery> = {
  'national-parks': {
    id: 'national-parks',
    title: 'National Parks',
    description: 'A collection of photographs from various National Parks across the United States',
    photoSets: [
      {
        id: 'katmai',
        folderId: 'national-parks/katmai',
        title: 'Katmai National Park',
        description: 'Very first time entering the lottery for Katmai and we got in. We were so excited. We had no idea what we were getting into. We were not prepared for the bears. We were not prepared for the bears. We were not prepared for the bears.',
        photos: [
          {
            imageUrl: '/photos/national-parks/katmai/NobleBear.JPEG',
            title: 'Noble Bear',
            description: 'Noble bear is a big bear. He is a good bear. He is a noble bear. Look at him stand on that rock.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/Iditarod.JPEG',
            title: 'Iditarod',
            description: 'This was us on our way to the airport.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/BackwardBear.JPEG',
            title: 'Backwards Bear',
            description: 'Stupid idiot bear doesn\'t realize he\'s facing the wrong way. The fish are on the other side dummy.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/TenThousandSmokes.JPEG',
            title: 'Ten Thousand Smokes',
            description: 'Hands down the coolest name for a valley, shoutout to the Sugpiaq people.'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/national-parks/katmai/NobleBear.JPEG',
            type: 'image',
            title: 'Noble Bear',
            description: 'Noble bear is a big bear. He is a good bear. He is a noble bear. Look at him stand on that rock.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/Iditarod.JPEG',
            type: 'image',
            title: 'Iditarod',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/national-parks/katmai/BackwardBear.JPEG',
            type: 'image',
            title: 'Backward Bear',
            description: 'Stupid idiot bear doesn\'t realize he\'s facing the wrong way. The fish are on the other side dummy.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/TenThousandSmokes.JPEG',
            type: 'image',
            title: 'Ten Thousand Smokes',
            description: 'A breathtaking sunset over the rugged landscape'
          },
          {
            imageUrl: '/photos/national-parks/katmai/CoolestNameForAValley.JPEG',
            type: 'image',
            title: 'Coolest Name For a Valley',
          },
          {
            imageUrl: '/photos/national-parks/katmai/JerryBruckheimerTree.JPEG',
            type: 'image',
            title: 'Jerry Bruckheimer Tree',
          },
          {
            imageUrl: '/photos/national-parks/katmai/NoSuddenMovesOne.JPEG',
            type: 'image',
            title: 'No Sudden Moves One',
          },
          {
            imageUrl: '/photos/national-parks/katmai/NoSuddenMovesTwo.MP4',
            type: 'video',
            title: 'No Sudden Moves Two',
            thumbnailUrl: '/photos/national-parks/katmai/NoSuddenMovesOne.JPEG'
          },
          {
            imageUrl: '/photos/national-parks/katmai/NobleBear.JPEG',
            type: 'image',
            title: 'Noble Bear',
          },
          {
            imageUrl: '/photos/national-parks/katmai/TenthousandSmokes.JPEG',
            type: 'image',
            title: 'Ten Thousand Smokes',
          },
          {
            imageUrl: '/photos/national-parks/katmai/TheShow.JPEG',
            type: 'image',
            title: 'The Show',
          },
          {
            imageUrl: '/photos/national-parks/katmai/WadingBear.JPEG',
            type: 'image',
            title: 'Wading Bear',
          },
          {
            imageUrl: '/photos/national-parks/katmai/a-Short-Hike.JPEG',
            type: 'image',
            title: 'A Short Hike',
          },
        ]        
      },
      {
        id: 'yosemite-summer-2024',
        folderId: 'national-parks/yosemite/summer-2024',
        title: 'Yosemite Summer 2024',
        description: 'Anytime I suggested doing a hike more than 5 miles they said I aint doin all that.',
        photos: [
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/JustEnoughMist.JPEG',
            title: 'Just Enough Mist',
            description: 'Just enough mist for our own personal rainbow.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/Dome-pinch.JPEG',
            title: 'Dome Pinch',
            description: 'He tried to squish Half Dome between his fingers. How original.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/CathedralLakeLoop.JPEG',
            title: 'Cathedral Lake Loop',
            description: 'Had the whole lake to ourselves. I saw a family of deer on the way out. They were so cute!!!'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/InAwe.JPEG',
            title: 'In Awe',
            description: 'Vernal falls never disappoints. Except for the day we went.'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/CathedralLakeLoop.JPEG',
            type: 'image',
            title: 'Cathedral Lake Loop',
            description: 'Had the whole lake to ourselves. I saw a family of deer on the way out. They were so cute!!!'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/JustEnoughMist.JPEG',
            type: 'image',
            title: 'Just Enough Mist',
            description: 'Just enough mist for our own personal rainbow.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/Dome-pinch.JPEG',
            type: 'image',
            title: 'Dome Pinch',
            description: 'He tried to squish Half Dome between his fingers. How original.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/InAwe.JPEG',
            type: 'image',
            title: 'In Awe',
            description: 'Vernal falls never disappoints. Except for the day we went.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/EveningDome.JPEG',
            type: 'image',
            title: 'Evening Dome',
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/TenayaValley.JPEG',
            type: 'image',
            title: 'Above Tenaya',
          },
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/TreePinch.JPEG',
            type: 'image',
            title: 'Tree Pinch',
          }
        ]        
      },
      {
        id: 'yosemite-winter-2023',
        folderId: 'national-parks/yosemite/winter-2023',
        title: 'Yosemite Winter 2023',
        description: 'My whole life I\'ve wanted to see Yosemite covered in snow. Well, I finally go in the winter and the snow melts one day after we get there. I guess I\'ll just have to go back again.',
        photos: [
          {
            imageUrl: '/photos/national-parks/yosemite/winter-2023/FilledMyBottle.JPG',
            title: 'Filled My Bottle',
            description: 'Dipped my water bottle in the creek to fill it up. The ranger told me if I drank it, I would die. I did not listen.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/winter-2023/Pohono.JPEG',
            title: 'Pohono',
            description: 'Pohono mean Spirit of the puffing wind. The wind bellows and roars against Bridalveil Falls so much that the waterfall sometimes flows up.'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/winter-2023/WorstPhotoScanEver.JPG',
            title: 'Worst Photo Scan Ever',
            description: 'Good luck trying to figure out where this is Georainbolt'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/winter-2023/upper-falls.JPEG',
            title: 'Upper Falls',
            description: 'Only a tiny trickle of water flowing down upper Yosemite Falls :('
          }
        ],
        allPhotos: [
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/FilledMyBottle.JPG",
            "type": "image",
            "title": "Filled My Bottle",
            "description": "Dipped my water bottle in the creek to fill it up. The ranger told me if I drank it, I would die. I did not listen."
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/Pohono.JPEG",
            "type": "image",
            "title": "Pohono",
            "description": "Pohono mean Spirit of the puffing wind. The wind bellows and roars against Bridalveil Falls so much that the waterfall sometimes flows up."
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/WorstPhotoScanEver.JPG",
            "type": "image",
            "title": "Worst Photo Scan Ever",
            "description": "Good luck trying to figure out where this is Georainbolt"
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/upper-falls.JPEG",
            "type": "image",
            "title": "Upper Falls",
            "description": "Only a tiny trickle of water flowing down upper Yosemite Falls :("
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/LookAtTheDummyInTheBerryHat.jpg",
            "type": "image",
            "title": "Look At The Dummy In The Berry Hat",
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/PuffingWind.JPG",
            "type": "image",
            "title": "Puffing Wind",
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/distant-falls.JPEG",
            "type": "image",
            "title": "Distant Falls",
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/secunda.JPEG",
            "type": "image",
            "title": "Secunda",
          },
          {
            "imageUrl": "/photos/national-parks/yosemite/winter-2023/skyFalling.JPG",
            "type": "image",
            "title": "Sky Falling",
          },
        ]        
      }
    ]
  },
  'american-south': {
    id: 'american-south',
    title: 'American South',
    description: 'Exploring the culture and beauty of the American South',
    photoSets: [
      {
        id: 'new-orleans',
        folderId: 'american-south/new-orleans',
        title: 'New Orleans',
        description: 'The most culturally rich city in America. The food is amazing. The people are amazing. The music is amazing. The history is amazing. The architecture is amazing. The weather is horrible. The food is amazing.',
        photos: [
          {
            imageUrl: '/photos/american-south/new-orleans/BoilNotice.JPEG',
            title: 'Boil Notice',
            description: 'Like ten days after we ate at this place, they had to reset the boil notice board.'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/I-Am-Loved.JPEG',
            title: 'I Am Loved',
            description: '@CEEDAMESSENGER is the greatest messenger and poet in the world please keep grafiting the sidewalks of new orleans'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/WW2-Museum-Soldier-Sketch.JPEG',
            title: 'WW2 Museum Soldier Sketch',
            description: 'I visit the WWII museum every time I go to New Orleans, but the doctors say I\'m not autistic.'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/AudubonButterfly.JPEG',
            title: 'Audubon Butterfly',
            description: 'I\'m not sure if this is a butterfly or a moth. I\'m not a scientist.'
          }
        ],
        allPhotos: [
          {
            "imageUrl": "/photos/american-south/new-orleans/BoilNotice.JPEG",
            "type": "image",
            "title": "Boil Notice",
            "description": "Like ten days after we ate at this place, they had to reset the boil notice board."
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/I-Am-Loved.JPEG",
            "type": "image",
            "title": "I Am Loved",
            "description": "@CEEDAMESSENGER is the greatest messenger and poet in the world please keep grafiting the sidewalks of new orleans"
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/WW2-Museum-Soldier-Sketch.JPEG",
            "type": "image",
            "title": "WW2 Museum Soldier Sketch",
            "description": "I visit the WWII museum every time I go to New Orleans, but the doctors say I'm not allowed to remember anything."
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/AudubonButterfly.JPEG",
            "type": "image",
            "title": "Audubon Butterfly",
            "description": "I'm not sure if this is a butterfly or a moth. I'm not a scientist."
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/I-Am-Funny.JPEG",
            "type": "image",
            "title": "I Am Funny",
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/I-Am-Strong.JPEG",
            "type": "image",
            "title": "I Am Strong",
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/I-AmBeautifulInsideAndOut.JPEG",
            "type": "image",
            "title": "I Am Beautiful Inside And Out",
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/I-Rise-I-Rise-I-Rise.JPEG",
            "type": "image",
            "title": "I Rise I Rise I Rise",
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/LayersOfClouds.JPEG",
            "type": "image",
            "title": "Layers Of Clouds",
          },
          {
            "imageUrl": "/photos/american-south/new-orleans/Jellyfish.JPG",
            "type": "image",
            "title": "Jellyfish",
          }
        ]        
      },
      {
        id: 'saint-francisville',
        folderId: 'american-south/saint-francisville',
        title: 'Saint Francisville',
        description: 'This is where my grandma lives, and my mom grew up. There sure are a lot of plantations nearby, but don\'t worry, we don\'t live on one.',
        photos: [
          {
            imageUrl: '/photos/american-south/saint-francisville/BackyardSunset.JPG',
            title: 'Backyard Sunset',
            description: 'Everyone always talks about the Los Angeles sunsets but LA sunsets are better.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/GrandmasGator.JPEG',
            title: 'Grandmas Gator',
            description: 'This little guy lives in the pond behind grandma\'s house.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/GrandmasSwing.jpeg',
            title: 'Grandmas Swing',
            description: 'Having a porch with a swing is the american dream.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/OrbWeaverOne.JPEG',
            title: 'Orb Weaver',
            description: 'Armies of orb weavers surround the forests of Saint Francisville. I am terrified but they are beautiful.'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/american-south/saint-francisville/BackyardSunset.JPG',
            type: 'image',
            title: 'Backyard Sunset',
            description: 'Everyone always talks about the Los Angeles sunsets but LA sunsets are better.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/GrandmasGator.JPEG',
            type: 'image',
            title: 'Grandmas Gator',
            description: 'This little guy lives in the pond behind grandma\'s house.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/GrandmasSwing.jpeg',
            type: 'image',
            title: 'Grandmas Swing',
            description: 'Having a porch with a swing is the american dream.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/OrbWeaverOne.JPEG',
            type: 'image',
            title: 'Orb Weaver One',
            description: 'Armies of orb weavers surround the forests of Saint Francisville. I am terrified but they are beautiful.'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/OrbWeaver.mp4',
            type: 'video',
            title: 'Orb Weaver',
            thumbnailUrl: '/photos/american-south/saint-francisville/OrbWeaverOne.JPEG'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/OrbWeaverTwo.JPEG',
            type: 'image',
            title: 'Orb Weaver Two',
          }
        ]        
      }
    ]
  }
};

/*
  To expand the gallery using the four-photo system:
  1. Add a new PhotoSet object to the `photoSets` array within the desired gallery.
  2. Each PhotoSet should contain:
     - A `title` for the set
     - A `description` for the set
     - A `folderId` to identify the complete photo collection
     - An array of `photos` for the preview (exactly 4 photos)
     - An array of `allPhotos` containing all photos for the gallery view
  3. Each photo (in both arrays) must have:
     - `imageUrl`: Path to the image
     - `title`: Title of the photo
     - `description`: Description of the photo
  4. The `photos` array must contain exactly four photos for consistent layout
  5. The `allPhotos` array can contain any number of photos and is used by the gallery view
  6. Add additional galleries by creating new entries in the `photoGalleries` object
  
  Photo Array Usage:
  - `photos`: Used for the preview grid on the main photos page (must be exactly 4 photos)
  - `allPhotos`: Used for the full-screen gallery view, can contain all photos in the set
    including ones not shown in the preview. This allows for a larger collection to be
    viewed in the gallery while maintaining a consistent preview layout.

  To add multiple photo sets to one page:
  - Simply add multiple PhotoSet objects to the `photoSets` array
  - Each set will be displayed vertically on the page in the order they appear in the array
  Example:
    photoSets: [
      { first set of 4 photos... },
      { second set of 4 photos... },
      { third set of 4 photos... }
    ]
*/