const UNITS = [
    {
        label: 'Kilos',
        value: 'kilos',
      },
      {
        label: 'Pounds',
        value: 'pounds'
      },
];
const GENDER = [
  {
    label: 'Man',
    value: 'men',
  },
  {
    label: 'Woman',
    value: 'women'
  },
];
const EVENTS = [
  {
    label:  'Raw',
    value: 'raw'
  },
  {
    label: 'Equipped',
    value: 'equipped',
  },
];
const LIFTS = [
  {
    label: '3-Lift',
    value: 'threeLift'
  },
  {
    label: 'Bench',
    value: 'bench',
  },
];
const CONSTANTS = {
  men: {
    raw: {
      threeLift: [310.67,	857.785,	53.216,	147.0835],
      bench: [86.4745, 259.155, 17.57845, 53.122],
    },
    equipped: {
      threeLift: [387.265, 1121.28, 80.6324, 222.4896],
      bench: [133.94, 441.465, 35.3938, 113.0057],
    },
  },
  women: {
    raw: {
      threeLift: [125.1435, 228.03, 34.5246, 86.8301],
      bench: [25.0485, 43.848, 6.7172, 13.952],
    },
    equipped: {
      threeLift: [176.58, 373.315, 48.4534, 110.0103],
      bench: [49.106, 124.209, 23.199, 67.4926],
    },
  },
};

const WILKS_CONSTANTS = {
  men: {
    a: -216.0475144,
    b: 16.2606339,
    c: -0.002388645,
    d: -0.00113732,
    e: 7.01863E-06,
    f: -1.291E-08
  },
  women: {
    a: 594.31747775582,
    b: -27.23842536447,
    c: 0.82112226871,
    d: -0.00930733913,
    e: 4.731582E-05,
    f: -9.054E-08
  }
};

export {
    UNITS,
    GENDER,
    EVENTS,
    LIFTS,
    CONSTANTS,
    WILKS_CONSTANTS
}