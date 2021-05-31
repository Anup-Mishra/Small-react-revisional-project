import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
    <div>
        <h1>The Error Page</h1>
        <p>Try another<Link href='/auth'><a>auth</a></Link></p>
        <button onClick={()=> Router.push('/auth')}>Go to auth</button>
    </div>
);

export default errorPage;