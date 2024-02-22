// authController.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const router = express.Router();


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Recherche de l'utilisateur dans la base de données
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(401).json({ message: 'email ou mot de passe incorrect' });
    }
    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'email ou mot de passe incorrect' });
    }
    // Génération du JWT
    const token = jwt.sign({ userId: user.id }, 'athkey');
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};