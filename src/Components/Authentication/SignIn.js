const SignIn = () => {
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
export default SignIn;