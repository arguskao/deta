/* eslint-disable @next/next/no-img-element */
import CurrencyFormat from 'react-currency-format';
import Counter from './counter';
import { CURRENCY } from 'helpers/constants';
import { useCart } from 'contexts/cart/cart.provider';
import {
  CartItemBase,
  CartItemImage,
  CartItemContent,
  CartItemName,
  CartItemSinglePrice,
  CartItemTotalWrapper,
  CartItemTotalPrice,
} from './utils/theme';

type CartItemProps = {
  item: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { addItem, removeItem } = useCart();

  return (
    <div className={CartItemBase}>
      <div className={CartItemImage}>
        <img src={item.image} alt={item.name} />
      </div>

      <div className={CartItemContent}>
        <span className={CartItemName}>{item.name}</span>
        <span className={CartItemSinglePrice}>
          單價 &nbsp;
          {CURRENCY}
          {item.price}
        </span>

        <div className={CartItemTotalWrapper}>
          <Counter
            value={item.quantity}
            onIncrement={() => addItem(item)}
            onDecrement={() => removeItem(item)}
          />

          <span className={CartItemTotalPrice}>
            <CurrencyFormat
              value={(item.price * item.quantity).toFixed(2)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={CURRENCY}
            />
            {/* {CURRENCY}
            {(item.price * item.quantity).toFixed(2)} */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
