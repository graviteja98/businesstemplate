
import "./App.css";
import Appbar from "./components/Appbar";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./theme";
import { Route, Routes } from "react-router";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Event from "./components/Event";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
      <Appbar />
        <Routes>
          <Route path="/" element={<Appbar/>}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path="event" element={<Event />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
