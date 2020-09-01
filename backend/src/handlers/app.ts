import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {
  registerUserHandler,
  loginHandler,
  verifyUserMiddleware,
  logoutHandler,
} from './auth/handler';
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

router.post('/api/login', loginHandler);
router.post('/api/logout', verifyUserMiddleware, logoutHandler);
router.post('/api/register', registerUserHandler);
router.get('/api/user', verifyUserMiddleware, getUserHandler);

router.post('/api/artist', verifyUserMiddleware, newArtistHandler);
router.get('/api/artists', verifyUserMiddleware, findArtistsByOwnerHandler);

router.post('/api/tour', verifyUserMiddleware, newTourHandler);
router.get('/api/tours', verifyUserMiddleware, findOwnerToursHandler);
router.get(
  '/api/:artistUuid/tours',
  verifyUserMiddleware,
  findOwnerArtistToursHandler
);

router.get('/api/tours/all', verifyUserMiddleware, findUserTours);

router.post(
  '/api/tour/:tourUuid/member',
  verifyUserMiddleware,
  newTourMemberHandler
);
router.get('/api/members', verifyUserMiddleware, findOwnerMembersHandler);
router.get(
  '/api/tour/:tourUuid/members',
  verifyUserMiddleware,
  findOwnerTourMembersHandler
);

app.use(router);

if (process.env.ENV === 'local') {
  app.listen(3000, () => {
    console.log('local server listening on 3000');
  });
}

export default app;
