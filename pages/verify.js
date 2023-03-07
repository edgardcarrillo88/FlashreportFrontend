import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';


const Verify = ( )=> {//({ token })

    const router = useRouter()
    const { token } = router.query;
    console.log(token);
    console.log("la lora");



  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function verify() {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify/${token}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          // body: JSON.stringify({ token })
        }); 

        console.log("guia");
        console.log(!response.ok);
        console.log({response});

        if (!response.ok) {
          throw new Error(await response.text());
          
        }

        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    }

    verify();
  }, [token]);

  if (loading) {
    return <p>Verifying...</p>;
  }

  if (error) {
    return <>
            <p>Error: {error}</p>;
            <p>{router.query}</p>
           </>
  }

  return <p>Verified successfully!</p>;
};

Verify.getInitialProps = ({ query }) => ({
  token: query.token
});

export default Verify;








// import React, { useState, useEffect } from 'react';
// import Router from 'next/router';

// const Verify = ({ token }) => {
//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     async function verify() {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/verify/${token}`);
//         const data = await res.json();

//         if (data.status === 'success') {
//           setMessage('Cuenta verificada con éxito');
//         } else {
//           setMessage('Error al verificar la cuenta');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     verify();
//   }, [token]);

//   return (
//     <div>
//       {message ? (
//         <p>{message}</p>
//       ) : (
//         <p>Verificando cuenta...</p>
//       )}
//     </div>
//   );
// };

// Verify.getInitialProps = async ({ query }) => {
//   return { token: query.token };
// };

// export default Verify;
