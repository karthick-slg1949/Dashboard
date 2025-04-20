// import React, { useState } from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const SearchWidget = () => {
//   const [query, setQuery] = useState('');
//   const categories = useDashboardStore((state) => state.categories);

//   const results = categories
//     .flatMap((cat) =>
//       cat.widgets.map((w) => ({
//         ...w,
//         category: cat.name,
//       }))
//     )
//     .filter((w) => w.name.toLowerCase().includes(query.toLowerCase()));

//   return (
//     <div style={{ marginBottom: '2rem' }}>
//   <input
//     placeholder="Search widgets..."
//     value={query}
//     onChange={(e) => setQuery(e.target.value)}
//   />
//   {query && (
//     <ul style={{ marginTop: '1rem' }}>
//       {results.map((r) => (
//         <li key={r.id}>
//           {r.name} <em style={{ opacity: 0.7 }}>(in {r.category})</em>
//         </li>
//       ))}
//     </ul>
//   )}
// </div>
//   );
// };

// export default SearchWidget;
// import React, { useState } from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const SearchWidget = () => {
//   const [query, setQuery] = useState('');
//   const categories = useDashboardStore((state) => state.categories);
//   const [searchTerm, setSearchTerm] = useState('');


//   const results = categories
//     .flatMap((cat) =>
//       cat.widgets.map((w) => ({
//         ...w,
//         category: cat.name
//       }))
//     )
//     .filter((w) => w.name.toLowerCase().includes(query.toLowerCase()));

//   return (
//     <div style={{ marginBottom: '2rem' }}>
//       <input
//   type="text"
//   placeholder="Search widgets..."
//   value={searchTerm}
//   onChange={(e) => setSearchTerm(e.target.value)}
//   className="search-input"
// />
//       {query && (
//         <ul style={{ marginTop: '1rem' }}>
//           {results.map((r) => (
//             <li key={r.id}>
//               {r.name} (in <em>{r.category}</em>)
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default SearchWidget;
// import React, { useState } from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const SearchWidget = () => {
//   const [query, setQuery] = useState('');
//   const categories = useDashboardStore((state) => state.categories);

//   const results = categories
//     .flatMap((cat) =>
//       cat.widgets.map((w) => ({
//         ...w,
//         category: cat.name
//       }))
//     )
//     .filter((w) =>
//       w.name.toLowerCase().includes(query.toLowerCase()) ||
//       w.text.toLowerCase().includes(query.toLowerCase())
//     );

//   return (
//     <div style={{ marginBottom: '2rem' }}>
//       <input
//         type="text"
//         placeholder="Search widgets by name or text..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         style={{
//           padding: '0.5rem',
//           width: '100%',
//           maxWidth: '400px',
//           borderRadius: '4px',
//           border: '1px solid #ccc'
//         }}
//       />

//       {query && (
//         <div style={{ marginTop: '1rem' }}>
//           {results.length > 0 ? (
//             <ul>
//               {results.map((r) => (
//                 <li key={r.id}>
//                   <strong>{r.name}</strong> (in <em>{r.category}</em>) — {r.text}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No widgets found for "<strong>{query}</strong>"</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchWidget;

import React, { useState } from 'react';
import { useDashboardStore } from '../Store/useDashboardStore';
import { useDebounce } from '../Hook/useDebounce';

const SearchWidget = () => {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const categories = useDashboardStore((state) => state.categories) || [];

  const results = categories
    .flatMap((cat) =>
      (cat.widgets || [])
        .filter((w) => w && typeof w.name === 'string' && typeof w.text === 'string')
        .map((w) => ({
          ...w,
          category: cat.name,
        }))
    )
    .filter(
      (w) =>
        (w.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
         w.text.toLowerCase().includes(debouncedQuery.toLowerCase()))
    );

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 max-w-md w-full">
        <input
          type="text"
          placeholder="Search widgets by name or text..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Clear
          </button>
        )}
      </div>

      {debouncedQuery && (
        <div className="mt-4">
          {results.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {results.map((r) => (
                <li key={r.id}>
                  <span className="font-semibold">{r.name}</span> (in <em>{r.category}</em>) — {r.text}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 mt-2">
              No widgets found for "<strong>{debouncedQuery}</strong>"
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchWidget;
