/* eslint-disable */

import {DynamoDB} from "aws-sdk";

const handler = async (event: any, _context: any) : Promise<void> => {
    const client = new DynamoDB.DocumentClient()

    const {Item} = await client.get({
        TableName: 'jordi-sapes-dynamodb-table',
        Key: {
            partitionKey: event.id
        }
    }).promise()
    // @ts-ignore
    console.log(Item)
    if(!Item) {
        throw new Error('Item not found')
    }
};


export { handler };
