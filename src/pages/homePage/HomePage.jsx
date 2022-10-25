
import Title from '../../components/title/Title'
import css from "./HomePage.module.css"
import Card from "../../components/cards/Card"
import Loader from "../../components/loader/Loader"
import { useSelector } from 'react-redux'


function HomePage() {
const {isLoading,data} = useSelector((state) => state.houses)
  
  if(isLoading){
    return <Loader/>
  }
  return (

    <div className='page'>
      <Title position="center">Последние объявления </Title>
      <div className={css.cardswrapper}>
        {
         data.length 
         ? data.map((item) => 
         <Card 
          id={item.id}
          key={item.id}
          text={item.title} 
          price={item.price}
          img={item.imgUrl}
           />)
         : <h2 className={css.noAdds}>No adds</h2>
        }
        </div>
        <br/>
        <br/>
        <Title position="center">Последние объявления по авто </Title>
    </div>
  )
}

export default HomePage