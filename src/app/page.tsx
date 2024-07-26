"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import CategoryFilter from "@/components/CategoryFilter";
import Header from "@/components/Header";
import { Service } from "@/types/service";
import ServiceForm from "@/components/ServiceForm";
import ServiceList from "@/components/ServiceList";

const Home: React.FC = () => {
  const [services, setServices] = useState<Service[]>([
    {
      title: "Cambio de aceite",
      description: "Cambio de aceite y filtro de aceite",
      category: "Autos",
    },
    {
      title: "Consulta médica",
      description: "Consulta médica general",
      category: "Salud",
    },
    {
      title: "Limpieza de hogar",
      description: "Limpieza de hogar general",
      category: "Hogar",
    },
    {
      title: "Cambio de frenos",
      description: "Cambio de pastillas de frenos",
      category: "Autos",
    },
    {
      title: "Consulta dental",
      description: "Consulta dental general",
      category: "Salud",
    },
    {
      title: "Limpieza de alfombras",
      description: "Limpieza de alfombras en el hogar",
      category: "Hogar",
    },
  ]);
  const [newService, setNewService] = useState<Service>({
    title: "",
    description: "",
    category: "Autos",
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("Todos");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewService((prevService) => ({
      ...prevService,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing && editingIndex !== null) {
      const updatedServices = [...services];
      updatedServices[editingIndex] = newService;
      setServices(updatedServices);
      setIsEditing(false);
      setEditingIndex(null);
    } else {
      setServices((prevServices) => [...prevServices, newService]);
    }
    setNewService({ title: "", description: "", category: "Autos" });
  };

  const handleEdit = (index: number) => {
    setNewService(services[index]);
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = (index: number) => {
    setServices((prevServices) => prevServices.filter((_, i) => i !== index));
    if (isEditing && editingIndex === index) {
      setIsEditing(false);
      setEditingIndex(null);
      setNewService({ title: "", description: "", category: "Autos" });
    }
  };

  const filteredServices =
    filterCategory === "Todos"
      ? services
      : services.filter((service) => service.category === filterCategory);

  return (
    <>
      <Header />
      <div className="container mx-auto max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-3">
            <CategoryFilter
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
            />
            <ServiceList
              services={filteredServices}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </div>
          <ServiceForm
            newService={newService}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
