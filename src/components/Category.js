// import React, { useState } from 'react';
// import Widget from './Widget';
// import AddWidgetForm from './AddWidgetForm';

// const Category = ({ category }) => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="category">
//   <h2>{category.name}</h2>
//   <button onClick={() => setShowForm(!showForm)}>
//     {showForm ? 'Close' : '+ Add Widget'}
//   </button>
//   {showForm && <AddWidgetForm categoryId={category.id} />}
//   {category.widgets.map((widget) => (
//     <Widget key={widget.id} widget={widget} categoryId={category.id} />
//   ))}
// </div>

//   );
// };

// export default Category;
// import React, { useState } from 'react';
// import Widget from './Widget';
// import AddWidgetForm from './AddWidgetForm';

// const Category = ({ category }) => {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div className="category">
//       <h2>{category.name}</h2>
//       <button onClick={() => setShowForm(!showForm)}>
//         {showForm ? 'Close' : '+ Add Widget'}
//       </button>
//       {showForm && <AddWidgetForm categoryId={category.id} />}
//       {category.widgets.map((widget) => (
//         <Widget key={widget.id} widget={widget} categoryId={category.id} />
//       ))}
//     </div>
//   );
// };

// export default Category;
import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="category border rounded p-4 mb-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{category.name}</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          {showForm ? 'Close' : '+ Add Widget'}
        </button>
      </div>

      {showForm && (
        <div className="mb-4">
          <AddWidgetForm categoryId={category.id} />
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {(category.widgets || []).map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryId={category.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
