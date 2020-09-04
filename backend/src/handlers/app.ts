import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { checkJwt } from './auth/handler';
import { newArtistHandler, findArtistsByOwnerHandler } from './artist/handler';
import {
  newTourHandler,
  findOwnerToursHandler,
  findOwnerArtistToursHandler,
} from './tour/handler';
import {
  newTourMemberHandler,
  findOwnerMembersHandler,
  findOwnerTourMembersHandler,
  findUserTours,
} from './tourMember/handler';
import * as http from 'http';
import { upsertUserHandler } from './user/handler';

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

router.post('/api/user', upsertUserHandler);

router.post('/api/artist', checkJwt, newArtistHandler);
router.get('/api/artists', checkJwt, findArtistsByOwnerHandler);

router.post('/api/tour', checkJwt, newTourHandler);
router.get('/api/tours', checkJwt, findOwnerToursHandler);
router.get('/api/:artistUuid/tours', checkJwt, findOwnerArtistToursHandler);

router.get('/api/tours/all', checkJwt, findUserTours);

router.post('/api/tour/:tourUuid/member', checkJwt, newTourMemberHandler);
router.get('/api/members', checkJwt, findOwnerMembersHandler);
router.get(
  '/api/tour/:tourUuid/members',
  checkJwt,
  findOwnerTourMembersHandler
);

app.use(router);

if (process.env.ENV === 'local') {
  app.listen(4000, () => {
    console.log('local server listening on 4000');
  });
}

export default app;
