import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { CopyrightSharp } from '@mui/icons-material';

const FooterContainer = styled('footer')`
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CopyrightSharp sx={{ fontSize: 14 }} />
      <Typography variant="body2">&nbsp;fgpcngl 2023</Typography>
    </FooterContainer>
  );
};

export default Footer;
