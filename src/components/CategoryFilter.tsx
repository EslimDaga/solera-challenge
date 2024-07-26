const categories = ["Todos", "Autos", "Salud", "Hogar"];

const CategoryFilter: React.FC<{
  filterCategory: string;
  setFilterCategory: (category: string) => void;
}> = ({ filterCategory, setFilterCategory }) => (
  <div className="mb-4">
    <label
      htmlFor="categoryFilter"
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      Filtrar por Categoría
    </label>
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-lg ${
            filterCategory === category
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilterCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  </div>
);

export default CategoryFilter;
