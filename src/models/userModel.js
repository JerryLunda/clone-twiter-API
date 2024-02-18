const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to add a user
 * @param {Object} user 
 */
async function createUser(user){
    try {
        const newUser = await prisma.user.create({data:user})
    } catch (error) {
        console.error("Création utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to get All users
 * @returns users
 */
async function getAllUser(){
    try {
        const users = await prisma.user.findMany()
        return users
    } catch (error) {
        console.error("Création utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to get one user by Id
 * @param {number} userId 
 * @returns 
 */
async function getUser(userId){
    try {
        const user = await prisma.user.findUnique({
            where: {id:userId}
        })
        return user
    } catch (error) {
        console.error("recuperation utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to remove one user by Id
 * @param {number} userId 
 * @returns 
 */
async function deleteUser(userId){
    try {
        const user = await prisma.user.delete({
            where: {id:userId}
        })
        return user
    } catch (error) {
        console.error("suppression utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


/**
 * allows you to update one user by Id
 * @param {number} userId 
 * @param {object} p_user 
 * @returns 
 */
async function updateUser(userId, p_user){
    try {
        const user = await prisma.user.update({
            where: {id:userId},
            data: {
                name: p_user.name,
                username: p_user.username,
                email: p_user.email,
                password: p_user.password,
                profil: p_user.profil
            }
        },)
        return user
    } catch (error) {
        console.error("modification utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}
module.exports ={createUser, getAllUser, getUser, deleteUser, updateUser} 