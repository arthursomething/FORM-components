import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
import './rowGallery.css';

function RowGallery() {
  // const [count, setCount] = useState(0);

  return (
    <div className="rowGallery">
      <div className="imgBlock" id="a"></div>
      <div className="imgBlock" id="b"></div>
      <div className="imgBlock" id="c"></div>
      <div className="imgBlock" id="d"></div>
    </div>
  );
}

export default RowGallery;
