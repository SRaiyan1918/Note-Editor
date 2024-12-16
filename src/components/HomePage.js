import React, {useState,useEffect} from 'react';
import '../theme.css'

function Home() {

const [greeting, setGreeting] = useState('')

useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  return (
    <div>
      <h1><q><b><u>{greeting}</u></b></q> Welcome to the Home Page</h1>
      <p>This is the main page of your React app.</p>
    </div>
  );
}

export default Home;
