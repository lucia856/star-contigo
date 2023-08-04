import React from 'react';
import Link from 'next/link';

const TitleSection = () => {
    return (
        <div className="categorias">
            <div className="categorias__llaveros">

                <Link href="/llaveros">
                    <div className="contenedor llaveros">
                        <h2 className="contenedor__titulo">LLAVEROS</h2>
                    </div>
                </Link>

            </div>
            <div className="categorias__polaroids">
                <Link href="/fotografias">
                    <div className="contenedor polaroids">
                        <h2 className="contenedor__titulo">POLAROIDS</h2>
                    </div>
                </Link>
            </div>
            <div className="categorias__cuadros">
                <Link href="/cuadros">
                    <div className="contenedor cuadros">
                        <h2 className="contenedor__titulo">CUADROS</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default TitleSection;
