import React from "react";

const divStyle: React.CSSProperties = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '50vh',
  };

const NoMatch = () => {
	return (
	  <div style={divStyle}>
		<h1>404 - Not Found</h1>
		<p>Sorry, the page you are looking for does not exist.</p>
	  </div>
	)
}

export default NoMatch;
