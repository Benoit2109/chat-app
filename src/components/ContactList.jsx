import React from "react";
import Contact from "./contact.jsx";

const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false,
    id: 1,
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true,
    id: 2,
  },
  {
    name: "Vernon Mason",
    avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    online: true,
    id: 3,
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false,
    id: 4,
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true,
    id: 5,
  },
];

const ContactList = () => (
  <div>
    {users.map((item) => (
      <Contact
        Avatar={item.avatar}
        alt={item.name}
        Name={item.name}
        Online={item.online}
        key={item.id}
      />
    ))}
  </div>
);

export default ContactList;
