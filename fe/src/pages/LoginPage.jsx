const LoginPage = () => {
    const url = "https://accounts.google.com/o/oauth2/v2/auth"
    const client_id = ''
    const redirect_URI = 'http://localhost:5173/callback'
    const scope = 'openid%20profile%20email'
    const response_type = 'code'
    const fullUrl = `${url}?client_id=${client_id}&redirect_uri=${redirect_URI}&scope=${scope}&response_type=${response_type}`
    return ( 
        <>
            <h2>Login Page</h2>
            <a href={fullUrl}>Login with Google</a>
        </>
     );
}

export default LoginPage;
