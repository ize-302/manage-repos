import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a className="logo">NextAuth.js</a>
      </Link>
      {session && (
        <a href="#" onClick={handleSignout} className="btn-signin">
          Sign out
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignin} className="btn-signin">
          Sign in
        </a>
      )}
      {session && (
        <>
          {" "}
          <p style={{ marginBottom: "10px" }}>
            {" "}
            Welcome, {session.user.name ?? session.user.email}
          </p>{" "}
          <br />
          <img src={session.user.image} alt="" />
        </>
      )}
    </div>
  );
};

export default Header;
