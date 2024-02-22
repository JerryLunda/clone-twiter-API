const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to add a Twit
 * @param {Object} twit 
 */
async function createTwit(twit){
    try {
        await prisma.tweet.create({data:twit})
    } catch (error) {
        console.error("post impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to get All Twits
 * @returns twits
 */
async function getAllTwit(){
  return await prisma.tweet.findMany({
    include: {
      _count: {
        select: {likes: true}
      }
    }
  });
  
}


/**
 * allows you to get one Twit by Id
 * @param {number} twitId 
 * @returns twit
 */
async function getTwit(twitId){
    try {
        const twit = await prisma.tweet.findUnique({
            where: {id:twitId}
        })
        return twit
    } catch (error) {
        console.error("recuperation utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


getAllTwit()
module.exports ={createTwit, getAllTwit, getTwit} 