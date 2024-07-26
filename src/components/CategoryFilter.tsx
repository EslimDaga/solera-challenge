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
      <button
        className={`px-4 py-2 rounded-lg ${
          filterCategory === "Todos"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilterCategory("Todos")}
      >
        Todos
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${
          filterCategory === "Autos"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilterCategory("Autos")}
      >
        Autos
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${
          filterCategory === "Salud"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilterCategory("Salud")}
      >
        Salud
      </button>
      <button
        className={`px-4 py-2 rounded-lg ${
          filterCategory === "Hogar"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => setFilterCategory("Hogar")}
      >
        Hogar
      </button>
    </div>
  </div>
);

export default CategoryFilter;
