/* eslint-disable */

import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) : Promise<void> => {
    const client = new DynamoDB.DocumentClient()

    const data = await client.delete({
        TableName: 'jordi-sapes-dynamodb-table',
        Key: {
            partitionKey: event.id, ...event.data
        },
        ReturnValues: 'ALL_OLD',
    }).promise()

    // @ts-ignore
    console.log(data.Attributes)
};


export { handler };
