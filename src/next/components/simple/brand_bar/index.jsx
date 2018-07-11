import React from 'react';

class BrandBar extends React.Component {
  render() {
    return (
      <div id="brand-bar">
        <h1 id="college-name">
          College Of Engineering Trivandrum
        </h1>
        <style jsx>
          {`
            #college-name {
              font-family: 'Markazi Text', serif;
              text-align : center;
              font-weight: 500;
              font-size: 3.5vw;
              margin-top:3px;
              margin-bottom: 0px;
              color : black;
            }
          `}
        </style>
      </div>
    )
  }
}

export default BrandBar
