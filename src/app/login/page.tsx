'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { loginSuccess } from '@/store/authSlice';
import {
    Box,
    Button,
    TextField,
    Typography,
    Container,
    Paper,
    Link,
    Alert,
    CircularProgress,
    InputAdornment,
    IconButton,
    Fade,
} from '@mui/material';
import { Visibility, VisibilityOff, Login as LoginIcon } from '@mui/icons-material';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (email === 'admin@example.com' && password === 'password') {
            const dummyToken = 'dummy-jwt-token';
            const user = { email, name: 'Admin User' };
            dispatch(loginSuccess({ user, token: dummyToken }));
            router.push('/dashboard');
        } else {
            setError('Invalid credentials! Use admin@example.com / password');
            setLoading(false);
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Fade in timeout={600}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 2,
                            background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
                        }}
                    >
                        <Box
                            sx={{
                                mb: 2,
                                p: 2,
                                borderRadius: '50%',
                                bgcolor: 'primary.main',
                                color: 'white',
                            }}
                        >
                            <LoginIcon sx={{ fontSize: 40 }} />
                        </Box>
                        <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
                            Admin Login
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Sign in to access your dashboard
                        </Typography>

                        {error && (
                            <Alert severity="error" sx={{ width: '100%', mb: 2 }} onClose={() => setError('')}>
                                {error}
                            </Alert>
                        )}

                        <Box component="form" onSubmit={handleLogin} sx={{ mt: 1, width: '100%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'primary.main',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    py: 1.5,
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    '&:hover': {
                                        boxShadow: 6,
                                        transform: 'translateY(-2px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
                            </Button>
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Link
                                    href="/signup"
                                    variant="body2"
                                    sx={{
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Fade>
        </Container>
    );
}
