import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';

// import DefaultLayout from './layout/DefaultLayout';
// import HeaderOnly from './layout/HeaderOnly';
import { DefaultLayout, HeaderOnly } from './layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import './layout/responsive/responsive.module.scss';

library.add(faEarthAmericas);

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  let Layout = '';
                  switch (route.layout) {
                     case HeaderOnly:
                        Layout = HeaderOnly;
                        console.log('headeronly');
                        break;
                     case DefaultLayout:
                        console.log('defaultLayout');
                        Layout = DefaultLayout;
                        break;
                     default:
                        console.log('default');
                        Layout = DefaultLayout;
                  }

                  const Page = route.component;
                  return (
                     <Route
                        key={index}
                        path={route.path}
                        element={
                           <Layout>
                              <Page />
                           </Layout>
                        }
                     />
                  );
               })}
            </Routes>
         </div>
      </Router>
   );
}

export default App;
