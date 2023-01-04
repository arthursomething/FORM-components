import { useState } from 'react';
// import reactLogo from '../assets/react.svg';
import './rowGallery.css';

function RowGallery() {
  // const [count, setCount] = useState(0);

  return (
    <div className="rowGallery">
      <div className="imgBlock" id="a">
        a
      </div>
      <div className="imgBlock" id="b">
        b
      </div>
      <div className="imgBlock" id="c">
        c
      </div>
      <div className="imgBlock" id="d">
        d
      </div>
    </div>
  );
}

export default RowGallery;
