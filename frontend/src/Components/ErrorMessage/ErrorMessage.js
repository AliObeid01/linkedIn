import './ErrorMessage.scss';

const ErrorMessage = (props) => {
    
    return (
        <div className='errorMsg'>
            <h4>{props.errorMsg}</h4>
        </div>
    );
}

export default ErrorMessage;