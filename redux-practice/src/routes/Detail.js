import React from 'react';
import { useParams } from 'react-router-dom';

function Detail({toDos}) {
  const id = useParams();
  return (    
    <div>
      <h1>Detail</h1>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {toDos:state}
}

export default Detail;