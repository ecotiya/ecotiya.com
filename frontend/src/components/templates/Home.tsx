/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import Typography from '../atoms/Typography';
import HomeLayout from './HomeLayout';

export default function Home() {
  return (
    <HomeLayout
      sxBackground={{
        backgroundColor: '#007bbb', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h3" marked="center">
        ecotiya -楽しむが価値-
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        ようこそ、ゲストさん
      </Typography>
    </HomeLayout>
  );
}
