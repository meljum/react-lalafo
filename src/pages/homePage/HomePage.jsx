
import Title from '../../components/title/Title'
import css from "./HomePage.module.css"
import Card from "../../components/cards/Card"
import Loader from "../../components/loader/Loader"


function HomePage({isLoading,housesArray}) {

  
  if(isLoading){
    return <Loader/>
  }
  return (

    <div className='page'>
      <Title position="center">Последние обьявления </Title>
      <div className={css.cardswrapper}>
        {
         housesArray.length 
         ? housesArray.map((item) => 
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
    </div>
  )
}

export default HomePage