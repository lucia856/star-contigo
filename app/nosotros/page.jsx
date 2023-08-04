import React from 'react';
import styles from "../styles.css"

const Nosotros = () => {
    return (
        <>
            <img src="/images/nosotros1.jpg" className="nosotros__banner"></img>
            <div className="nosotros">
                <h2 className="nosotros__titulo">¡Bienvenidos a Star Contigo!</h2>
                <p className="nosotros__parrafoPresentacion">¡Hola! Me presento, Mi nombre es Brisa, soy la
                    personita encargada de todo lo que conlleva este
                    emprendimiento. Tengo 19 años y actualmente soy
                    estudiante.
                    Me encanta ser parte de sus momentos especiales
                    dejando una mágica impronta en cada producto que
                    realizo para ustedes.
                    Amo la familia de Estrellas que cada vez se va
                    formando con cada uno de mis clientes y espero que
                    de tu lado te sientas parte de esto también, que
                    siempre sigue creciendo! Espero todo te guste.</p>
                <div className="nosotros__fondoRosa">
                    <img src="/images/nosotros2.jpg" className="nosotros__imagenRosa" />
                    <p className="nosotros__parrafos margen">star contigo es Una tienda de regalos
                        dedicada con mucho amor y dedicación
                        para cada uno de ustedes</p>
                </div>
                <div className="nosotros__fondoNegro">
                    <p className="nosotros__parrafos negro">es un emprendimiento que nació en plena
                        pandemia, aÑo 2020, con el objetivo de llegar a
                        los corazones de los demás mediante un
                        recuerdo de nosotros para vos, ya sea
                        mediante una foto, un cuadro, un llavero o lo
                        que más te guste para regalar o regalarte</p>
                    <img src="/images/nosotros3.jpg" className="nosotros__imagenNegro" />
                </div>
                <div className="nosotros__fondoRosa">
                    <img src="/images/nosotros4.jpg" className="nosotros__imagenRosa" />
                    <p className="nosotros__parrafos">Realizamos Mapas Estelares, un plano que
                        indica cómo estaba el cielo en determinada
                        fecha, Cuadros Personalizados, con hasta 50
                        fotos, llaveros musicales, polaroids, y
                        productos sumamente hechos a tu gusto! Si si,
                        como lees, súper personalizados️ Para regalar
                        a tu pareja, amigo/os, familia, o a quien vos
                        más quieras! Un detalle súper bonito
                    </p>
                </div>
            </div>
        </>
    );
}

export default Nosotros;
