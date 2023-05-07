import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{ display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' }}>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
 />
    </div>
  )
};

export default Loader;