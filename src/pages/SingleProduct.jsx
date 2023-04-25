import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((json) => setProduct(json));
  }, [id]);

  useEffect(()=> {

  }, [product])

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
}

export default SingleProduct;
