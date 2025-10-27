
import React from 'react';
import { Product } from '../types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="flex flex-col">
        <CardHeader>
            <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
            <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
            />
            <CardDescription>{product.description}</CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary">{product.price}</span>
            <Button>Ver Más</Button>
        </CardFooter>
    </Card>
  );
};

export default ProductCard;
