import React from 'react'
import iconClose from '../assets/icon-close.svg'
const Modal = ({modalTitle}) => {
  return (
    <div className='modal'>
      <div className="modal-container">
        <div className="modal-title">
          <p>{modalTitle}</p>
          <img src={iconClose} alt="close" />
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sit voluptate ullam, itaque aperiam quaerat nisi nam, excepturi pariatur similique tempore ipsum dolore ad maiores harum tempora eos aut mollitia ut a iste obcaecati in. Earum, quae veritatis. Recusandae doloribus dolor natus? Similique quia molestiae corporis perferendis accusamus maxime suscipit modi incidunt minima fugit? Ab, officia, consequuntur voluptas nisi pariatur non nobis inventore vitae doloribus obcaecati odio impedit aspernat</h1>
      </div>
    </div>
  )
}

export default Modal