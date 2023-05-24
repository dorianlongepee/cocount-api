import expressLoader from './express';
import mongooseLoader from './mongo';

export default async ({ expressApp }) => {
    await mongooseLoader();
    console.log('MongoDB Intialized');
    await expressLoader({ app: expressApp });
    console.log('Express Intialized');
}