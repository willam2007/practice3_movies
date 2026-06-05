import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Main from './main/Main';
import MoviePage from './movie/MoviePage';
import List from './list/List';
import Chart from './chart/Chart';
import Testing from './testing/Testing';

const router = createBrowserRouter([
  { path: '/', element: <Main /> },
  { path: '/movie/:id', element: <MoviePage /> },
  { path: '/list', element: <List /> },
  { path: '/chart', element: <Chart /> },
  { path: '/testing', element: <Testing /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
