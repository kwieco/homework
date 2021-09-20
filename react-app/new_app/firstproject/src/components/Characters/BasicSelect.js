import React from 'react'
import Select from 'react-select'



function BasicSelect({label, options, onChange}) {


  return (
    <>
      <h2>Filtruj postacie: </h2><Select style={{ maxwidth: 200}} options={options} onChange={onChange} />
    </>
  );
}
export default BasicSelect