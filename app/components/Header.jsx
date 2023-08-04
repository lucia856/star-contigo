'use client'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="header">
                {/* logo */}
                <div className="header__logo">
                    <Link href="/">
                        <h1 className="header__logo-titulo">STAR CONTIGO</h1>
                        <Image className="header__logo-imagen" src="/images/logo.svg" alt="Star Contigo" width={100} height={100} />
                    </Link>
                </div>

                {/* menu */}
                <nav className="header__menu1">
                    <Link href="/cuadros" className="header__menu-items">CUADROS</Link>
                    <Link href="/llaveros" className="header__menu-items">LLAVEROS</Link>
                    <Link href="/fotografias" className="header__menu-items">FOTOGRAFIAS</Link>
                </nav>
                <nav className="header__menu2">
                    <Link href="/nosotros" className="header__menu-items">NOSOTROS</Link>
                    <Link href="/contacto" className="header__menu-items">CONTACTO</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;

