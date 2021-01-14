/* 
  Example workout api, obviously the real thing would likely have some async calls to some endpoints to fetch this data
  I would use the fetchApi and have some apiUtils to provide some abstraction like `defaultPost(data)` which would look 
  something like this:
    export function defaultPost(payload) {
      return {
        method: 'POST',
        body: JSON.stringify(payload),
      };
    }

  then the fetch is as simple as `await fetch(url, defaultPost(payload));`
}*/

// Returns a list of all available workouts
// TODO: Max P - Return only a certain number then load more as the user scrolls...
// TODO: (cont) what if there are 1,000,000 workouts?
export function getWorkouts() {
  return [
    {
      id: 0,
      title: 'Lake Inniscarra, Ireland - Pyramid',
      assetTitle: 'lake-inniscarra',
      trainer: 'Jane Doe',
      details: 'Lorem ipsum',
      duration: '30:53',
      distance: '6,248 M',
      isSeries: false,
      tags: ['Ireland', 'Pyramid', 'Jane Doe'],
    },
    {
      id: 1,
      title: 'Performance Series',
      assetTitle: 'performance-series',
      trainer: 'Jane Smith',
      details: 'Lorem ipsum',
      isSeries: true,
      totalWorkouts: 9,
      seriesWorkoutIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      tags: ['Performance Series', 'Jane Smith'],
    },
    {
      id: 2,
      title: 'Slow Pulls and Fast Intervals',
      assetTitle: 'slow-pulls',
      trainer: 'Sasha Jacobs',
      details: 'Lorem ipsum',
      duration: '44:13',
      distance: '9,948 M',
      isSeries: false,
      tags: ['Slow Pulls', 'Fast Intervals', 'Sasha Jacobs'],
    },
    {
      id: 3,
      title: '20 Minutes to Toned',
      assetTitle: '20-minutes-to-toned',
      trainer: 'John Doe',
      details: 'Lorem ipsum',
      isSeries: true,
      totalWorkouts: 12,
      seriesWorkoutIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      tags: ['Tone', '20 minutes', 'John Doe'],
    },
    {
      id: 4,
      title: 'Charles Race, Boston, Massachusetts',
      assetTitle: 'charles-race',
      trainer: 'Tommy Rivers Puzey',
      details: 'Lorem ipsum',
      duration: '36:22',
      distance: '8,648 M',
      isSeries: false,
      tags: ['Tommy Rivers Puzey', 'Boston', 'Charles Race', 'Massachusetts'],
    },
    {
      id: 5,
      title: 'Full-Body HIIT Series',
      assetTitle: 'full-body-hiit',
      trainer: 'Sandra Johnson',
      details: 'Lorem ipsum',
      isSeries: true,
      totalWorkouts: 12,
      seriesWorkoutIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      tags: ['HIIT', 'Full-Body', 'Sandra Johnson'],
    },
    {
      id: 6,
      title: 'Kafue River, Zambia - Power Stroke Pyramid',
      assetTitle: 'kafue-river',
      trainer: 'Mark Mason',
      details: 'Lorem ipsum',
      duration: '22:22',
      distance: '4,660 M',
      isSeries: false,
      tags: ['Kafue River', 'Zambia', 'Power Stroke Pyramid', 'Mark Mason'],
    },
    {
      id: 7,
      title: 'Shred & Burn Series',
      assetTitle: 'shred-and-burn',
      trainer: 'Tony Roberts',
      details: 'Lorem ipsum',
      isSeries: true,
      totalWorkouts: 16,
      seriesWorkoutIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      tags: ['Shred', 'Burn', 'Tony Roberts'],
    },
  ];
}

export default {
  getWorkouts,
};
