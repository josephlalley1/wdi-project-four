import React from 'react';

function TradeForm({ handleChange, handleSubmit }) {
  return(
    <form onSubmit={handleSubmit}>
      <input name="name" handleChange={handleChange}></input>
    </form>
  );
}

export default TradeForm;
