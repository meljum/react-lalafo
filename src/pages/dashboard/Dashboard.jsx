
import Title from '../../components/title/Title'
import css from "../homePage/HomePage.module.css"
import Card from "../../components/cards/Card"
import Loader from "../../components/loader/Loader"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Dashboard() {
  const {isLoading,data} = useSelector((state) => state.houses)

  if(isLoading){
    return <Loader/>
  }
  return (

    <div className='page'>
      <Title position="center">Мои объявления </Title>
      <Link className='btn-primary' to="/create-ad"> + Create new element </Link>
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
          isAdmin={true}
           />)
         : <h2 className={css.noAdds}>No adds</h2>
        }

      </div>
    </div>
  )
}

export default Dashboard