import { createGetUserHandler } from './getUser';
import { UserRepository } from '../../repository/user';
import { DynamoDB } from 'aws-sdk';

const dynamodbOptions = () => {
    let region = 'eu-west-2';
    if (process.env.DYNAMODB_REGION) {
        region = process.env.DYNAMODB_REGION;
    }

    return { region };
};

const dynamoDB = new DynamoDB.DocumentClient(dynamodbOptions());
const tableName = process.env.DYNAMODB_TABLENAME || 'quokka';
const userRepo = new UserRepository(tableName, dynamoDB);

const getUserHandler = createGetUserHandler(userRepo);

export { getUserHandler };
