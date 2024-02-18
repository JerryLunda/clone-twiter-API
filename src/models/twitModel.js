const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to add a Twit
 * @param {Object} twit 
 */
async function createTwit(twit){
    // try {
        await prisma.tweet.create({data:twit})
    // } catch (error) {
    //     console.error("post impossible");
    // }finally{
    //     await prisma.$disconnect();
    // }
}


/**
 * allows you to get All Twits
 * @returns twits
 */
async function getAllTwit(){
    try {
        const twits = await prisma.tweet.findMany()
        return twits
    } catch (error) {
        console.error("Création utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to get one Twit by Id
 * @param {number} twitId 
 * @returns twit
 */
async function getTwit(twitId){
    // try {
        const twit = await prisma.tweet.findUnique({
            where: {id:twitId}
        })
        return twit
    // } catch (error) {
    //     console.error("recuperation utilisateur impossible");
    // }finally{
    //     await prisma.$disconnect();
    // }
}


// /**
//  * allows you to remove one Twit by Id
//  * @param {number} TwitId 
//  * @returns 
//  */
// async function deleteTwit(TwitId){
//     try {
//         const Twit = await prisma.Twit.delete({
//             where: {id:TwitId}
//         })
//         return Twit
//     } catch (error) {
//         console.error("suppression utilisateur impossible");
//     }finally{
//         await prisma.$disconnect();
//     }
// }


// /**
//  * allows you to update one Twit by Id
//  * @param {number} TwitId 
//  * @param {object} p_Twit 
//  * @returns 
//  */
// async function updateTwit(twitId, p_Twit){
//     // try {
//         const Twit = await prisma.Twit.update({
//             where: {id:twitId},
//             data: {
//                 content: p_Twit.content,
//                 url: p_Twit.url,
//                 authorId: twitId 
//             }
//         })
//         return Twit
//     // } catch (error) {
//     //     console.log("modification utilisateur impossible");
//     // }finally{
//     //     await prisma.$disconnect();
//     // }
// }
module.exports ={createTwit, getAllTwit, getTwit} 