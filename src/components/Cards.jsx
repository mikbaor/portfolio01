import Card from './detail/card/Card';
import style from "./cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return <div className= {style.container}>
         {
            characters.map(({name,species,gender,image,onClose,id}) => {
              return <Card  
                  key = {id}
                  onClose= {()=> onClose(id)}
                  name={name}           
                  specie={species}
                  gender={gender}
                  image= {image}
               />
            })
         }
         </div>;
}
