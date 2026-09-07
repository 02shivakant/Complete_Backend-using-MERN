import express from 'express'

const app = express()

app.use((req,res,next)=>{
  console.log('Request received:');
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile' , function(req,res){
  res.send("main change ho gya")
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})