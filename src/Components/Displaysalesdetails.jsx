import React, { useEffect, useState } from "react";
export const Displaysalesdetails = ({ salesname, location }) => {
  const [salesnamelocal, setsalesnamelocal] = useState("");
  const [locationlocal, setlocationlocal] = useState("");
  const [allowancelocal, setallowancelocal] = useState(0);

  useEffect(() => {
    setsalesnamelocal(salesname);
    setlocationlocal(location);
  }, [salesname, location]);

  {
    useEffect(() => {
      if (location === "Nanded") {
        setallowancelocal(100);
      } else if (location === "Hyderabad") {
        setallowancelocal(500);
      } else if (location === "Pune") {
        setallowancelocal(1000);
      } else {
        setallowancelocal(15000);
      }
    }, [location]);
  }

  return (
    <div>
      You Have Selected for The <b>{salesname}</b> Sales Man and
      <b>{location}</b> You Will Get Allowances: {allowancelocal}
    </div>
  );
};
