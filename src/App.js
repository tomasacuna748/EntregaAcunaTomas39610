
import './components/styles.css';


import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

import { Children } from 'react';

function App() {
  return (
    <>
    <NavBar/>
    <section className='bkground min-h-screen'>
    
    <div className="tituloObjeto">

      <ItemListContainer name='Chanchito' imgN='0' price='2600' />
      <ItemListContainer name='Elefante' imgN='1' price='2500' />
      <ItemListContainer name='Lobo' imgN='2' price='2900' />
      <ItemListContainer name='Panda' imgN='3' price='2800' />
    </div>
    
    </section>
    

  
    </>
  );
}

export default App;
