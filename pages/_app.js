import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}



// import React from 'react'
// import Link from 'next/link'
// import Router from 'next/router'

// const Page = () => {
//   return (
//     <>
//       <h1>My Page</h1>
//       <Link href="/verify/token">
//         <a>Verify Token</a>
//       </Link>
//     </>
//   )
// }

// const Verify = ({ token }) => {
//   return (
//     <>
//       <h1>Verify Page</h1>
//       <p>Token: {token}</p>
//       <button onClick={() => Router.back()}>Go Back</button>
//     </>
//   )
// }

// export default function App() {
//   return (
//     <>
//       <Router>
//         <Page path="/" />
//         <Verify path="/verify/:token" />
//       </Router>
//     </>
//   )
// }