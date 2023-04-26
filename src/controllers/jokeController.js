const axios = require('axios')
app.get('/async', async(req, res) => {
    try{
        const response = await axios ({
            method: 'get',
            url: 'https://dad-jokes.p.rapidapi.com/random/joke',
            headers: {
              'content-type': 'application/octet-stream',
              'X-RapidAPI-Key': 'fb285e6edfmshc04549f506e7901p182b88jsn78258363b8e1',
              'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
            }
          });
    
        const joke = response.data.body[0]
        res.status(200).json({ joke });

    } catch (err) {
        res.status(500).json("Dad's joke fail to load");
    }
});
   
module.exports = jokeController