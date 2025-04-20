// import { create } from 'zustand';
// import { v4 as uuidv4 } from 'uuid';
// import initialData from '../data/initialData.json';

// export const useDashboardStore = create((set) => ({
//   categories: initialData.categories,

//   addWidget: (categoryId, name, text) => {
//     set((state) => ({
//       categories: state.categories.map((cat) =>
//         cat.id === categoryId
//           ? {
//               ...cat,
//               widgets: [...cat.widgets, { id: uuidv4(), name, text }],
//             }
//           : cat
//       ),
//     }));
//   },

//   removeWidget: (categoryId, widgetId) => {
//     set((state) => ({
//       categories: state.categories.map((cat) =>
//         cat.id === categoryId
//           ? {
//               ...cat,
//               widgets: cat.widgets.filter((w) => w.id !== widgetId),
//             }
//           : cat
//       ),
//     }));
//   },
// }));
// import { create } from 'zustand';
// import { v4 as uuidv4 } from 'uuid';
// import initial from '../data/initialData.json';

// export const useDashboardStore = create((set) => ({
//   categories: initial.categories,

//   addWidget: (categoryId, name, text) => {
//     set((state) => ({
//       categories: state.categories.map((cat) =>
//         cat.id === categoryId
//           ? {
//               ...cat,
//               widgets: [...cat.widgets, { id: uuidv4(), name, text }]
//             }
//           : cat
//       )
//     }));
//   },

//   removeWidget: (categoryId, widgetId) => {
//     set((state) => ({
//       categories: state.categories.map((cat) =>
//         cat.id === categoryId
//           ? {
//               ...cat,
//               widgets: cat.widgets.filter((w) => w.id !== widgetId)
//             }
//           : cat
//       )
//     }));
//   },

//   toggleCategory: (categoryId) => {
//     set((state) => ({
//       categories: state.categories.map((cat) =>
//         cat.id === categoryId ? { ...cat, enabled: !cat.enabled } : cat
//       )
//     }));
//   }
// }));
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// export const useDashboardStore = create(
//   persist(
//     (set) => ({
//       categories: [
//         {
//           id: 'cat1',
//           name: 'CSPM Executive Dashboard',
//           enabled: true,
//           widgets: []
//         },
//         {
//           id: 'cat2',
//           name: 'Cloud Inventory',
//           enabled: true,
//           widgets: []
//         }
//       ],

//       addWidget: (categoryId, widget) =>
//         set((state) => ({
//           categories: state.categories.map((cat) =>
//             cat.id === categoryId
//               ? { ...cat, widgets: [...cat.widgets, widget] }
//               : cat
//           )
//         })),

//       removeWidget: (categoryId, widgetId) =>
//         set((state) => ({
//           categories: state.categories.map((cat) =>
//             cat.id === categoryId
//               ? {
//                   ...cat,
//                   widgets: cat.widgets.filter((w) => w.id !== widgetId)
//                 }
//               : cat
//           )
//         }))
//     }),
//     {
//       name: 'dashboard-store', // Key in localStorage
//       getStorage: () => localStorage
//     }
//   )
// );
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useDashboardStore = create(
  persist(
    (set) => ({
      categories: [
        {
          id: 'cat1',
          name: 'CSPM Executive Dashboard',
          enabled: true,
          widgets: []
        },
        {
          id: 'cat2',
          name: 'Cloud Inventory',
          enabled: true,
          widgets: []
        }
      ],

      // ✅ Add widget to a category
      addWidget: (categoryId, widget) =>
        set((state) => ({
          categories: state.categories.map((cat) =>
            cat.id === categoryId
              ? { ...cat, widgets: [...cat.widgets, widget] }
              : cat
          )
        })),

      // ✅ Remove widget from a category
      removeWidget: (categoryId, widgetId) =>
        set((state) => ({
          categories: state.categories.map((cat) =>
            cat.id === categoryId
              ? {
                  ...cat,
                  widgets: cat.widgets.filter((w) => w.id !== widgetId)
                }
              : cat
          )
        })),

      // ✅ Toggle category visibility
      toggleCategory: (categoryId) =>
        set((state) => ({
          categories: state.categories.map((cat) =>
            cat.id === categoryId
              ? { ...cat, enabled: !cat.enabled }
              : cat
          )
        }))
    }),
    {
      name: 'dashboard-store', // Key in localStorage
      getStorage: () => localStorage
    }
  )
);

