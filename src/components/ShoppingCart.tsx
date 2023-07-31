import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ImageWrap, ImgContain } from "../styles";
import { calcTotals, selectCartItems } from "../features/cart/cartSlice";
import SeedIcon from "../assets/icons/seed.svg";
import WhiteArrowIcon from "../assets/icons/white-arrow.svg";
import Badge from "@mui/material/Badge";
import firstSlider from "../assets/icons/first-slider.svg";
import secondSlider from "../assets/icons/second-slider.svg";
import thirdSlider from "../assets/icons/third-slider.svg";
import fourthSlider from "../assets/icons/fourth-slider.svg";
import CartItem from "./CartItem";
import {
  ActionsWrap,
  Cart,
  CartButton,
  CartOpener,
  EmptryCart,
  ShoppingCartCropWrap,
  ShoppingCartWrap,
} from "../styles/ShoppingCartStyles";

const ShoppingCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector(selectCartItems);

  useEffect(() => {
    dispatch(calcTotals());
  }, [cartItems]);

  // handling shopping cart closing whenever a user clicks outside of the shoppingcart
  useEffect(() => {
    const handleDropdown = (e: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    addEventListener("mousedown", handleDropdown);

    return () => {
      removeEventListener("mousedown", handleDropdown);
    };
  });

  return (
    <ShoppingCartWrap ref={cartRef}>
      <Badge
        badgeContent={cartItems.length}
        sx={{
          "& .MuiBadge-badge": {
            color: "var(--white-text)",
            backgroundColor: "var(--primary-red)",
          },
        }}
      >
        <ImageWrap width={24} height={24}>
          <ImgContain src={SeedIcon} alt="seed" />
        </ImageWrap>
      </Badge>
      <div>total: {total}&euro;</div>
      <CartOpener onClick={() => setIsOpen(!isOpen)}>
        <p>details</p>
        <ImageWrap width={24} height={24}>
          <ImgContain src={WhiteArrowIcon} alt="arrow" />
        </ImageWrap>
      </CartOpener>
      {isOpen && (
        <Cart>
          {cartItems.length === 0 ? (
            <EmptryCart>no items</EmptryCart>
          ) : (
            <>
              <ShoppingCartCropWrap>
                <ImageWrap width={32} height={32}>
                  <ImgContain src={firstSlider} alt="crop" />
                </ImageWrap>
                <ImageWrap width={32} height={32}>
                  <ImgContain src={secondSlider} alt="crop" />
                </ImageWrap>
                <ImageWrap width={32} height={32}>
                  <ImgContain src={thirdSlider} alt="crop" />
                </ImageWrap>
                <ImageWrap width={32} height={32}>
                  <ImgContain src={fourthSlider} alt="crop" />
                </ImageWrap>
              </ShoppingCartCropWrap>
              {cartItems.map((item, index) => {
                return <CartItem key={index} item={item} />;
              })}
              <ActionsWrap>
                <div style={{ fontWeight: 400 }}>total: {total}&euro;</div>
                <CartButton>checkout</CartButton>
              </ActionsWrap>
            </>
          )}
        </Cart>
      )}
    </ShoppingCartWrap>
  );
};

export default ShoppingCart;
