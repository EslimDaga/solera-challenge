import { ChangeEvent, FormEvent } from "react";

import { Service } from "@/types/service";

const ServiceForm: React.FC<{
  newService: Service;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isEditing: boolean;
}> = ({ newService, handleChange, handleSubmit, isEditing }) => (
  <div className="lg:col-span-1 border p-4 rounded-xl shadow-md">
    <h2 className="text-xl font-bold mb-4">
      {isEditing ? "Editar Servicio" : "Agregar Servicio"}
    </h2>
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          type="text"
          name="title"
          value={newService.title}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-xl shadow-sm p-2 focus:outline-none focus:ring-black focus:border-black"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Descripción
        </label>
        <textarea
          name="description"
          className="mt-1 block w-full border-2 border-gray-300 rounded-xl shadow-sm p-2 focus:outline-none focus:ring-black focus:border-black"
          rows={5}
          minLength={10}
          maxLength={50}
          value={newService.description}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Categoría
        </label>
        <select
          name="category"
          className="mt-1 block w-full border-2 border-gray-300 rounded-xl shadow-sm p-2 focus:outline-none focus:ring-black focus:border-black"
          value={newService.category}
          onChange={handleChange}
          required
        >
          <option value="Autos">Autos</option>
          <option value="Salud">Salud</option>
          <option value="Hogar">Hogar</option>
        </select>
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="border-2 text-green-500 border-green-500 px-4 py-2 rounded-xl hover:bg-green-500 hover:text-white focus:outline-none"
        >
          {isEditing ? "Actualizar" : "Grabar"}
        </button>
        <button
          type="button"
          className="border-2 text-red-500 border-red-500 px-4 py-2 rounded-xl hover:bg-red-500 hover:text-white focus:outline-none"
        >
          Cancelar
        </button>
      </div>
    </form>
  </div>
);

export default ServiceForm;
