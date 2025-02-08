
import { Link } from 'react-router-dom';
import './css/postable.css';
import { posData } from '../data';

const PosTable = () => {

  return (
    <div className='pos-table-container'>
      <table className='pos-table'>
        <caption>
          <h2>Point of Sales for Pharmaceuticals</h2>
        </caption>
        <thead>
          <tr>
            <th>id</th>
            <th><input type='text' placeholder='Search' /></th>
            <th>unit price</th>
            <th>type</th>
            <th>category</th>
            <th>stock qty</th>
            <th>total price</th> 
          </tr>
        </thead>
        <tbody>
          { posData.map((pos, index) =>(
            <tr key={index}>
              <td>{pos.id}</td>
              <td><Link to={`/pharmaceuticals/${pos.id}`}>{pos.name}</Link></td>
              <td>&#8358;{pos.unitPrice}</td>
              <td>{pos.type}</td>
              <td>{pos.category}</td>
              <td>{pos.stockQty}</td>
              <td>&#8358;{pos.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PosTable;