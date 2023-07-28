import { useEffect, useRef, useState } from "react";
import packIcon from "../assets/icons/pack-icon.svg";
import RedArrowIcon from "../assets/icons/red-arrow.svg";
import { ImageWrap, ImgContain } from "../styles";
import {
  Dropdown,
  DropdownArrow,
  DropdownItem,
  DropdownWrap,
} from "../styles/DropdownStyles";

const dropdownItems = ["small pack", "medium pack", "large pack"];

enum DropdownValueType {
  small = "small pack",
  medium = "medium pack",
  large = "large pack",
  unselected = "choose your pack",
}

const DropdownSection = () => {
  const [dropdownValue, setDropdownValue] = useState<DropdownValueType>(
    DropdownValueType.unselected
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // handling a dropdown closing whenever a user clicks outside of the dropdown
  useEffect(() => {
    const handleDropdown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    addEventListener("mousedown", handleDropdown);

    return () => {
      removeEventListener("mousedown", handleDropdown);
    };
  });

  return (
    <div ref={dropdownRef} style={{ display: "flex", gap: 20 }}>
      <ImageWrap width={60} height={60}>
        <ImgContain src={packIcon} alt="pack" />
      </ImageWrap>
      <DropdownWrap onClick={() => setIsOpen(!isOpen)}>
        <p>{dropdownValue}</p>
        <DropdownArrow $isOpen={isOpen}>
          <ImageWrap width={24} height={24}>
            <ImgContain src={RedArrowIcon} alt="arrow" />
          </ImageWrap>
        </DropdownArrow>
        {isOpen && (
          <Dropdown>
            {dropdownItems.map((item, index) => (
              <DropdownItem
                key={index}
                onClick={() => setDropdownValue(item as DropdownValueType)}
              >
                {item}
              </DropdownItem>
            ))}
          </Dropdown>
        )}
      </DropdownWrap>
    </div>
  );
};

export default DropdownSection;
