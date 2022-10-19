//REACT
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

//COMPONENTS
import Loader from './Components/Loader/Loader';
import Header from './Components/Header/Header';
import './App.scss';

//ROUTES
const Login = React.lazy(() => import('./Containers/Login/Login'));


function App() {

  const loggedIn = false;
  const userType = 2;

  const user = useSelector(state => state);

  const [headerEnabled, setHeaderEnabled] = useState(true);

  useEffect(() => {
    if(user.loggedIn) {
      setHeaderEnabled(true)
    } else {
      setHeaderEnabled(false)
    }
  }, [user.loggedIn]);

  return (
    <div className="App">
        <React.Suspense
          fallback={<Loader />}
        >
          <Router>
            
              {headerEnabled && 
                <Header />
              }
              
              <Switch>

                {/* LOGIN */}
                <Route exact path='/' render={() => <Login />} >
                  {loggedIn && 
                    (userType === 1 ? <Redirect to='Home' /> : <Redirect to='Admin' />)
                  }
                </Route>



              </Switch>
          </Router>
        </React.Suspense>
    </div>
  );
}

export default App;