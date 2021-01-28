const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const nodemailer = require('nodemailer')


app.prepare().then(() => {
  const server = express()
 	
  server.use(bodyParser.json())

    server.post('/api/contact', (req, res) => {
    const { fullName, email} = req.body

    console.log(req.body)
    const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
    user: 'EnglishDirectwithRebecca@gmail.com',
    pass: 'Confetti2020!' 
  }
});
  const mailer2 = {
    title: "New Form From English Direct",
    from: "English Direct",
    to: ["rwarne1@gmail.com", "mickeygray85@hotmail.com"],
    subject: `New Form From English Direct`,
    text: ` New Form Recieved on ${ Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "America/Los_Angeles",
      },
      {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }
    ).format(new Date(Date.now()))} . Name: ${fullName}, email:${email}.`
  };

  transporter.sendMail(mailer2);
    res.send('success')
  })

  
 server.post('/api/lookup', async (req, res) => {
    //const { ipadd } = req.body

  console.log(req.body) 
  
  const endTime = (new Date).getTime()

  const {startTime, ipadd, clicks} = req.body	 
  
  const totalTime = (endTime - startTime)/60000  	 

  const clickIntervals = clicks.map((click)=>{let obj={clickTime:`${((click.time-startTime)/60000)} minutes after load`,loc:click.loc}; return obj;})  
     
  const timestamp = new Date(Date.now())	      
  
  const final = {ipadd, timestamp, totalTime, clickIntervals}	 
 	 
 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
    user: 'EnglishDirectwithRebecca@gmail.com',
    pass: 'Confetti2020!' 
  }
});
  const mailer2 = {
    title: "Latest visitors clicks",
    from: "English Direct",
    to: ["mickeygray85@hotmail.com"],
    subject: `Ip Address of Latest Visitor`,
    text: `${JSON.stringify(final)}`
                          
      
       
  

  
  };

  transporter.sendMail(mailer2);
  
  res.send('success')
  
  })
	


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Read on http://localhost:3000')
  })
})