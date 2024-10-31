import 'src/components/Main/Main.scss';
import { Table } from 'src/components/Table/Table';
import { Web } from 'src/components/Web/Web';
import { Matrix } from 'src/components/Matrix/Matrix';
import { Metric } from 'src/components/Metric/Metric';
import { Preloader } from 'src/shared/ui/Preloader/Preloader';

export const Main = () => {
  return (
    <section className='main'>
      <Preloader />
      <div className='main__containers_up'>
        <Table />
        <Web />
      </div>
      <div className='main__containers_down'>
        <Matrix />
        <Metric />
      </div>
    </section>
  );
};
