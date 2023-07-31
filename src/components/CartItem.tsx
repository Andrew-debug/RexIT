import { ImageWrap, ImgContain } from "../styles";
import { useDispatch } from "react-redux";
import { deleteItem } from "../features/cart/cartSlice";
import { ICracker } from "../types";
import BlackSeedIcon from "../assets/icons/black-seed.svg";
import RemoveIcon from "../assets/icons/remove.svg";
import {
  CartItemWrap,
  CropValue,
  CropValuesWrap,
  ItemPrice,
  ItemValuesWrap,
  ItemWeight,
  ItemWrap,
  SeedImageWrap,
} from "../styles/CartItemStyles";

const CartItem = ({
  item: { id, price, firstCrop, secondCrop, thirdCrop, fourthCrop },
}: {
  item: ICracker;
}) => {
  const dispatch = useDispatch();

  return (
    <CartItemWrap>
      <SeedImageWrap>
        <ImageWrap width={24} height={24}>
          <ImgContain src={BlackSeedIcon} alt="seed" />
        </ImageWrap>
      </SeedImageWrap>
      <ItemWrap>
        <ItemValuesWrap>
          <CropValuesWrap>
            <CropValue>{firstCrop}%</CropValue>
            <CropValue>{secondCrop}%</CropValue>
            <CropValue>{thirdCrop}%</CropValue>
            <CropValue>{fourthCrop}%</CropValue>
          </CropValuesWrap>
          <ItemWeight>1.25kg</ItemWeight>
          <ItemPrice>{price}&euro;</ItemPrice>
          <button onClick={() => dispatch(deleteItem(id))}>
            <ImageWrap width={24} height={24}>
              <ImgContain src={RemoveIcon} alt="remove" />
            </ImageWrap>
          </button>
        </ItemValuesWrap>
      </ItemWrap>
    </CartItemWrap>
  );
};

export default CartItem;
