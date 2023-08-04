import React from 'react';
import Link from 'next/link';

const RRSS = () => {
    return (
        <>
            <div className="btn-in">
                <Link href="https://www.instagram.com/star_contigo/?hl=es" target="_blank">
                    <img className="btn-in__svg" src="/images/instagram.svg" alt="instagram" />
                </Link>
            </div>
            <div className="btn-wp">
                <Link href="https://api.whatsapp.com/send?phone=2612198966&text=Hola%20STARCONTIGO!" target="_blank">
                <img className="btn-wsp__svg" src="/images/whatsapp.svg" alt="whatsapp" />
                </Link>
            </div>
        </>
    );
}

export default RRSS;
