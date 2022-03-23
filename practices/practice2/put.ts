<<<<<<< HEAD
import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) => {
    const client = new DynamoDB.DocumentClient()
    await client.put({
        Item: {
            id: event.id, ...event.data
        },
        TableName: "jordi-sapes-dynamodb-table"
    }).promise()
}
export {handler}
=======
/* eslint-disable */

import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) : Promise<void> => {
    const client = new DynamoDB.DocumentClient()

    await client.put({
        TableName: 'jordi-sapes-dynamodb-table',
        Item: {
            partitionKey: event.id, ...event.data
        }
    }).promise()
};


export { handler };
>>>>>>> 83dacf8 (practice2 resolved)
