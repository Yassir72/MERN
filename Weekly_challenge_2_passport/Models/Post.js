const fs = require('fs');


function getAllPosts(filePath) {
    let data=fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
function createPost(fileName,data) {
    fs.writeFileSync(fileName, data);
}

module.exports = {getAllPosts,createPost};