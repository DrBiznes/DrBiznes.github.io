interface PhotoItem {
  imageUrl: string;
  title: string;
  description: string;
}

interface PhotoSet {
  title: string;
  description: string;
  photos: PhotoItem[];
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
        title: 'Denali National Park',
        description: 'Summer expedition through Alaska\'s crown jewel',
        photos: [
          {
            imageUrl: '/photos/denali/valley-view.jpg',
            title: 'Valley View',
            description: 'Expansive valley view with Mount McKinley in the background'
          },
          {
            imageUrl: '/photos/denali/lake.jpg',
            title: 'Serene Lake',
            description: 'A tranquil lake reflecting the surrounding mountains'
          },
          {
            imageUrl: '/photos/denali/wildlife.jpg',
            title: 'Wildlife',
            description: 'A glimpse of the diverse wildlife in the park'
          },
          {
            imageUrl: '/photos/denali/sunset.jpg',
            title: 'Sunset Vista',
            description: 'A breathtaking sunset over the rugged landscape'
          }
        ]
      },
      // Add more photo sets here...
    ]
  },
  // Add more galleries here...
};

/*
  To expand the gallery using the four-photo system:
  1. Add a new PhotoSet object to the `photoSets` array within the desired gallery.
  2. Each PhotoSet should contain:
     - A `title` for the set.
     - A `description` for the set.
     - An array of `photos`, each with:
       - `imageUrl`: Path to the image.
       - `title`: Title of the photo.
       - `description`: Description of the photo.
  3. Ensure each set contains exactly four photos for consistent layout.
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