/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

import ContactTexts from '../molecules/ContactTexts';
import ViewTitle from '../molecules/ViewTitle';

export default function Contact() {
  return (
    <section id="contact">
      <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
        <Grid>
          <Card>
            <CardContent>
              <ViewTitle
                title="【お問い合わせ】"
                subtitle=" 下記フォームに内容を記入後、送信ください。"
              />
              <form>
                <ContactTexts />
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </section>
  );
}
