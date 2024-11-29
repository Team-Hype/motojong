import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Grid from './Grid';

const LayerContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const MultiLayerGrid = () => {
  return (
    <LayerContainer>
      <Grid columns={10} rows={6} gap={5} height={150} width={100} style={{ zIndex: 1, backgroundColor: '#41454C' }} />
      <Grid columns={9} rows={5} gap={5} height={150} width={100} style={{ zIndex: 2 }} />
      <Grid columns={8} rows={4} gap={5} height={150} width={100} style={{ zIndex: 3 }} />
    </LayerContainer>
  );
};

export default MultiLayerGrid;
