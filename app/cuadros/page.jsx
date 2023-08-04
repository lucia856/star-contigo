import data from "../data/products.json"
import styles from "../styles.css"
import CardSection from '../components/CardSection';

const Page = () => {
    const category = 'cuadros';
    const filteredData = data.filter((item) => item.category === category);
    console.log(filteredData)

    return (
        <>
             <div className="banner">
                <img className="banner__imagen" src="/images/cuadros.jpg" alt="cuadros" />
                <h2 className="banner__titulo">CUADROS</h2>
            </div>
            <CardSection categoria={"cuadros"} />
        </>
    );
}

export default Page;
