import React from 'react';


const HomeLayout = (props) => {
  return (
    <div className="container-fluid py-4" style={{backgroundColor:'#f4f4f4'}}>
    <div className="row">
    {props.children}

    </div>
</div>

  )
}

export default HomeLayout
