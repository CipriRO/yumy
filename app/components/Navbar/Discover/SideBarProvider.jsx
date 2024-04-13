"use client"
import { createContext, useState } from "react";

export const SidebarStatus = createContext([ true, null ]);

const SideBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarStatus.Provider value={[ open, setOpen ]}>
      {children}
    </SidebarStatus.Provider>
  );
};
export default SideBarProvider;
