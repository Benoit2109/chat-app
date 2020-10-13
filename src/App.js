import React from 'react';
import Contact from './components/contact';


function App() {
  return (
    <div className="App">
      <Contact
        Avatar="https://avatars3.githubusercontent.com/u/70884216?s=460&u=7dc21945481dc5f12e54b9f0fdc6f484bfc2d3dd&v=4"
        Name= "Ben LE BOURDONNEC"
        Online={false}/>
      <Contact
        Avatar="https://randomuser.me/api/portraits/women/44.jpg"
        Name= "Isabella DOUGLAS"
        Online={true}/>
      <Contact
        Avatar="https://randomuser.me/api/portraits/women/48.jpg"
        Name= "Sarah HERNADEZ"
        Online={false} />
      <Contact
        Avatar="https://randomuser.me/api/portraits/men/84.jpg"
        Name= "Christopher COLEMAN"
        Online={true}/>
       
    </div>
  );
}

export default App;
