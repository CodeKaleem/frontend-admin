'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
import { Visibility, VisibilityOff, PersonAdd } from '@mui/icons-material';

export default function SignupPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setSuccess(true);
        setLoading(false);

        setTimeout(() => {
            router.push('/login');
        }, 1500);
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
                                bgcolor: 'secondary.main',
                                color: 'white',
                            }}
                        >
                            <PersonAdd sx={{ fontSize: 40 }} />
                        </Box>
                        <Typography component="h1" variant="h4" fontWeight="bold" gutterBottom>
                            Admin Signup
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                            Create your admin account
                        </Typography>

                        {success && (
                            <Alert severity="success" sx={{ width: '100%', mb: 2 }}>
                                Signup successful! Redirecting to login...
                            </Alert>
                        )}

                        <Box component="form" onSubmit={handleSignup} sx={{ mt: 1, width: '100%' }}>
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
                                disabled={loading || success}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: 'secondary.main',
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
                                autoComplete="new-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading || success}
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
                                            borderColor: 'secondary.main',
                                        },
                                    },
                                }}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                disabled={loading || success}
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
                                {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign Up'}
                            </Button>
                            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                                <Link
                                    href="/login"
                                    variant="body2"
                                    sx={{
                                        textDecoration: 'none',
                                        '&:hover': {
                                            textDecoration: 'underline',
                                        },
                                    }}
                                >
                                    Already have an account? Sign in
                                </Link>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Fade>
        </Container>
    );
}
