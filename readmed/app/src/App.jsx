import { useResource } from './hocks/useResource';
import { Header } from './components/layouts/Header'
import { Types } from './components/Types'
import { API } from './config';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './components/layouts/Footer';
import { TypeDetails } from './components/TypeDetails';

function App() {

  const { types, setTypes, resources, setResources } = useResource();

  useEffect(() => {
    const fetchTypes = async () => {
      const url = `${API}/types`
      const response = await fetch(url);
      const data = await response.json();
      setTypes(data);
    }
    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchTypes = async () => {
      const url = `${API}/resources`
      const response = await fetch(url);
      const data = await response.json();
      setResources(data);
    }
    fetchTypes();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/progressmed" element={
          <>
            <Header />
            <Types types={types} />
            <Footer />
          </>} />
          <Route path="/progressmed/:name" element={
          <>
            <Header />
            <TypeDetails resources={resources} types={types} />
            <Footer />
          </>} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
