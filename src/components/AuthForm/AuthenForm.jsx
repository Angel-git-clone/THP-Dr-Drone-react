// import React from 'react';
// import './AuthenForm.css';

// export default function AuthenForm() {
//   return (
//     <div>AuthenForm</div>
//   );
// }

import React from 'react';
// Mui import //
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LogoDrdrone from '../../assets/logotype-1024x1016.png';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../AuthForm/AuthenForm.css';
import { BorderColor } from '@mui/icons-material';
import { BorderColorOutlined } from '@mui/icons-material';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // axios.post(Api_url, dataToSend).then(response.data)
    // localStorage.setItem('Authorization_token', reponses.headers.token)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" className="ThemeProvider">      
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <img src={LogoDrdrone} alt="logo enseigne" className="LogoFormDrDrone" />
                <Typography component="h1" variant="h5">
                  Connexion
                </Typography>
            <div className='ContainBlur'>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Votre email"
                        name="email"
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Votre mot de passe"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="secondary" />}
                        label="J'autorise Dr Drone à stocker mon adresse email."
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    color="secondary"
                  >
                    Connexion
                  </Button>
                  {/* <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link href="#" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid> */}
                </Box>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </div>
          </Box>
        </Container>
    </ThemeProvider>
  );
}