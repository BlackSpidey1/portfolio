import { useSelector,useDispatch } from "react-redux";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import Footer from "@/components/Footer/Footer";
import { useEffect } from "react";
import { initTheme } from "./store/theme/themeSlice";
import TypeIt from "typeit-react";

export default function App() {
  const theme = useSelector(state => state.theme.theme)
  console.log(theme);
  const dispatch = useDispatch();
  
  const wrapperClass = `wrapper ${theme}`
  
  useEffect(() => {
    dispatch(initTheme());
  },[])
  
  
  return (
    
    <div className={wrapperClass}>
      <Header />
      <Main />
      <Footer />
    </div>
    
  );
}
