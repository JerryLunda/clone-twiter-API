const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to like a Twit
 * @param {Object} like 
 */
async function createLike(like){
    try {
        const newTwit = await prisma.like.create({data:like})
    } catch (error) {
        console.error("like impossible");
    }finally{
        await prisma.$disconnect();
    }
}


module.exports ={createLike} 