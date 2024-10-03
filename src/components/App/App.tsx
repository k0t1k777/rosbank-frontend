import 'src/components/App/App.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { Main } from 'src/components/Main/Main';
import { Header } from 'src/components/Header/Header';

function App() {
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
