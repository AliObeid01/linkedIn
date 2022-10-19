import ReactLoading from 'react-loading';

import './Loader.scss';

const Loader = (props) => {
    
    return (
        <div className={props.loaderName !== '' ? props.loaderName : 'default'}>
            <div>
                <ReactLoading type="bubbles" color="#000000" height={40} width={40} />
            </div>
        </div>
    );
}

export default Loader;