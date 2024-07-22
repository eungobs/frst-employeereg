import React from 'react';
import './Personnel.css';

function Personnel({ navigate }) {
  return (
    <div className="personnel">
      <div className="content">
        <h2>Company Personnel</h2>
        <div className="personnel-list">
          <div className="person moved">Munny Mpapi (female) - Marketing Director - moved to Pretoria branch - Ref Number: EMP011</div>
          <div className="person terminated">Palane Pilot (male) - Web Designer - Contract Terminated - Ref Number: EMP012</div>
          <div className="person moved">Tebogo Zwane (male) - Frontend Developer - moved to Mpumalanga branch - Ref Number: EMP013</div>
          <div className="person terminated">Ntombi Mkhize (female) - Sales Representative - Resigned - Ref Number: EMP014</div>
          <div className="person moved">James Tlou (male) - Software Engineer - moved to Durban branch - Ref Number: EMP015</div>
          <div className="person terminated">Emily Ngwenya (female) - HR Manager - Contract Terminated - Ref Number: EMP016</div>
          <div className="person terminated">Peter Molefe (male) - Accountant - Resigned - Ref Number: EMP017</div>
          <div className="person moved">Sarah Lethabo (female) - Customer Support - moved to Cape Town branch - Ref Number: EMP018</div>
          <div className="person terminated">Michael Ndlovu (male) - Security - Resigned - Ref Number: EMP019</div>
          <div className="person terminated">Anna Nkosi (female) - Technician - Contract Terminated - Ref Number: EMP020</div>
        </div>
        <button onClick={() => navigate('active-employees')}>Back</button>
      </div>
    </div>
  );
}

export default Personnel;
