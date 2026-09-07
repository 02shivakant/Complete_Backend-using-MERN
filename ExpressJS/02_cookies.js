import express from 'express'

const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/profile' , function(req,res){
  res.send("main change ho gya")
})
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})