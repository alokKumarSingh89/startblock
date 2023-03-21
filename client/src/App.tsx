import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ArticleList } from './components/Articles';
import { Article } from './components/Articles/Article';
import { ArticleForm } from './components/Articles/Article.form';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ArticleList />,
  },
  {
    path: "/:id",
    element: <Article />,
  },
  {
    path: "/new",
    element: <ArticleForm />,
  },
  {
    path: "/:id/edit",
    element: <ArticleForm />,
  },
]);

function App() {
  return (
    <div>
      <Header />
      <div className='container mx-auto mt-5'>
        <RouterProvider router={router} />
      </div>

    </div>
  );
}

export default App;
