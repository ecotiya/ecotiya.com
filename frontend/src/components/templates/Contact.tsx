/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import '../../App.css';

const inquiryKinds = [
  {
    value: 'question,',
    label: 'ご質問',
  },
  {
    value: 'request',
    label: 'ご要望',
  },
  {
    value: 'others',
    label: 'その他',
  },
];

export default function Contact() {
  const [inquiryKind, setInquiryKind] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInquiryKind(event.target.value);
  };

  return (
    <div className="app">
      <Typography gutterBottom variant="h3" align="center" />
      <Grid>
        <Card style={{ maxWidth: 1000, padding: '20px 5px', margin: '0 auto' }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              お問い合わせ
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              下記フォームに内容を記入後、送信ください。
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="あなたの名前を入力してください。"
                    label="お名前"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="あなたのメールアドレスを入力してください。"
                    label="メールアドレス"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="Enter inquirys"
                    select
                    label="お問い合わせ種別"
                    value={inquiryKind}
                    onChange={handleChange}
                  >
                    {inquiryKinds.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="お問い合わせ内容"
                    multiline
                    rows={10}
                    placeholder="お問い合わせ内容を入力してください。"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    内容を確認
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}
