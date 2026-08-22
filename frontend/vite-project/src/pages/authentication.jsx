import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';

const defaultTheme = createTheme();

export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        setUsername("");
        setName("");
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      let errorMsg = err?.response?.data?.message || "An error occurred";
      setError(errorMsg);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ minHeight: '100vh' }}>
        <CssBaseline />
        
        {/* Left Side Decorative Image (hidden on mobile) */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/background.png)',
            backgroundColor: '#06113C',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: { xs: 'none', sm: 'block' }
          }}
        />

        {/* Right Side Form Panel */}
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={6} 
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            px: { xs: 2, sm: 4, md: 6 },
            py: { xs: 4, sm: 6 }
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 420,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#ff9839' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {formState === 0 ? "Sign In" : "Create Account"}
            </Typography>

            {/* Toggle Buttons */}
            <Box sx={{ display: 'flex', gap: 1.5, mb: 2, width: '100%' }}>
              <Button
                fullWidth
                variant={formState === 0 ? "contained" : "outlined"}
                onClick={() => { setFormState(0); setError(""); }}
                sx={{
                  borderRadius: 20,
                  textTransform: 'none',
                  fontWeight: 600,
                  bgcolor: formState === 0 ? '#ff9839' : 'transparent',
                  borderColor: '#ff9839',
                  color: formState === 0 ? '#fff' : '#ff9839',
                  '&:hover': {
                    bgcolor: formState === 0 ? '#e87d00' : 'rgba(255, 152, 57, 0.08)',
                    borderColor: '#e87d00'
                  }
                }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant={formState === 1 ? "contained" : "outlined"}
                onClick={() => { setFormState(1); setError(""); }}
                sx={{
                  borderRadius: 20,
                  textTransform: 'none',
                  fontWeight: 600,
                  bgcolor: formState === 1 ? '#ff9839' : 'transparent',
                  borderColor: '#ff9839',
                  color: formState === 1 ? '#fff' : '#ff9839',
                  '&:hover': {
                    bgcolor: formState === 1 ? '#e87d00' : 'rgba(255, 152, 57, 0.08)',
                    borderColor: '#e87d00'
                  }
                }}
              >
                Sign Up
              </Button>
            </Box>

            {/* Form Fields */}
            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
              {formState === 1 && (
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  name="fullname"
                  value={name}
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              )}

              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                value={username}
                autoFocus={formState === 0}
                onChange={(e) => setUsername(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && (
                <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
                  {error}
                </Typography>
              )}

              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  py: 1.4,
                  borderRadius: 25,
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'none',
                  bgcolor: '#ff9839',
                  '&:hover': { bgcolor: '#e87d00' }
                }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}