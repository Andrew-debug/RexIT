import { useState } from "react";
import { ImageWrap, ImgContain } from "../styles";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import { AddToCartBtn } from "../styles/AddToCartButtonStyles";
import { v4 as uuidv4 } from "uuid";
import { ICracker } from "../types";
import Plus from "../assets/icons/plus.svg";

const AddToCartButton = ({ cracker }: { cracker: ICracker }) => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const dispatch = useDispatch();
  return (
    <AddToCartBtn
      $isBtnHovered={isBtnHovered}
      onMouseEnter={() => setIsBtnHovered(true)}
      onMouseLeave={() => setIsBtnHovered(false)}
      onClick={() =>
        dispatch(addItem({ ...cracker, id: uuidv4(), price: 143 }))
      }
    >
      {isBtnHovered && <span>add to cart</span>}
      <ImageWrap width={24} height={24}>
        <ImgContain src={Plus} alt="plus" />
      </ImageWrap>
    </AddToCartBtn>
  );
};

export default AddToCartButton;
