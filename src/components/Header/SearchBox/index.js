{/* import { Button } from '@mui/material';
import { IoSearch } from 'react-icons/io5';
const SearchBox = () => {
    return (
        <div className="headerSearch ml-3 mr-3">
            <input type="text" placeholder='Search for products...'/>
            <Button><IoSearch/></Button>
        </div>
    )
} 
export default SearchBox;
*/}


import React, { useState, useEffect } from 'react';
import { IoSearch } from 'react-icons/io5'; // cleaner search icon
import { Button } from '@mui/material';
import { TbDropletSearch } from "react-icons/tb";

const SearchBox = () => {
  const placeholders = [
    { text: "Find ink "},
    { text: "Try 'dragon' " },
    { text: "Top ink " },
    { text: "Floral " },
    { text: "Bold looks " },
    { text: "New drop " },
    { text: "Tattoo sets " },
    { text: "Quick pick " }
  ];

  const usePlaceholderTyping = (speed = 100, delay = 1500) => {
    const [placeholder, setPlaceholder] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
      const current = placeholders[index];

      if (!reverse && subIndex === current.text.length){
        setTimeout(() => setReverse(true), delay);
        return;
      }
      if (reverse && subIndex === 0) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % placeholders.length);
        return;
      }

      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, reverse ? speed / 2 : speed);

      setPlaceholder(current.text.substring(0, subIndex));
      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return placeholder;
  };

  const animatedPlaceholder = usePlaceholderTyping();

  return (
    <div className="headerSearch">
      <input
        type="text"
        placeholder={animatedPlaceholder}
        className="searchInput"
      />
      <Button className="searchBtn">
        <IoSearch size={18} />
      </Button>
    </div>
  );
};

export default SearchBox;
