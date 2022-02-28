import React from 'react';

const UserCard = (props) => {
  return(
   <div className='ui card'>
     <div className='content'>
      <div>
        {props.children}
      </div>
       <div className='description'>
    
       </div>
     </div>
     <div className='ui bottom button'>
     	<i className='add icon'> </i>
     	add friend
     </div>
  </div>
  )
}
export default UserCard;
