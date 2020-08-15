import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

interface Artist {
  artist: string;
}

dotenv.config();

AWS.config.update({ region: process.env.AWS_REGION });
var ddb = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10' });

const app = express();
app.use(bodyParser.json());

const tableName = process.env.ENVIRONMENT === 'PROD' ? 'Quokka' : 'Quokka_Dev';

app.get('/', (req, res) => {
  res.send('Quokka Backend API');
});

app.post('/api/createArtist', (req, res) => {
  var newArtist: Artist = req.body;

  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    TableName: tableName,
    Item: {
      partitionKey: 'artist_' + uuidv4(),
      timestamp: Date.now(),
      data: newArtist,
    },
  };

  ddb.put(params, (err, data) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Success', data);
    }
  });

  res.send(req.body);
});

app.listen(process.env.API_PORT, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.API_PORT}`
  );
});
