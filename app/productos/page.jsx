import React from 'react';
import CardSection from '../components/CardSection';

const Page = () => {
    return (
        <>
            <div className="banner">
                <img className="banner__imagen" src="/images/cuadros.jpg" alt="mapa estelar" />
                    <h2 className="banner__titulo">TODOS LOS PRODUCTOS</h2>
            </div>
            <CardSection categoria={"all"} />
        </>
    );
}

export default Page;
