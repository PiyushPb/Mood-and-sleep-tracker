import React, { useState } from "react";
import HomeNav from "./HomeNav";
import CardContainer from "./CardContainer";
import Form from "../Form/Form";

const HomeLayout = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <HomeNav />
      {showForm ? (
        <Form setShowForm={setShowForm} />
      ) : (
        <CardContainer setShowForm={setShowForm} />
      )}
    </>
  );
};

export default HomeLayout;
