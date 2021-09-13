import React from 'react';
import './Display.css';
const Display = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 password-display-container">
                    <div>
                        <div className="password-display">
                            <input type="text" className="password-display-input" readOnly />
                        </div>
                        <div className="password-description">

                        </div>
                    </div>
                    <div className="password-display-icons">

                    </div>
                </div>
            </div>
        </>
    )
}
export default Display;