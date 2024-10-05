import 'src/components/Web/Web.scss';
import Checkbox from 'src/shared/ui/Checkbox/Checkbox';

export const Web = () => {


  return (
    <section className='web'>
      <div className='web__skills_container'>
        <Checkbox checkboxName='Hard'/>
        <Checkbox checkboxName='Soft'/>
      </div>
    
    </section>
  );
};
