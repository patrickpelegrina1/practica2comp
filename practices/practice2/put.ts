/* eslint-disable */

import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) : Promise<void> => {
    const client = new DynamoDB.DocumentClient()

    await client.put({
        TableName: 'patrick-pelegrina-dynamodb-table',
        Item: {
            partitionKey: event.id, ...event.data
        }
    }).promise()
};


export { handler };
