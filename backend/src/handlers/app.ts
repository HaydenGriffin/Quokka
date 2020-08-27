import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { registerUserHandler } from './auth/handler';
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
import { getUserHandler } from './user/handler';

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
app.use(cookieParser());

const router = express.Router();

router.post('/api/register', registerUserHandler);

router.post('/api/artist', newArtistHandler);
router.get('/api/artist/:ownerUuid', findArtistsByGSIHandler);

router.post('/api/tour', newTourHandler);
router.get('/api/:ownerUuid/tours', findUserToursHandler);
router.get('/api/:ownerUuid/members', findUserMembersHandler);
router.get('/api/:ownerUuid/:artistUuid/tours', findUserArtistToursHandler);

router.post('/api/tour/:tourUuid/member', newTourMemberHandler);
router.get('/api/tour/:ownerUuid/:tourUuid/members');

app.use(router);

if (process.env.ENV === 'local') {
  app.listen(3000, () => {
    console.log('local server listening on 3000');
  });
}

export default app;
