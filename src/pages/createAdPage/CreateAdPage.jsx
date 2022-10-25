import { useState } from "react"
import Title from "../../components/title/Title"
import Input from "../../components/input/Input"
// import { base_url } from "../../constant";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api"

function CreateAdPage() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [isSending,setSending] = useState(false)

    const navigate = useNavigate()
    const toastSettings ={
        position: "bottom-right",
        theme:"colored" 
    }
    

    const submit = (e) => {
        e.preventDefault();
        setSending(true)
        toast.info("Start", toastSettings)
        const data = {
                  title:name,
                  imgUrl:imgUrl,
                  price:price,
                  description:description
              }
        Api.postHouse(data).then((res) => {
            if(res.status === 201) {
              toast.success("Success", toastSettings)
              navigate("/dashboard")
            } else {
              toast.error("Error", toastSettings)
              setSending(false)
            }
          })
    }
    const handleName = (e) => setName(e.target.value);
    const handPrice = (e) => setPrice(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleImg = (e) => setImgUrl(e.target.value);



 return (
    <div className="page">
        <Title position="center">Создать объявления</Title>
        <form onSubmit={submit}>
          <Input required value={name} onChange={handleName} title="Название"  type="text" placeholder="название"/>
          <Input required value={price} onChange={handPrice}title="Цена" type="number" placeholder="цена в долларах"/>
          <Input required value={description} onChange={handleDescription}title="Описание" type="text" placeholder="Описание"/>
          <Input required value={imgUrl} onChange={handleImg} title="Фото" type="text" placeholder="Фото"/> 
          <button disabled={isSending} className="btn-primary">+Создать</button> 
         </form>
    </div>
  )
}

export default CreateAdPage