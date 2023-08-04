import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
             <div className="banner">
                <img className="banner__imagen" src="/images/polaroids.jpg" alt="fotografias" />
                <h2 className="banner__titulo">FOTOGRAFIAS</h2>
            </div>
            <CardSection categoria={"fotografias"} />
        </>
    );
}

export default Page;
