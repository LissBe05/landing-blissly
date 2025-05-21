import Image from 'next/image';
import { FC } from 'react';

interface DishCardProps {
  image: string;
  name: string;
  calories: number;
  price: number;
  isActive?: boolean;
}

const DishCard: FC<DishCardProps> = ({ image, name, calories, price, isActive }) => {
  return (
    <div className={`relative flex flex-col items-center p-4 rounded-3xl bg-white shadow-md transition-transform ${isActive ? 'scale-105' : ''}`}>
      <div className="relative w-28 h-28">
        <Image src={image} alt={name} fill className="rounded-full object-cover" />
        <div className="absolute top-0 right-0 w-6 h-6 bg-black text-white flex items-center justify-center rounded-full text-xs cursor-pointer">
          🛒
        </div>
      </div>
      <h3 className="mt-4 text-center font-medium">{name}</h3>
      <p className="text-sm text-gray-500">{calories} calories</p>
      <p className="mt-2 font-semibold">${price.toFixed(2)}</p>
    </div>
  );
};

export default DishCard;
