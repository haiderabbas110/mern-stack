import { TwitterApi } from 'twitter-api-v2';
const client = new TwitterApi({
    appKey: 'KHHYPtiaAlmBKZjcUT9HB7MXA',
    appSecret: 'BylFSn47mq7GUBmLuLocrspo7JWq12gjBtFSvl59iWGGJDTARt',
    accessToken: '1421570857-yGpGvojyVaELCC1uHpJWZWpLEhq5cAGXUCSLJ9C',
    accessSecret: '4PpNgS1FhnzNoNWArGK9OI5KCCrpv9rIiPAoDM2J6VRLT',
  });

  // First, post all your images to Twitter
// const mediaIds = await Promise.all([
//     // file path
//     client.v1.uploadMedia('./my-image.jpg'),
//     // from a buffer, for example obtained with an image modifier package
//     client.v1.uploadMedia(Buffer.from(rotatedImage), { type: 'png' }),
//   ]);
  
  // mediaIds is a string[], can be given to .tweet
  await client.v2.tweet({
    text: 'Hello from tweet',
    // media: { media_ids: mediaIds }
  });