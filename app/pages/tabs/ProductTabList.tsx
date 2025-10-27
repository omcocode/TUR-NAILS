
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Desarrollo Web Personalizado',
    description: 'Creamos sitios web a medida, rápidos, seguros y optimizados para SEO, adaptados a las necesidades de tu negocio.',
    price: '$1500',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Aplicaciones Móviles Nativas',
    description: 'Desarrollamos aplicaciones para iOS y Android que ofrecen una experiencia de usuario excepcional y un rendimiento superior.',
    price: '$3000',
    imageUrl: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Consultoría de Software',
    description: 'Te ayudamos a planificar, diseñar y gestionar tus proyectos de software para garantizar el éxito y la eficiencia.',
    price: '$100/hr',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
    {
    id: 4,
    name: 'Soluciones en la Nube',
    description: 'Implementamos y gestionamos infraestructuras en la nube escalables y seguras con AWS, Azure o Google Cloud.',
    price: 'Personalizado',
    imageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const ProductosTab: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {mockProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductosTab;
