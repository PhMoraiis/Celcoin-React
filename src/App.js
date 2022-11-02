import './index.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  function BuildImage() {

    const [image, setImage] = useState([]);

    useEffect(() => {
      const requisicao = axios.get('https://dog.ceo/api/breeds/image/random');

      requisicao.then((response) => {
        setImage(response.data.message);
      });
    }, []);

    if (image === null) {
      return <p>Carregando imagem...</p>;
    }
}

const image = BuildImage();
return (
  <div className="view">
    <div className="image">
      {image}
    </div>
  </div>
);

}

export default App;
