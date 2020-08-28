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
import { UserRepository } from '../repository/user';
import { DynamoDB } from 'aws-sdk';

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

const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const dynamodbOptions = () => {
  let region = 'eu-west-2';
  if (process.env.DYNAMODB_REGION) {
    region = process.env.DYNAMODB_REGION;
  }

  return { region };
};

router.post('/api/login', loginHandler);
router.post('/api/logout', verifyUserMiddleware, logoutHandler);
router.post('/api/register', registerUserHandler);

router.post('/api/artist', verifyUserMiddleware, newArtistHandler);
router.get('/api/artists', verifyUserMiddleware, findArtistsByGSIHandler);

router.post('/api/tour', verifyUserMiddleware, newTourHandler);
router.get('/api/tours', verifyUserMiddleware, findUserToursHandler);
router.get(
  '/api/:artistUuid/tours',
  verifyUserMiddleware,
  findUserArtistToursHandler
);

router.post(
  '/api/tour/:tourUuid/member',
  verifyUserMiddleware,
  newTourMemberHandler
);
router.get('/api/members', verifyUserMiddleware, findUserMembersHandler);

router.get(
  '/api/tour/:tourUuid/members',
  verifyUserMiddleware,
  findUserTourMembersHandler
);

app.use(router);

if (process.env.ENV === 'local') {
  app.listen(3000, () => {
    console.log('local server listening on 3000');
  });
}

export default app;
