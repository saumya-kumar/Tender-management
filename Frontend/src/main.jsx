/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx'

import { Provider } from 'react-redux';
import store from './store/store.js'

import {PersistGate} from 'redux-persist/integration/react'
import {persistStore} from 'redux-persist'
import CreateTender from './components/admin/CreateTender.jsx'
import AllTender from './components/admin/AllTender.jsx'
import BidTender from './components/tender/BidTender.jsx'
import TenderDetails from './components/admin/tenderDetails.jsx'
import TendersList from './components/tender/TendersList.jsx'

let persistor = persistStore(store);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "/login",
            element: (
                <Login />
            ),
        },
        {
            path: "/signup",
            element: (
              <Signup />
            ),
        },
        {
          path: "/create-tender",
          element: (
            <CreateTender/>
          ),
        },
        {
          path: "/all-tender",
          element: (
            <AllTender/>
          ),
        },
        {
          path: "/bid-tender/:id",
          element: (
            <BidTender/>
          ),
        },
        {
          path: "/tender/:id", 
          element: <TenderDetails />,
        },
        {
          path:'/tenders',
          element:<TendersList/>
        }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <RouterProvider router={router}/>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
