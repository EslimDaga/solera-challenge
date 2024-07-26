interface Service {
  title: string;
  description: string;
  category: string;
}

const ServiceList: React.FC<{
  services: Service[];
  handleEdit: (index: number) => void;
  handleDelete: (index: number) => void;
}> = ({ services, handleEdit, handleDelete }) => (
  <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {services.map((service, i) => (
      <div
        key={i}
        className="border max-h-52 rounded-xl shadow-md flex flex-col justify-between"
      >
        <span className="bg-blue-400 text-white p-2 rounded-t-xl">
          {service.category}
        </span>
        <h2 className="text-xl font-bold m-4">
          {service.title.length <= 20
            ? service.title
            : `${service.title.slice(0, 20)}...`}
        </h2>
        <p className="mb-4 mx-4">
          {service.description.length <= 40
            ? service.description
            : `${service.description.slice(0, 40)}...`}
        </p>
        <div className="flex justify-between bg-gray-100 w-full p-4">
          <button
            className="text-blue-500 hover:underline"
            onClick={() => handleEdit(i)}
          >
            Editar
          </button>
          <button
            className="text-red-500 hover:underline"
            onClick={() => handleDelete(i)}
          >
            Eliminar
          </button>
        </div>
      </div>
    ))}
  </div>
);

export default ServiceList;
