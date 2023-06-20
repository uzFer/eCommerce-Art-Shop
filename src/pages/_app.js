import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Courier+Prime&family=Poppins&family=Quicksand&display=swap');
  
  body {
    background-color: #eee;
    padding: 0;
    margin: 0 0 50px 0;
    font-family: 'Courier New', monospace;
  }
`;

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps}/>
      </CartContextProvider>
    </>
  )
}
 