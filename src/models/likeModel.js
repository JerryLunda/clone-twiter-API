const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to like a Twit
 * @param {Object} newLike 
 */
async function createLike(newLike){
    // try {
        await prisma.like.create({data:newLike})
    // } catch (error) {
    //     console.error("like impossible");
    // }finally{
    //     await prisma.$disconnect();
    // }
}


/**
 * allows you to unlike tweet by Iduser and idtweet
 * @param {number} userId 
 * @param {number} tweetId
 * @returns 
 */
async function deleteLike(idUser, idTweet){
    try {
            await prisma.like.deleteMany({
            where: {
                AND: [
                    {userId:idUser}, {tweetId:idTweet}
                ]
            }
        })
        return user
    } catch (error) {
        console.error("suppression utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}

module.exports ={createLike, deleteLike} 