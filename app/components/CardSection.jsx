import data from "../data/products.json"
import styles from "../styles.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

const CardSection = (props) => {
    const category = props.categoria;
    const filteredData = data.filter((item) => item.category === category || category === "all");

    return (
        <>
        
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-3">
            {filteredData.map((items) => (
                    <div className="col" key={items.title} >
                        <div className="card">
                            <img src={`/images/products/${items.title}.jpg`} alt={items.title} className="container__card-imagen" />
                            <div className="card-body">
                                <h5 className="container__card-titulo">{items.title}</h5>
                                <div className="container_main">
                                    <span className="container__card-precio description">{items.description}</span>
                                    {items.prices.map((price, index) => (
                                        <div key={index} className="container__card-precio">
                                            <span>{price.size}</span>
                                            <span>${price.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <a href={items.wsp} target="_blank"><button className="container__card-boton" type="button">COMPRAR</button></a>
                        </div>
                    </div>
                ))}
            </div>


        </div>
            <div className="container__verProductos">
            <Link href="/productos">VER TODOS LOS PRODUCTOS</Link>
        </div>
        </>

        
    );
}

export default CardSection;
