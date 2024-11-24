import express from "express";

const posts = [
    {
        id: 1,
        descricao: "uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato curioso observando a janela",
        imagem: "https://placekitten.com/400/200"
    },
    {
        id: 3,
        descricao: "Um gatinho ronronando",
        imagem: "https://picsum.photos/id/237/300/200" // Utilizando outra API de imagens aleatórias
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/g/200/300" // Formato diferente para imagem quadrada
    },
    {
        id: 5,
        descricao: "Um gatinho tomando sol",
        imagem: "https://loremflickr.com/300/200/kitten" // Outra API para imagens aleatórias
    },
    {
        id: 6,
        descricao: "Gato preto fazendo pose",
        imagem: "https://placekitten.com/400/300?image=10" // Especificando uma imagem específica
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor rodando...");
});

function findPostPerId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    })
}

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = findPostPerId(req.params.id);
    res.status(200).json(posts[index]);
});