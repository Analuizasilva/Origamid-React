import React from "react";
import { GlobalContext } from "./GlobalContext";

const Products = () => {
  const global = React.useContext(GlobalContext);
  console.log(global);
  if (global.dados == null) return null;
  return (
    <>
      Products:
      <ul>
        {global.dados.map((product, index) => {
          return <li key={index}>{product.nome}</li>;
        })}
      </ul>
    </>
  );
};

export default Products;
