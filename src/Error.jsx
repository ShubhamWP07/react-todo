import React from "react";
import { useRouteError } from "react-router-dom";

let Error = () => {
  const err = useRouteError();
  console.log(err);

  return(
    <div>
      <h1>Oops!!</h1>
      <h2>Something Went wrong....</h2>
      <h2>{err.status + ": " + err.statusText}</h2>
    </div>
  )
}

export default Error;