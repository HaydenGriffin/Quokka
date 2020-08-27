import {
  createNewTourMemberHandler,
  createFindOwnerMembersHandler,
  createFindOwnerTourMembersHandler,
  createFindUserTours,
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
const findUserMembersHandler = createFindOwnerMembersHandler(tourRepo);
const findUserTourMembersHandler = createFindOwnerTourMembersHandler(tourRepo);
const findUserTours = createFindUserTours(tourRepo);

export {
  newTourMemberHandler,
  findUserMembersHandler,
  findUserTourMembersHandler,
  findUserTours,
};
