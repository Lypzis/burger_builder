import React from 'react'

// Returns a wrapped a component with a given style class.
// the component has its properties and content preserved.  
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}

export default withClass;
