import { ElementType, Fragment } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import routes from './routes'
// const darkTheme = createTheme({ palette: { mode: 'dark' } })
const lightTheme = createTheme({ palette: { mode: 'light' } })
function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            let Layout: ElementType | undefined = Fragment
            const Component = route.component

            if (route.layout) Layout = route.layout

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Component />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  )
}
export default App
