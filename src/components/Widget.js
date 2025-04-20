// import React from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const Widget = ({ widget, categoryId }) => {
//   const removeWidget = useDashboardStore((state) => state.removeWidget);

//   return (
//     <div className="widget">
//   <strong>{widget.name}</strong>
//   <p>{widget.text}</p>
//   <button onClick={() => removeWidget(categoryId, widget.id)}>×</button>
// </div>
//   );
// };

// export default Widget;
// import React from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const Widget = ({ widget, categoryId }) => {
//   const removeWidget = useDashboardStore((state) => state.removeWidget);

//   return (
//     <div className="widget">
//       <strong>{widget.name}</strong>
//       <p>{widget.text}</p>
//       <button onClick={() => removeWidget(categoryId, widget.id)}>×</button>
//     </div>
//   );
// };

// export default Widget;
import React from 'react';
import { useDashboardStore } from '../Store/useDashboardStore';

const Widget = ({ widget, categoryId }) => {
  const removeWidget = useDashboardStore((state) => state.removeWidget);

  return (
    <div className="widget p-4 mb-4 border border-gray-300 rounded-md shadow-sm relative bg-white">
      <button
        onClick={() => removeWidget(categoryId, widget.id)}
        className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl focus:outline-none"
        aria-label={`Remove ${widget.name}`}
      >
        ×
      </button>
      <h4 className="text-lg font-semibold text-gray-800 mb-1">{widget.name}</h4>
      <p className="text-gray-600">{widget.text}</p>
    </div>
  );
};

export default Widget;
