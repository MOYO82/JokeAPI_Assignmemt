const axios = require('axios')
app.get('/async', async(req, res) => {
    try{
        const response = await axios ({
            method: 'get',
            url: 'https://dad-jokes.p.rapidapi.com/random/joke',
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
              'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
          });
            
        res.status(200).json(response.data);

    } catch (err) {
        res.status(500).json({ "Dad's joke": err});
    }
});
   
module.exports = jokeController