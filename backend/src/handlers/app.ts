import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { newArtistHandler, findArtistsByGSIHandler } from './artist/handler';
import {
  newTourHandler,
  findUserToursHandler,
  findUserArtistToursHandler,
} from './tour/handler';
import {
  newTourMemberHandler,
  findUserMembersHandler,
  findUserTourMembersHandler,
} from './tour-member/handler';
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

router.post('/api/tour', newTourHandler);
router.get('/api/:ownerUuid/tours', findUserToursHandler);
router.get('/api/:ownerUuid/members', findUserMembersHandler);
router.get('/api/:ownerUuid/:artistUuid/tours', findUserArtistToursHandler);

router.post('/api/tour/:tourUuid/member', newTourMemberHandler);
router.get('/api/tour/:ownerUuid/:tourUuid/members');

app.use(router);

export default app;
