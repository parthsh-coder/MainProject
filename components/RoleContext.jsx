import React, { createContext, useState, useContext } from 'react';

// Create the context
const RoleContext = createContext(null);

// Create a custom hook for easier context consumption
export const useRole = () => useContext(RoleContext);

// Create the Provider component
export const RoleProvider = ({ children }) => {
    // Default role can be null or 'Employee' for minimal access
    const [userRole, setUserRole] = useState(null); 

    return (
        <RoleContext.Provider value={{ userRole, setUserRole }}>
            {children}
        </RoleContext.Provider>
    );
};

// Export the provider and the context.
export default RoleContext;