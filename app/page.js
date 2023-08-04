import 'bootstrap/dist/css/bootstrap.min.css';
import CardSection from './components/CardSection';
import Carousel from './components/Carousel'
import TitleSection from './components/TitleSection'


export default function Home() {

  return (
    <>
      <Carousel />
      <TitleSection />
      <CardSection categoria={"all"}/>
    </>
  )
}
