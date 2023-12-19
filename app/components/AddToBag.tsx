'use client';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';
import { urlFor } from '../lib/sanity';

export interface ProductCartProps {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
}

const AddToBag = ({
  currency,
  description,
  image,
  name,
  price,
}: ProductCartProps) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    id: 'idkff',
  };
  return (
    <Button
      onClick={() => {
        addItem(product);
        handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
};
export default AddToBag;
