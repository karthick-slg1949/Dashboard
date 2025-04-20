// import React from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';
// import Category from './Category';
// import SearchWidget from './SearchWidget';

// const Dashboard = () => {
//   const categories = useDashboardStore((state) => state.categories);

//   return (
//     <div>
//       <SearchWidget />
//       {categories.map((category) => (
//         <Category key={category.id} category={category} />
//       ))}
//     </div>
//   );
// };

// export default Dashboard;
// import React from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';
// import Category from './Category';
// import SearchWidget from './SearchWidget';
// import ManageCategories from './ManageCategories';

// const Dashboard = () => {
//   const categories = useDashboardStore((state) => state.categories);

//   return (
//     <div>
//       <SearchWidget />
//       <ManageCategories />
//       {categories
//         .filter((c) => c.enabled)
//         .map((category) => (
//           <Category key={category.id} category={category} />
//         ))}
//     </div>
//   );
// };

// export default Dashboard;
import React from 'react';
import { useDashboardStore } from '../Store/useDashboardStore';
import Category from './Category';
import SearchWidget from './SearchWidget';
import ManageCategories from './ManageCategories';

const Dashboard = () => {
  const categories = useDashboardStore((state) => state.categories);

  return (
    <div className="p-4 space-y-6 max-w-4xl mx-auto">
      {/* Search Bar */}
      <SearchWidget />

      {/* Category Manager */}
      <ManageCategories />

      {/* Render Enabled Categories Only */}
      {(categories || [])
        .filter((c) => c.enabled)
        .map((category) => (
          <Category key={category.id} category={category} />
        ))}
    </div>
  );
};

export default Dashboard;
