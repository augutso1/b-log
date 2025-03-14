// Exemplo básico
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function criarUsuario() {
  const novoUsuario = await prisma.user.create({
    data: {
      email: 'exemplo@email.com',
      name: 'João',
      password: '123456',
    }
  })
  console.log(novoUsuario)
}

criarUsuario()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })