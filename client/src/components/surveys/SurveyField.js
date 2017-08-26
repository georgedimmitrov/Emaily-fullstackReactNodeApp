import React from 'react';

export default ({ input, label, id, meta: { touched, error } }) => {
  // console.log(meta);
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
