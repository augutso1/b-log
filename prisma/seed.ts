// Post básico para teste
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


  async function criarPost() {
    const novoPost = await prisma.post.create({
      data: {
        title: 'Meu primeiro post',
        content: 'Este é o conteúdo do meu primeiro post.',
      }
    })
    console.log(novoPost)
  }

  criarPost()
    .catch((e) => {
      console.error(e)
      process.exit(1)
    })
