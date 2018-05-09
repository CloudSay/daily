import React from 'react';
import '../assets/css/loading.css'
const Loading = props => (
  <div className="loader">
        <div className="loader-inner ball-spin-fade-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
);

export default Loading;