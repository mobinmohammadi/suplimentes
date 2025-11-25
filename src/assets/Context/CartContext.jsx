import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [countProduct, setCountProduct] = useState(null);

  const cartUser = useNavigate();
  const [allPriceInBasket, setAllPriceInBasket] = useState(0);

  const saveInToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeInBasket = (productID) => {
    setCart((prevCart) => {
      let product = prevCart.find((product) => product.id === productID);
      if (!product) return prevCart;

      if (product.count > 1) {
        return prevCart.map((item) =>
          item.id === productID ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.id !== productID);
      }
    });
  };
  const addToCart = (product) => {
    const updateLocalStorage = (updatedCart) => {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    if (countProduct > 1) {
      const existing = cart.find((item) => item.id === product.id);

      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              setCart((prevCart) => {
                const exist = prevCart.find((item) => item.id === product.id);
                let updatedCart;

                if (exist) {
                  updatedCart = prevCart.map((item) =>
                    item.id === product.id
                      ? { ...item, count: item.count + Number(countProduct) }
                      : item
                  );
                } else {
                  updatedCart = [
                    ...prevCart,
                    { ...product, count: Number(countProduct) },
                  ];
                }

                updateLocalStorage(updatedCart);
                return updatedCart;
              });

              setTimeout(() => {
                cartUser("/cart");
              }, 2000);

              resolve();
            } catch (error) {
              reject();
            }
          }, 1000);
        }),
        {
          pending: "در حال افزودن به سبد خرید...",
          success: existing
            ? `${countProduct} عدد دیگر اضافه شد ✅`
            : "محصول به سبد خرید اضافه شد ✅",
          error: "افزودن به سبد خرید با خطا مواجه شد ❌",
        }
      );
    } else {
      const existing = cart.find((item) => item.id === product.id);

      toast.promise(
        new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              setCart((prevCart) => {
                const exist = prevCart.find((item) => item.id === product.id);
                let updatedCart;

                if (exist) {
                  updatedCart = prevCart.map((item) =>
                    item.id === product.id
                      ? { ...item, count: item.count + 1 }
                      : item
                  );
                } else {
                  updatedCart = [...prevCart, { ...product, count: 1 }];
                }

                updateLocalStorage(updatedCart);
                return updatedCart;
              });

              setTimeout(() => {
                cartUser("/cart");
              }, 2000);

              resolve();
            } catch (error) {
              reject();
            }
          }, 1000);
        }),
        {
          pending: "در حال افزودن به سبد خرید...",
          success: existing
            ? "۱ عدد دیگر اضافه شد ✅"
            : "محصول به سبد خرید اضافه شد ✅",
          error: "افزودن به سبد خرید با خطا مواجه شد ❌",
        }
      );
    }
  };

  function allPriceArrayBasket() {
    const allPrice = cart
      .flatMap((item) => item.price * item.count)
      .reduce((num, acc) => acc + num, 0);
    setAllPriceInBasket(allPrice);
  }

  const discountProductInBasket = (product) => {
    setCart((prev) => {
      let exist = prev.find((item) => item.id === product.id);
      if (exist.count > 1) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count - 1 } : item
        );
      } else {
        return prev.filter((item) => item.id !== product.id);
      }
    });
  };

  useEffect(() => {
    saveInToLocalStorage(cart);
    allPriceArrayBasket();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCountProduct,
        removeInBasket,
        discountProductInBasket,
        allPriceInBasket,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
