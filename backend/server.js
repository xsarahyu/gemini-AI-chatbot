import 'dotenv/config'
import cors from 'cors'
import './passport_conf.js' 
import express from 'express'
import passport from 'passport'
import session from 'express-session'

const app = express();
const PORT = process.env.PORT
app.use(cors({credentials: true, origin: true}))
app.use(express.json())
// express session 
app.use(session({
  secret: process.env.secret,
  resave: false,
  saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

// Middleware used in protected routes to check if the user has been authenticated
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
}

// Base route
app.get("/home", (req, res) => {
  res.send("Home Page")
})

// Google Auth consent screen route
app.get('/google',
  passport.authenticate('google', { scope: ['email', 'profile'] }
  ));

// Call back route
app.get('/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/login',
  }), (req, res) => {
    res.redirect('http://localhost:5173/messages')
  }
);

// failed route if the authentication fails
app.get("/failed", (req, res) => {
  console.log('User is not authenticated');
  res.send("Failed")
})

// Success route if the authentication is successful
app.get("/success",isLoggedIn, (req, res) => {
  console.log('You are logged in');
  res.send(`Welcome ${req.user.displayName}, your userID is ${req.user.id}`)
})

app.get("/userdata", (req, res) => {
  res.json({username: req.user.displayName})
})

// Route that logs out the authenticated user  
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log('Error while destroying session:', err);
    } else {
      req.logout(() => {
        console.log('You are logged out');
        res.redirect('/home');
      });
    }
  });
});



app.listen(PORT, () => console.log("server running on port" + PORT))
