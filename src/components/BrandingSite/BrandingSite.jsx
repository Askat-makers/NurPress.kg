import React from 'react';
import './BrandingSite.css'
import { Container } from 'react-bootstrap';
import DropdownBlock from '../DropdownBlock/DropdownBlock';

const BrandingSite = () => {
  return (
    <Container>
      <h2>Новости мира</h2>
      <div style={{display: "flex"}}>
        <div className="branding-site-blocks">
          <img src="https://gdb.rferl.org/93F174EA-AE37-4986-A208-FB172A0EFBAB_cx0_cy15_cw0_w144_r1.jpg" alt="" />
        </div>
        <div className="branding-site-blocks">
          <img src="https://gdb.rferl.org/93F174EA-AE37-4986-A208-FB172A0EFBAB_cx0_cy15_cw0_w144_r1.jpg" alt="" />
        </div>
        <div className="branding-site-blocks">
          <img src="https://gdb.rferl.org/93F174EA-AE37-4986-A208-FB172A0EFBAB_cx0_cy15_cw0_w144_r1.jpg" alt="" />
        </div>
        <div>
          <DropdownBlock />
        </div>
      </div>
    </Container>
  );
};

export default BrandingSite;