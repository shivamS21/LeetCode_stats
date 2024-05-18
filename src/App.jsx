import React, { useState } from 'react'
import Card from './Components/Card'
import Input from './Components/Input'
const App = () => {

  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState('');
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const onUsernameSubmit = async () => {
    console.log(userName)
    const apiUrl = 'https://leetcode-stats-api.herokuapp.com/'+userName;

    // Fetch data from the API
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);
      if (data.status === 'error') {
        throw new Error('Error: Data status is "error"');
      }
      setUserData(data);
      setFetchSuccess(true);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setFetchSuccess(false);
    }

  }
  return (
    <div className='bg-yellow-50 h-screen flex flex-col justify-center items-center gap-2'>
      {!fetchSuccess && <Input onSubmit={onUsernameSubmit} setUsername={setUserName}/>}

      {fetchSuccess && <Card userdata={userData} username={userName}/>}
    </div>
  )
}

export default App