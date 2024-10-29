  import 'src/shared/ui/Preloader/Preloader.scss';
  import { Icon } from '../Icon/Icon';
import { useAppSelector } from 'src/store/hooks';
import { selectSkills } from 'src/store/features/slice/skillSlice';

  export const Preloader = () => {
    const { isLoading } = useAppSelector(selectSkills);
    
    if (!isLoading) {
      return null;
    }

    return (
      <div className='overlay'>
        <div className='preloader'>
          <Icon id='grey' className='icon grey' />
          <Icon id='green' className='icon green'/>
          <Icon id='red' className='icon red'/>
          <Icon id='orange' className='icon orange'/>
        </div>
      </div>
    );
  };
