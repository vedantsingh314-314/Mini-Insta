const Imagekit = require('@imagekit/nodejs');   

const imagekit = new Imagekit({
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
});


const uploadImage = async (buffer) => {
    const result= await imagekit.files.upload({
        file:buffer.toString('base64'),
        fileName:'post.jpg'
    });
    return result;
}
module.exports = uploadImage;
