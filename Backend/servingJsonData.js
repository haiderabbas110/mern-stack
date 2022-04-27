// const http = require('http');
import http from 'http';
const requestListener = (req, res)=>{
console.log("Request is Incoming");
const responseData = {
    message:"Hello, Codegirls Learner",
    articleData:{
        articleName: "How to send JSON response from NodeJS",
        category:"NodeJS",
        status: "published"
    },
    endingMessage:"Visit codegirls.org for more"
}
const jsonContent = JSON.stringify(responseData);
res.end(jsonContent);
};
const server = http.createServer(requestListener);
server.listen(3003,'localhost', function(){
    console.log("Server is Listening at Port 3000!");
});
