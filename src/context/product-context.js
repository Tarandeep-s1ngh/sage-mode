// import { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const ProductContext = createContext(null);

// const ProductProvider = ({ children }) => {
//   const [state, setState] = useState([]);

//   useEffect(() => {
//     (async () => {
//       const res = await axios.get("/api/products");
//       const data = res.data.products;
//       setState(data);
//     })();
//   }, []);

//   return (
//     <ProductContext.Provider value={{ state }}>
//       {children}
//     </ProductContext.Provider>
//   );
// };

// const useProduct = () => useContext(ProductContext);

// export { ProductProvider, useProduct };
