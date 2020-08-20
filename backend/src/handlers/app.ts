import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { newArtistHandler, findArtistsByGSIHandler } from './artist/handler';
import * as http from 'http';

const app = express();
app.use(cors());
app.use(
  bodyParser.json({
    verify(
      req: http.IncomingMessage,
      res: http.ServerResponse,
      buf: Buffer,
      _encoding: string
    ) {
      req['rawBody'] = buf;
    },
  })
);

const router = express.Router();

router.post('/api/artist', newArtistHandler);

router.get('/api/artist/:ownerUuid', findArtistsByGSIHandler);

app.use(router);

export default app;
