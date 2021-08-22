import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Popover from '@material-ui/core/Popover';
import {withRouter} from "react-router-dom";

import axios from "axios";

//导入Copyright组件
import Copyright from "../../components/copyRight";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typography: {
        padding: theme.spacing(2),
    },
}));

function SignIn(props) {
    const classes = useStyles();

    const [email, setEmail] = React.useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    };
    const [password, setPassword] = React.useState('');
    const handlePassword = (event) => {
        setPassword(event.target.value);
        //console.log(event.target.value);
    };

    //提示框
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        //console.log(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const getinfo = async (email,password) => {
        let url = 'http://127.0.0.1:5000/login/'+email+'/'+password
        const res = await axios.get(url)
        return res.data
    }

    //判断登录
    const handleLogin = (event) => {
        let anchorEl = event.currentTarget
        //判断输入框非空
        if (email == '' || password == '') {
            window.alert('please input email or password')
        }else{
            //从后端获取登录结果
            getinfo(email,password).then(res => {
                if (res) {
                    console.log(res);
                    props.history.push('/homePage')
                }else{
                    setAnchorEl(anchorEl)
                }
            })
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}
                      noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleEmail}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handlePassword}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        aria-describedby={id}
                        //type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleLogin}
                    >
                        Sign In
                    </Button>
                    {/*密码错误弹出提示框*/}
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Typography className={classes.typography}>Email or Password is wrong, please check!</Typography>
                    </Popover>

                    <Grid container>
                        <Grid item xs>
                            <Link href="resetPasswordPage" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="/signUpPage" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default withRouter(SignIn)