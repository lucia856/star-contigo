import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
             <div className="banner">
                <img className="banner__imagen" src="/images/llaveros.jpg" alt="llaveros" />
                <h2 className="banner__titulo">LLAVEROS</h2>
            </div>
            <CardSection categoria={"llaveros"} />
        </>
    );
}

export default Page;
