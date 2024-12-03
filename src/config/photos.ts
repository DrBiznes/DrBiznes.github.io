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
            imageUrl: '/photos/national-parks/katmai/noblebear.jpeg',
            title: 'Noble Bear',
            description: 'Noble bear is a big bear. He is a good bear. He is a noble bear. Look at him stand on that rock.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/iditarod.jpeg',
            title: 'Iditarod',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/national-parks/katmai/backwardbear.jpeg',
            title: 'Backwards Bear',
            description: 'Stupid idiot bear doesn\'t realize he\'s facing the wrong way. The fish are on the other side dummy.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/tenthousandsmokes.jpeg',
            title: 'Ten Thousand Smokes',
            description: 'A breathtaking sunset over the rugged landscape'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/national-parks/katmai/noblebear.jpeg',
            type: 'image',
            title: 'Noble Bear',
            description: 'Noble bear is a big bear. He is a good bear. He is a noble bear. Look at him stand on that rock.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/iditarod.jpeg',
            type: 'image',
            title: 'Iditarod',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/national-parks/katmai/backwardbear.jpeg',
            type: 'image',
            title: 'Backward Bear',
            description: 'Stupid idiot bear doesn\'t realize he\'s facing the wrong way. The fish are on the other side dummy.'
          },
          {
            imageUrl: '/photos/national-parks/katmai/tenthousandsmokes.jpeg',
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
        description: 'Majestic granite cliffs, waterfalls, and scenic vistas captured during Summer 2024',
        photos: [
          {
            imageUrl: '/photos/national-parks/yosemite/summer-2024/CathedralLakeLoop.JPEG',
            title: 'Cathedral Lake Loop',
            description: 'Had the whole lake to ourselves. I saw a family of deer on the way out. They were so cute!!!'
          },
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
        title: 'New Orleans, LA',
        description: 'The vibrant culture and historic architecture of the Crescent City',
        photos: [
          {
            imageUrl: '/photos/american-south/new-orleans/french-quarter.jpeg',
            title: 'French Quarter',
            description: 'Historic buildings with traditional iron balconies'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/streetcar.jpeg',
            title: 'St. Charles Streetcar',
            description: 'Historic streetcar rolling through the Garden District'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/cafe.jpeg',
            title: 'Café du Monde',
            description: 'Famous café known for beignets and café au lait'
          },
          {
            imageUrl: '/photos/american-south/new-orleans/jazz.jpeg',
            title: 'Jazz on Frenchmen',
            description: 'Live jazz performance in the evening'
          }
        ],
        allPhotos: [
          // Same as photos array for now, can be expanded later
        ]
      },
      {
        id: 'saint-francisville',
        folderId: 'american-south/saint-francisville',
        title: 'Saint Francisville, LA',
        description: 'A historic town known for its antebellum plantations and gardens',
        photos: [
          {
            imageUrl: '/photos/american-south/saint-francisville/rosedown.jpeg',
            title: 'Rosedown Plantation',
            description: 'Historic plantation house with formal gardens'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/oakley.jpeg',
            title: 'Oakley House',
            description: 'Historic home of naturalist John James Audubon'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/grace.jpeg',
            title: 'Grace Episcopal Church',
            description: 'Gothic Revival church dating from 1858'
          },
          {
            imageUrl: '/photos/american-south/saint-francisville/downtown.jpeg',
            title: 'Historic Downtown',
            description: 'Charming main street with antique shops and cafes'
          }
        ],
        allPhotos: [
          // Same as photos array for now, can be expanded later
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