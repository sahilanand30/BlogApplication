import React from 'react';
import './App.css';
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

const App = () => {
  return (
    <UserContextProvider>
    <Routes>
      <Route exact path='/' element={<Layout />}>
        <Route exact path={'/'} element={<IndexPage/>} />
        <Route exact path={'/login'} element={ <LoginPage/> } />
        <Route exact path={'/register'} element={<RegisterPage/>} />
        <Route exact path={'/create'} element={<CreatePost/>} />
        <Route exact path={'/post/:id'} element={<PostPage/>} />
        <Route exact path={'/edit/:id'} element={<EditPost/>} />
      </Route>
    </Routes>
    </UserContextProvider>
  );
}

export default App;