import imgBeers from "../assets/beers.png";
import imgNewBeer from "../assets/new-beer.png";
import imgRandomBeer from "../assets/random-beer.png";
import {Link} from "react-router-dom"


function Home() {
  return (
    <div>

<div>
<img src={imgBeers} alt="cerveza" />
<h1><Link to="/beers">All Beers</Link></h1>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis libero temporibus corrupti nesciunt, ipsam architecto, maiores eum quae alias adipisci consequuntur, perspiciatis error exercitationem quisquam esse? Expedita, fuga explicabo.</p>
</div>


<div>
<img src={imgNewBeer} alt="nuevaCerveza"/>
<h1><Link to="/random-beer">Random Beers</Link></h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, rem autem molestias eaque est aut reprehenderit deserunt ipsa facere corrupti dignissimos dolorum, quibusdam ab? Libero ut nobis necessitatibus nesciunt quisquam.</p>

</div>


<div>
<img src={imgRandomBeer} alt="randomCerveza" />
<h1><Link to="/new-beer">New Beer</Link></h1>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis molestiae aliquid similique voluptates recusandae numquam fugit, culpa pariatur id fuga a aut sapiente veniam ipsum earum! Odio numquam consectetur est.</p>
</div>


    </div>
  )
}

export default Home