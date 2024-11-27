import axios from "axios";
import express from 'express';

const app = express();

const port = 7077;


app.use(express.json());

app.get('/api/image/random', async (req, res) => {
    try {
        const response = await axios.get("https://picsum.photos/200", { responseType: 'arraybuffer' });
        res.set('Content-Type', 'image/jpeg');
        res.send(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Error fetching random image');
    }
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})