import React from "react";
import Input from "./Input";
import Button from "./Button";

function Register() {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="text" placeholder="Password" />
      <Input type="text" placeholder="Confirm Password" />
      <Button type="submit" text="Register" />
    </form>
  );
}

export default Register;