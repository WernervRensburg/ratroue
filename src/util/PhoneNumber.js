import React from 'react';

const PhoneNumber = ({ phoneNumber }) => {
    const telLink = `tel:${phoneNumber.replace(/[^0-9]/g, '')}`;

    return (
        <a href={telLink} style={{ textDecoration: "none", color: "inherit" }}>{phoneNumber}</a>
    );
}

export default PhoneNumber;