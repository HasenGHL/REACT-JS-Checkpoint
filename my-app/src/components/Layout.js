import React from 'react';

function Layout() {
  return (
    <div className="container-fluid p-0">
      <header className="bg-primary text-white p-4">
        <h1>Login Form</h1>
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-md-8">
          <form>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
          </div>
          
        </div>
      </main>
      <footer className="bg-light py-4 mt-4">
        {/* footer content goes here */}
      </footer>
    </div>
  );
}

export default Layout;
