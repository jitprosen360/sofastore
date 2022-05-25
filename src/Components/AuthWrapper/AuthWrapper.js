import React from 'react';
import styled from 'styled-components';
const AuthWrapper = ({ headline, children }) => {
    return (
        <AuthWrapperdiv>
            {headline && <h2>{headline}</h2>}
            <div className='children'>
            {children && children}
            </div>
        </AuthWrapperdiv>
    )
}

export default AuthWrapper;

const AuthWrapperdiv = styled.div`
display:block;
width:100%;
margin:4rem auto 6rem;
`