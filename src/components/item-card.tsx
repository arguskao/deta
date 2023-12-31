import React from 'react';
import { CURRENCY } from 'helpers/constants';
import CounterAlt from './animated-counter';
import {
  ItemCardBase,
  ItemCardBaseContent,
  ItemCardImage,
  ItemCardContent,
  ItemCardPrice,
  ItemCardName,
  ItemCardInformation,
  ItemCardType,
  ItemCardRoundedDot,
  ItemCardQuantity,
  ItemCardDetailsButton,
  ItemCardCounterWrapper,
} from './utils/theme';
import Image from 'next/image';

interface ItemProps {
  image: string;
  name: string;
  price: number;
  type: string;
  quantity: number;
}

interface ItemCardProps {
  item: ItemProps;
  value: number;
  onClick?: (e: any) => void;
  onDecrement?: (e: any) => void;
  onIncrement?: (e: any) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  onClick,
  onDecrement,
  onIncrement,
  value,
}) => {
  const baseClassName = ItemCardBase + ' ' + (value ? 'shadow-cart' : '');
  return (
    <div className={baseClassName}>
      <div className={ItemCardBaseContent}>
        <div className={ItemCardImage}>
          <Image
            src={item?.image}
            alt={' Alt ' + item?.name}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={item.image}
          />
        </div>

        <div className={ItemCardContent}>
          <span className={ItemCardPrice}>
            {CURRENCY}
            {item.price}
          </span>
          <span className={ItemCardName}>{item.name}</span>

          <div className={ItemCardInformation}>
            <span className={ItemCardType}>{item.type}</span>
            <span className={ItemCardRoundedDot} />
            <span className={ItemCardQuantity}>{item.quantity} 單位</span>
          </div>

          <button className={ItemCardDetailsButton} onClick={onClick}>
            詳細資訊
          </button>

          <div className={ItemCardCounterWrapper}>
            <CounterAlt
              value={value}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
