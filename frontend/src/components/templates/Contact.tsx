/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Box, Card, CardContent } from '@mui/material';
import { ContactTexts, ViewTitle } from '../molecules/index';

export default function Contact() {
  return (
    <section id="contact">
      <Box style={{ maxWidth: 1500, padding: '35px 5px', margin: '0 auto' }}>
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
      </Box>
    </section>
  );
}
