import { createNewArtistHandler, createFindUserArtistsHandler } from './artist';
import { DynamoDB } from 'aws-sdk';
import { ArtistRepository } from '../../repository/artist';

const dynamodbOptions = () => {
  let region = 'eu-west-2';
  if (process.env.DYNAMODB_REGION) {
    region = process.env.DYNAMODB_REGION;
  }

  return { region };
};

const dynamoDB = new DynamoDB.DocumentClient(dynamodbOptions());
const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const artistRepo = new ArtistRepository(tableName, dynamoDB);

const newArtistHandler = createNewArtistHandler(artistRepo);
const findArtistsByGSIHandler = createFindUserArtistsHandler(artistRepo);

export { newArtistHandler, findArtistsByGSIHandler };
