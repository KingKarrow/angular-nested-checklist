// import { of } from "rxjs";

export const mockChecklist = [
  {
    name: 'Big task',
    checked: false
  }
];

export const mockConfig = {
  checklist: mockChecklist
};

export const mockChecklistComplex = [
  { name: '1.0.0.0', checked: false, children: [
    { name: '1.1.0.0', checked: false, children: [
      { name: '1.1.1.0', checked: false, children: [
        { name: '1.1.1.1', checked: false },
        { name: '1.1.1.2', checked: false },
        { name: '1.1.1.3', checked: false }
      ]},
      { name: '1.1.2.0', checked: false }
    ]},
    { name: '1.2.0.0', checked: false, children: [
      { name: '1.2.1.0', checked: false },
      { name: '1.2.2.0', checked: false },
      { name: '1.2.3.0', checked: false, children: [
        { name: '1.2.3.1', checked: false },
        { name: '1.2.3.2', checked: false }
      ]},
    ]}
  ]}
];

export const mockConfigComplex = {
  checklist: mockChecklistComplex
};

export const mockChecklistComplexTrue = [
  { name: '1.0.0.0', checked: true, children: [
    { name: '1.1.0.0', checked: true, children: [
      { name: '1.1.1.0', checked: true, children: [
        { name: '1.1.1.1', checked: true },
        { name: '1.1.1.2', checked: true },
        { name: '1.1.1.3', checked: true }
      ]},
      { name: '1.1.2.0', checked: true }
    ]},
    { name: '1.2.0.0', checked: true, children: [
      { name: '1.2.1.0', checked: true },
      { name: '1.2.2.0', checked: true },
      { name: '1.2.3.0', checked: true, children: [
        { name: '1.2.3.1', checked: true },
        { name: '1.2.3.2', checked: true }
      ]},
    ]}
  ]}
];

// export const mockHttpClient = {
//   get: () => { return of(mockConfig) }
// }

// export const mockConfigService = {
//   _http: mockHttpClient,

// }
