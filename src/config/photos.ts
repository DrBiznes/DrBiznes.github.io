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
          // Including all preview photos in the allPhotos array
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
      }
    ]
  }
};

/*
  To expand the gallery using the four-photo system:
  1. Add a new PhotoSet object to the `photoSets` array within the desired gallery.
  2. Each PhotoSet should contain:
     - A `title` for the set.
     - A `description` for the set.
     - A `folderId` to identify the complete photo collection.
     - An array of `photos` for the preview (exactly 4 photos), each with:
       - `imageUrl`: Path to the image.
       - `title`: Title of the photo.
       - `description`: Description of the photo.
     - An array of `allPhotos` containing all photos in the folder.
  3. Ensure each preview set contains exactly four photos for consistent layout.
  4. Add additional galleries by creating new entries in the `photoGalleries` object.
  
  To add multiple photo sets to one page:
  - Simply add multiple PhotoSet objects to the `photoSets` array.
  - Each set will be displayed vertically on the page in the order they appear in the array.
  Example:
    photoSets: [
      { first set of 4 photos... },
      { second set of 4 photos... },
      { third set of 4 photos... }
    ]
*/