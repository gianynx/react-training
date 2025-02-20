import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';
import '../assets/css/Toast.css';

function Toast({ message, show }) {

    const toastRef = useRef(null);

    useEffect(() => {
        if (show && toastRef.current) {
            const toast = new bootstrap.Toast(toastRef.current);
            toast.show();
        }
    }, [show]);

    return (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
            <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header p-2">
                    <strong className="me-auto text-white fs-6 px-2">Notification</strong>
                </div>
                <div className="toast-body fs-6 p-3">
                    {message}
                </div>
            </div>
        </div>
    );
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
};

export default Toast;