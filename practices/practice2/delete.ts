/* eslint-disable */

import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) : Promise<void> => {
    const client = new DynamoDB.DocumentClient()

    await client.delete({
        TableName: 'patrick-pelegrina-dynamodb-table',
        Key: {
            partitionKey: event.id, ...event.data
        }
    }).promise()

    // @ts-ignore

};


export { handler };
