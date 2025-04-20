// import React, { useState } from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const AddWidgetForm = ({ categoryId }) => {
//   const [name, setName] = useState('');
//   const [text, setText] = useState('');
//   const addWidget = useDashboardStore((state) => state.addWidget);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addWidget(categoryId, name, text);
//     setName('');
//     setText('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Widget Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         placeholder="Widget Text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         required
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddWidgetForm;
// import React, { useState } from 'react';
// import { useDashboardStore } from '../Store/useDashboardStore';

// const AddWidgetForm = ({ categoryId }) => {
//   const [name, setName] = useState('');
//   const [text, setText] = useState('');
//   const addWidget = useDashboardStore((state) => state.addWidget);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && text) {
//       addWidget(categoryId, name, text);
//       setName('');
//       setText('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         placeholder="Widget Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//         placeholder="Widget Text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         required
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// export default AddWidgetForm;
import React, { useState } from 'react';
import { useDashboardStore } from '../Store/useDashboardStore';

const AddWidgetForm = ({ categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const addWidget = useDashboardStore((state) => state.addWidget);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && text) {
      const newWidget = {
        id: `wid-${Date.now()}`, // simple unique id
        name,
        text
      };

      addWidget(categoryId, newWidget); // ✅ now passing a valid widget object
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
  <input
    type="text"
    placeholder="Widget Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    required
    className="border px-2 py-1 rounded w-full"
  />
  <input
    type="text"
    placeholder="Widget Text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    required
    className="border px-2 py-1 rounded w-full"
  />
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
  >
    Add Widget
  </button>
</form>

  );
};

export default AddWidgetForm;
