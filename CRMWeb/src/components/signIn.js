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
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {postLogin} from '../api/service'
import {
    CalendarOutlined,
    DownOutlined,
    EditFilled, LinkedinFilled,
    MailOutlined, PhoneFilled,
    SlidersFilled,
    TagFilled,
    TagsFilled
} from "@ant-design/icons";
import {Popconfirm, Tag} from "antd";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                IT Project 5AM team
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const  ValidLogin = async (event) => {
            const {email, password} = this.state
            let data = {
                email,
                password
            }
            let res = await postLogin.getInstance().execute({data})()
            console.log(res)
        };
        const handleEmail = (event) => {
            this.setState({email: event.target.value})
        };
        const handlePassword = (event) => {
            this.setState({password: event.target.value})
        };

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    <div style={{marginTop: '20vh'}} className={'center'}>
                        <Avatar style={{backgroundColor: 'red'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                    </div>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form
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
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={ValidLogin}
                        >
                            Sign In
                        </Button>
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
                    <Copyright/>
                </Box>
            </Container>
        );
    }
}

export default SignIn
