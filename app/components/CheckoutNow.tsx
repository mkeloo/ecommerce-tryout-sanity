'use client';
import { Button } from '@/components/ui/button';
import { useShoppingCart } from 'use-shopping-cart';

const CheckoutNow = () => {
  const { addItem, handleCartClick } = useShoppingCart();
  return <Button>Checkout Now</Button>;
};
export default CheckoutNow;
