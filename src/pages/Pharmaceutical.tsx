import { useParams } from 'react-router-dom';
import './css/pharmaceutical.css';
import { posData } from '../data';

const Pharmaceutical = () => {
  
  const { id } = useParams();
  
  const pharmaceutical = posData.find((item) => item.id == Number(id));
  
  return (
    <div>
      {pharmaceutical ? (
      <div>
        <h1>{pharmaceutical.name}</h1>
        <p>Price: {pharmaceutical.unitPrice}</p>
        <p>Stock: {pharmaceutical.stockQty}</p>
      </div>
      ) : <h1>not found</h1>}
    </div> 
  )
    
}

export default Pharmaceutical;