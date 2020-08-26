import {
  createNewTourMemberHandler,
  createFindUserMembersHandler,
  createFindUserTourMembersHandler,
} from './tourMember';
import { DynamoDB } from 'aws-sdk';
import { TourMemberRepository } from '../../repository/tourMember';

const dynamodbOptions = () => {
  let region = 'eu-west-2';
  if (process.env.DYNAMODB_REGION) {
    region = process.env.DYNAMODB_REGION;
  }

  return { region };
};

const dynamoDB = new DynamoDB.DocumentClient(dynamodbOptions());
const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const tourRepo = new TourMemberRepository(tableName, dynamoDB);

const newTourMemberHandler = createNewTourMemberHandler(tourRepo);
const findUserMembersHandler = createFindUserMembersHandler(tourRepo);
const findUserTourMembersHandler = createFindUserTourMembersHandler(tourRepo);

export {
  newTourMemberHandler,
  findUserMembersHandler,
  findUserTourMembersHandler,
};
