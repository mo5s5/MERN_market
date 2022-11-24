import './orderItemsList.scss'

export default function orderItem(props) {
  const { cartItems, onAddToCart, onSubstract, onRemoveFromCart } = props;
  // const [qty, setqty] = useState(1);
  let summary = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div>
      <table cellSpacing="0">
        <tbody>
          <tr>
            <th>Фото</th>
            <th>Товар</th>
            <th>Модель</th>
            <th>Кол-во</th>
            <th>Цена</th>
            <th>Итого</th>
          </tr>
          {cartItems.map((item) => (
            <tr key={item.id} >
              <td className='image'>
                <img
                  className='image'
                  src={item.image}
                  alt={item.name}
                ></img>
              </td>
              <td className='name'>{item.name}</td>
              <td className='model'>001</td>
              <td >
                <div className='count'>
                  <button
                    className='button plus'
                    onClick={() => onAddToCart(item)}
                  >+</button>
                  <input
                    className='count-input'
                    type='text' pattern="[0-9]*"
                    value={item.qty}
                    onChange={e => item.qty = (e.target.value)}
                  ></input>
                  <button
                    className='button minus'
                    onClick={() => onSubstract(item)}
                  >-</button>

                  <button
                    className='button remove'
                    onClick={() => onRemoveFromCart(cartItems, item)}
                  >X</button>

                </div>

              </td>
              <td className='price'>{item.price}</td>
              <td className='sum'>{item.price * item.qty}</td>
            </tr>
          ))}
          <tr>
            <td className='summary-text' colSpan={5}>Общая Сумма</td>
            <td className='summary'>
              {summary}
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div key={item.id} >
          <div className='item-container'>

            <div className='image'><img src={item.image} alt={item.name}></img></div>
            <div className='name'>{item.name}</div>
            <div>001</div>
            <div className='count'>
              <button className='button minus'>-</button>
              <input className='count-input' type='text' pattern="[0-9]*" value={item.count} onChange={e => item.count = (e.target.value)}></input>
              <button className='button plus'>+</button>
            </div>
            <div className='price'>{item.price}</div>

          </div>
        </div> */}
    </div>
  )

  // ))
  // )

}
