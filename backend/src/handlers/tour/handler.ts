import {
  createNewTourHandler,
  createFindOwnerToursHandler,
  createFindOwnerArtistToursHandler,
} from './tour';
import { DynamoDB } from 'aws-sdk';
import { TourRepository } from '../../repository/tour';

const dynamodbOptions = () => {
  let region = 'eu-west-2';
  if (process.env.DYNAMODB_REGION) {
    region = process.env.DYNAMODB_REGION;
  }

  return { region };
};

const dynamoDB = new DynamoDB.DocumentClient(dynamodbOptions());
const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const tourRepo = new TourRepository(tableName, dynamoDB);

const newTourHandler = createNewTourHandler(tourRepo);
const findOwnerToursHandler = createFindOwnerToursHandler(tourRepo);
const findOwnerArtistToursHandler = createFindOwnerArtistToursHandler(tourRepo);

export { newTourHandler, findOwnerToursHandler, findOwnerArtistToursHandler };
