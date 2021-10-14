import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Prev } from "react-bootstrap/esm/PageItem";
const words = ["Web Developer && Software Engineer"];

const HomeTitle = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  //blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((Prev) => !Prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  //Typewriter
  useEffect(() => {
    if (index   === words.length) return;
    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ){
      setReverse(true);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((Prev) => Prev + 1)
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((Prev) => Prev + (reverse ? -1 : 1))
    }, 200);
  })


  return (
   <div className="alfredosTypoContainer">
      <p className='alfredosCardTypo'>{`${words[index].substring(0, subIndex)} ${blink ? "|" : ""}`}</p>

   </div>
    
  );
};

export default HomeTitle;
