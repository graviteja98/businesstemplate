import "./App.css";
import Appbar from "./components/Appbar";
import { ThemeProvider } from "@mui/material/styles";
import myTheme from "./theme";
import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";
import { Skeleton } from "@mui/material";
import styled from "@emotion/styled";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Event = lazy(() => import("./components/Event"));
const Contact = lazy(() => import("./components/Contact"));
const NotFound = lazy(() => import("./components/NotFound"));
const Footer = lazy(() => import("./components/Footer"));
function App() {
  const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
  }));
  const FallbackUI = () => {
    return (
      <>
        {/* Rectangular Skeleton */}
        <StyledSkeleton variant="rectangular" width={300} height={200} />

        {/* Circular Skeleton */}
        {/* <StyledSkeleton variant="circular" width={40} height={40} /> */}

        {/* Text Line Skeleton */}
        <StyledSkeleton variant="text" />

        {/* Multiple Text Lines Skeleton */}
        <StyledSkeleton variant="text" />
        <StyledSkeleton variant="text" />
        <StyledSkeleton variant="text" />
      </>
    );
  };
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<FallbackUI />}>
                <Appbar />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<FallbackUI />}>
                  <Home />
                </Suspense>
              }
            />
            <Route path="home" element={<Home />} />
            <Route
              path="about"
              element={
                <Suspense fallback={<FallbackUI />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="event"
              element={
                <Suspense fallback={<FallbackUI />}>
                  <Event />
                </Suspense>
              }
            />
            <Route
              path="contact"
              element={
                <Suspense fallback={<FallbackUI />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<FallbackUI />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Route>
        </Routes>
        <Suspense fallback={<FallbackUI />}>
        <Footer />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
