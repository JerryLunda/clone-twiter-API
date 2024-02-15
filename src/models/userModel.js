const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * allows you to add a user
 * @param {Object} user 
 */
async function createUser(user){
    try {
        const newUser = await prisma.user.create({
            data:{
                name: user.name,
                username: user.username,
                email: user.email,
                password: user.password,
                profil: user.profil
            }
        })
    } catch (error) {
        console.error("Création utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}


async function getAllUser(){
    try {
        const users = await prisma.user.findMany()
        console.log(users);
        return users
    } catch (error) {
        console.error("Création utilisateur impossible");
    }finally{
        await prisma.$disconnect();
    }
}

module.exports ={createUser, getAllUser} 