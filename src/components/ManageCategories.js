import React from 'react';
import { useDashboardStore } from '../Store/useDashboardStore';

const ManageCategories = () => {
  const categories = useDashboardStore((state) => state.categories) || [];
  const toggleCategory = useDashboardStore((state) => state.toggleCategory);

  return (
    <div className="mb-6 p-4 border rounded shadow">
      <h3 className="text-lg font-semibold mb-3">Manage Categories</h3>
      <div className="space-y-2">
        {categories.map((cat) => (
          <label key={cat.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={cat.enabled}
              onChange={() => toggleCategory(cat.id)}
              className="accent-blue-600"
            />
            <span>{cat.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ManageCategories;
