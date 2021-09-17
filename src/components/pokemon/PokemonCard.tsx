
export const PokemonCard = (props: {name: string, image: string}): JSX.Element => {
    return (
        <div className = 'col-md-3 col-sm-6 mb-5'>
              <div className="card">
                   <div className="card-header">
                    <h1>{props.name}</h1>
                   </div>
                  <div className = "image">
                    <img src = {props.image} alt = {props.name} width = "300" height = "300"></img>
                  </div> 
             </div>
          </div>
    )
}