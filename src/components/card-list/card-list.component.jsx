import Card from "./card.component.jsx";
import './card-list.styles.css';

const CardList = ({filteredMosters}) => {
        //const {filteredMosters} = props;
        return(            
            <div className='card-list'>
               {
                                filteredMosters.map((monster) => {
                                    const {name,email,id} = monster;
                                    //console.log(name,id)
                                    return(                
                                        <Card key={id} name={name} email={email} id={id}/>
                                    )})
                    
               } 
            </div>
        )
}

export default CardList


