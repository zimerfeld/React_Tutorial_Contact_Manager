import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props.contacts);

  const deleteContactHandler = (id) => {
    props.deleteContactId(id);
  };

  // to load fake data
  // const contacts = [{
  //  id: "1",
  //  name: "test",
  //  email: "t@t.com"
  // }];
  
  // not reading from props
  // const renderContactList = contacts.map((contact) => {    
  //    return (
  //      <ContactCard
  //        contact = {contact}
  //        deleteHander = {deleteContactHandler}
  //        key = {contact.id}
  //      />
  //    );
  //  });

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact = {contact}
        deleteHander = {deleteContactHandler}
        key = {contact.id}
      />
    );
  });

  return (
  <div className="main">
    <h2>
      Contact List
      <Link to = "/add">
        <button className="ui right floated primary button">Add Contact</button>
      </Link>
    </h2>
    <div className="ui celled list">{renderContactList}</div>
  </div>
  );
};

export default ContactList;
