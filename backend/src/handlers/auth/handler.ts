import { UserRepository } from '../../repository/user';

export * from './verifyUser';
export * from './registerUser';
export * from './login';

import { createLoginHandler } from './login';
import { createRegisterUserHandler } from './registerUser';
import { verifyUserMiddleware } from './verifyUser';
import { DynamoDB } from 'aws-sdk';
import { RequiredFieldsValidator } from '../../validator/requiredFieldsValidator';
import { createLogoutHandler } from './logout';

const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const dynamodbOptions = () => {
  let region = 'eu-west-2';
  if (process.env.DYNAMODB_REGION) {
    region = process.env.DYNAMODB_REGION;
  }

  return { region };
};

const dynamoDb = new DynamoDB.DocumentClient(dynamodbOptions());
const userRepo = new UserRepository(tableName, dynamoDb);

const loginRequiredFields = new RequiredFieldsValidator([
  'emailAddress',
  'password',
]);
const registerRequiredFields = new RequiredFieldsValidator([
  'firstName',
  'emailAddress',
  'password',
  'passwordConfirm',
]);

const loginHandler = createLoginHandler(loginRequiredFields, userRepo);
const logoutHandler = createLogoutHandler();
const registerUserHandler = createRegisterUserHandler(
  registerRequiredFields,
  userRepo
);

export {
  loginHandler,
  logoutHandler,
  registerUserHandler,
  verifyUserMiddleware,
};
export { cleanUser } from '../../data/cleanUser';
