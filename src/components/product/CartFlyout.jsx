import { useStore } from '@nanostores/solid';
import { isCartOpen } from '../cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen() ? <aside>...</aside> : null;
}