import React from 'react';
import styles from "../styles.css"

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <h3 className="footer__titulo">MEDIOS DE PAGO</h3>
                <img className="footer__logo" src="/images/mercadopago.svg" alt="Mercado Pago" />
                <img className="iconify" src="/images/bank-light.svg" alt="Transferencias Bancarias" />
            </div>
            <div>
                <h3 className="footer__titulo">CONTACTANOS</h3>
                <a href="mailto:starcontigomza@gmail.com">
                    <p className="footer__parrafo email">starcontigomza@gmail.com</p>
                </a>
                <a href="https://api.whatsapp.com/send?phone=2612198966&text=Hola%20STARCONTIGO!" target="_blank">
                    <p className="footer__parrafo email">2612198966</p>
                </a>
            </div>
            <div>
                <h3 className="footer__titulo">SEGUINOS</h3>
                <div>
                    <a href="https://www.instagram.com/star_contigo/?hl=es" target="_blank"><img className="iconify" src="/images/instagram-logo-light.svg" alt="instagram" /></a>
                </div>
            </div>
        </div>
    );
}

export default Footer;
