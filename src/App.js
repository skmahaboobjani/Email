




import React, { useState } from "react";
import "./App.css"

const inboxData = [
  {
    mId: "guid-1",
    unread: true,
    subject: "Traning program",
    content:
      "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-className experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community."
  },
  {
    mId: "guid-2",
    unread: false,
    subject: "Empower your future",
    content:
      "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft"
  }
];

const spamData = [
  {
    mId: "guid-3",
    unread: true,
    subject: "Pre Approved Loan",
    content:
      "Congratulations ! <u>Credit card<u> is being shipped to you today!"
  },
  {
    mId: "guid-4",
    unread: true,
    subject: "You won a lottery!",
    content:
      "You have just won the New York official lottery. Please send us your address so that we may start the transfer."
  }
];

const Email = ({ email, onSelect, selected }) => {
  const handleClick = () => {
    onSelect(email.mId);
  };

  return (
    <div
      className={`email ${email.unread ? "unread" : ""} ${
        selected ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      <div className="email__subject">{email.subject}</div>
    </div>
  );
};

const EmailList = ({ emails, onSelect, selected }) => {
  return (
    <div className="emailList">
      {emails.map((email) => (
        <Email
          key={email.mId}
          email={email}
          onSelect={onSelect}
          selected={selected === email.mId}
        />
      ))}
    </div>
  );
};




const App = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (mId) => {
    setSelected(mId);
  };

  return (
    
    <div className="app">
    <div className="navbars" style={{color:"whitesmoke",fontSize:"15px"}} ><h4>OutLook Mail</h4></div>
    <div className="navbar">
      <div className="navbar__left">
        {/* <div classNameName="navbar__logo">Logo</div> */}
        <div className="navbar__search">
          <input type="text" placeholder="Search..." />
          <button className="navbar__search-btn">Search</button>
        </div>
      </div>
      <div className="navbar__right">
        <button className="navbar__btn-new">+ New</button>
        <button className="navbar__btn-mark">Mark All as Read</button>
      </div>
    </div>
    <div className="sidebar" style={{ backgroundColor: "grey" }}>
      <h2 className="sidebar__title">Folders</h2>
      <ul className="sidebar__list">
        <li className="sidebar__item">Inbox</li>
        <li className="sidebar__item">Junk emails</li>
        <li className="sidebar__item">Drafts</li>
       <li className="sidebar__item">sent items</li>
       <li className="sidebar__item">Delete Items</li>
      </ul>
     
    </div>
  
    <div className="verticals-line"></div>
    
   
    <div className="content">
   
    <hr className="content__divider" style={{ height: "1px",width:"19%" }} />
    <p style={{color:"blue"}}>Focused  Other  </p>
      <EmailList
        emails={inboxData}
        onSelect={handleSelect}
        selected={selected}
        emailclassName="small"
      />
       <hr className="content__divider" style={{ height: "1px",width:"19%" }} />
  
      <EmailList
        emails={spamData}
        onSelect={handleSelect}
        selected={selected}
        emailclassName="small"
      />
      <hr className="content__divider" style={{ height: "1px",width:"19%" }} />
    </div>
    <div className="vertical-line"></div>

    <div>
      <img id="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs7qCzzvvKWaP-R4OhBgi4WOzmr4WE1V3K3KlB7rzkejXAz3CFJOxQpUqZrl3drud-6KE&usqp=CAU" alt="img"/>
      
    </div>
    <p>selected an item to read</p>
    
  </div>

   

  );
};

export default App;


