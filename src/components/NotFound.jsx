import React from 'react'

const mainStyles = {
    position: 'relative',
    margin: '0',
}

const absoluteWp = {
    position: 'absolute',
    left: '50%',
    top: '140px',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    height: '400px',
}

const headingStyles = {
    transform: 'translateY(-50%)',
    color: '#FF7043',
    fontSize: '50px',
}

function NotFound() {
    return (
        <div id="not-found-wp" style={mainStyles}>
            <div style={absoluteWp}>
                <h2 className="heading-not-found-page" style={headingStyles}>
                    Oops!
                </h2>
                <h3 style={{fontSize: '24px', marginTop: '-20px'}}>
                    404 - Page Not Found!
                </h3>
            </div>
        </div>
    )
}

export default NotFound
