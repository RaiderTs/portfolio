import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './LoaderComponent.module.css';

function LoaderComponent() {
  return (
    <div className={s.overlay}>
      <Loader
        type="ThreeDots"
        color="#ff6b08"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default LoaderComponent;
