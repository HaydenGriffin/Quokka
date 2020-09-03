import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { Repository, RecordType } from './types';

interface User {
    pk?: string;
    sk?: string;
    firstName: string;
    password: string;
    emailAddress: string;
    registeredAt?: string;
    enabled: boolean;
}

class UserRepository implements Repository<User> {
    private readonly dynamoDB: DocumentClient;
    private readonly tableName: string;

    constructor(tableName: string, dynamoDB: DocumentClient) {
        this.tableName = tableName;
        this.dynamoDB = dynamoDB;
    }

    async findByPK(pk: string): Promise<User> {
        const params = {
            TableName: this.tableName,
            Key: {
                pk,
                sk: RecordType.ACCOUNT,
            },
        };

        return (await this.dynamoDB.get(params).promise()).Item as User;
    }

    updateField(
        pk: string,
        sk: number,
        field: string,
        value: any
    ): Promise<any> {
        const params = {
            TableName: this.tableName,
            Key: {
                pk,
                sk,
            },
            UpdateExpression: `set ${field} = :field`,
            ExpressionAttributeValues: {
                ':field': value,
            },
            ReturnValues: 'UPDATED_NEW',
        };

        return this.dynamoDB.update(params).promise();
    }

    insert(toInsert: User): Promise<any> {
        const params = {
            TableName: this.tableName,
            Item: {
                pk: toInsert.emailAddress,
                sk: RecordType.ACCOUNT,
                ...toInsert,
            },
        };

        return this.dynamoDB.put(params).promise();
    }

    insertUser(sub: string): Promise<any> {
        const params = {
            TableName: this.tableName,
            Item: {
                pk: sub,
                sk: RecordType.ACCOUNT,
            },
        };

        return this.dynamoDB.put(params).promise();
    }

    delete(pk: string, sk: string): Promise<any> {
        const params = {
            TableName: this.tableName,
            Key: {
                pk,
                sk,
            },
        };

        return this.dynamoDB.delete(params).promise();
    }
}

export { UserRepository, User };
