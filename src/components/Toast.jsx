import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min';

function Toast({ message, show, onClose }) {
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
                <div className="toast-header bg-black p-3">
                    <strong className="me-auto text-white fs-6">Notification</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
                </div>
                <div className="toast-body bg-black text-white fs-6 p-4">
                    {message}
                </div>
            </div>
        </div>
    );
}

Toast.propTypes = {
    message: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Toast;