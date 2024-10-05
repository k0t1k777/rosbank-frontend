import 'src/components/App/App.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { Main } from 'src/components/Main/Main';
import { Header } from 'src/components/Header/Header';
import { useEffect, useState } from 'react';
import * as API from 'src/store/api'

function App() {
  const [emp, setEmp] = useState([])
  console.log('emp: ', emp);

  useEffect(() => {
    API.getEmployers()
    .then((data) => {
      setEmp(data)
    })
  }, [])


  return (
    <>
      <Sidebar />
      <div className='app__container'>
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
