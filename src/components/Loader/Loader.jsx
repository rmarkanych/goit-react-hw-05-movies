import { Vortex } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
const Loader = () => {
  return (
    <LoaderWrapper>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </LoaderWrapper>
  );
};

export default Loader;
