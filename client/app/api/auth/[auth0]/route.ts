// import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

// export const GET = handleAuth({
//   login: handleLogin({
//     returnTo: "/profile",
//   }),
//   signup: handleLogin({ 
//     authorizationParams: {
//       screen_hint: "signup",
//     },
//     returnTo: "/createProfile",
//   }),
// });



// import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
// import { useUser } from "@auth0/nextjs-auth0/client";

// export const GET = handleAuth({
//   login: async (req, res) => {
//     const { user, error, isLoading } = useUser();

//     // Check if the user is already logged in
//     if (!isLoading && user) {
//       // Optionally, you could add more checks here based on your user data
//       return res.redirect('/'); // Redirect to the homepage if the user is logged in
//     }

//     // Proceed with the usual login process
//     return handleLogin({
//       returnTo: "/profile",
//     })(req, res);
//   },
//   signup: handleLogin({
//     authorizationParams: {
//       screen_hint: "signup",
//     },
//     returnTo: "/createProfile",
//   }),
// });
