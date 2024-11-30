interface PhotoItem {
  imageUrl: string;
  title: string;
  description: string;
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
        description: 'BEARS BEARS BEARS BEARS BEARS',
        photos: [
          {
            imageUrl: '/photos/national-parks/katmai/noblebear.jpeg',
            title: 'Valley View',
            description: 'Expansive valley view with Mount McKinley in the background'
          },
          {
            imageUrl: '/photos/national-parks/katmai/iditarod.jpeg',
            title: 'Serene Lake',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/national-parks/katmai/backwardbear.jpeg',
            title: 'Wildlife',
            description: 'A glimpse of the diverse wildlife in the park'
          },
          {
            imageUrl: '/photos/national-parks/katmai/tenthousandsmokes.jpeg',
            title: 'Sunset Vista',
            description: 'A breathtaking sunset over the rugged landscape'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/national-parks/katmai/noblebear.jpeg',
            title: 'Valley View',
            description: 'Expansive valley view with Mount McKinley in the background'
          },
          {
            imageUrl: '/photos/national-parks/katmai/iditarod.jpeg',
            title: 'Serene Lake',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/national-parks/katmai/backwardbear.jpeg',
            title: 'Wildlife',
            description: 'A glimpse of the diverse wildlife in the park'
          },
          {
            imageUrl: '/photos/national-parks/katmai/tenthousandsmokes.jpeg',
            title: 'Sunset Vista',
            description: 'A breathtaking sunset over the rugged landscape'
          }
        ]
      },
      {
        id: 'yosemite',
        folderId: 'national-parks/yosemite',
        title: 'Yosemite National Park',
        description: 'Majestic granite cliffs, waterfalls, and scenic vistas captured during Summer 2024',
        photos: [
          {
            imageUrl: '/photos/national-parks/yosemite/half-dome.jpeg',
            title: 'Half Dome at Sunset',
            description: 'The iconic Half Dome glowing in the golden evening light'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/yosemite-falls.jpeg',
            title: 'Yosemite Falls',
            description: 'The magnificent Yosemite Falls in full summer flow'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/tunnel-view.jpeg',
            title: 'Tunnel View Vista',
            description: 'Classic view of Yosemite Valley with El Capitan and Bridalveil Fall'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/meadow-wildflowers.jpeg',
            title: 'Valley Meadow',
            description: 'Summer wildflowers blooming in a peaceful Yosemite Valley meadow'
          }
        ],
        allPhotos: [
          {
            imageUrl: '/photos/national-parks/yosemite/half-dome.jpeg',
            title: 'Half Dome at Sunset',
            description: 'The iconic Half Dome glowing in the golden evening light'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/yosemite-falls.jpeg',
            title: 'Yosemite Falls',
            description: 'The magnificent Yosemite Falls in full summer flow'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/tunnel-view.jpeg',
            title: 'Tunnel View Vista',
            description: 'Classic view of Yosemite Valley with El Capitan and Bridalveil Fall'
          },
          {
            imageUrl: '/photos/national-parks/yosemite/meadow-wildflowers.jpeg',
            title: 'Valley Meadow',
            description: 'Summer wildflowers blooming in a peaceful Yosemite Valley meadow'
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