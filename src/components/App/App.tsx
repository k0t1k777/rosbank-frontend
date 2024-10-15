import 'src/components/App/App.scss';
import Sidebar from 'src/components/Sidebar/Sidebar';
import { Main } from 'src/components/Main/Main';
import { Header } from 'src/components/Header/Header';
// import { useEffect, useState } from 'react';

function App() {
//   const [employees, setEmployees] = useState([])
//   console.log('employees: ', employees);

//   useEffect(() => {
//     getEmployers()
//     .then((data) => {
//       setEmployees(data)
//     })
//   }, [])

// const BASE_URL = 'https://rosb-hakaton.ddns.net/api/v1/';


// const getResponseData = (res: Response) => {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   return res.json();
// };

// const headers = {
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// // const getEmployers = () => {
// //   return fetch(`${BASE_URL}teams/media/employees/2/`, {
// //     headers,
// //     method: 'GET',
// //     }).then(getResponseData);
// // };

// const getEmployers = () => {
//   return fetch(`${BASE_URL}teams/media/skills/`, {
//     headers,
//     method: 'POST',
//     body: JSON.stringify({
//       skillDomen: 'hard',
//       // employeeIds: '2'
//     })
//   }).then(getResponseData);
// };


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
