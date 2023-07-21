import Card from './CardSingle/Card.jsx'
import './Cards.css'
export default function Cards(props) {
   console.log("cards",props.characters);
   return (
      <div className='targeta'>{
         props.characters.map(pj => {
            return <Card 
               key={pj.id}
               name={pj.name} 
               status={pj.status} 
               species={pj.species} 
               onClose={()=> window.alert("emulacion de cerrar")} 
               gender={pj.gender} 
               image={pj.image}
               origin={pj.origin.name}  />
      }  )   }
      </div>
   );
}


