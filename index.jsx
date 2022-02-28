import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import profile1 from './img/images1.png'
import profile2 from './img/images2.png'
import profile3 from './img/images3.jpg'
import SingleComment from './singleComment';
import reportWebVitals from './reportWebVitals';
import UserCard from './UserCard'

const App = () => {
  return (
    <div className='ui comment'>
    <UserCard> 
      <SingleComment
      name='hale'
      date='today at 5 pm'
      text='best'
      picture={profile1}
      />
    </UserCard>
    <UserCard> 
      <SingleComment
      name='selin'
      date='today at 8 pm'
      text='well'
      picture={profile2}
      />
      </UserCard>
      <UserCard> 
      <SingleComment
      name='esma'
      date='today at 4 pm'
      text='not bad'
      picture={profile3}
      />
      </UserCard>
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.querySelector('#root'),
);
reportWebVitals();
