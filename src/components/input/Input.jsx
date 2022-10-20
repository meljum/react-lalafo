import css from "./Input.module.css"

function Inpit({title,...props}) {
  return (
    <label className={css.wrapper}>
       {title}
       <input {...props}/>
    </label>
  )
}

export default Inpit