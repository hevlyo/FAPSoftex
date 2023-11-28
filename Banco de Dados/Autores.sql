-- Inserção de dados
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor1', 'Nacionalidade1');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor2', 'Nacionalidade2');
INSERT INTO Autores (Nome, Nacionalidade) VALUES ('Autor3', 'Nacionalidade3');

INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro1', 2020, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro2', 2018, 2);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro3', 2019, 1);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro4', 2021, 3);
INSERT INTO Livros (Titulo, AnoPublicacao, AutorID) VALUES ('Livro5', 2020, 2);

-- Consulta simples
SELECT * FROM Autores;
SELECT * FROM Livros;

-- Consulta com INNER JOIN
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
INNER JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com LEFT JOIN
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID;

-- Consulta com filtro por nacionalidade
SELECT Autores.Nome AS Autor, Livros.Titulo
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
WHERE Autores.Nacionalidade = 'Nacionalidade1';

-- Consulta agregada
SELECT Autores.Nome AS Autor, COUNT(Livros.LivroID) AS QuantidadeLivros
FROM Autores
LEFT JOIN Livros ON Autores.AutorID = Livros.AutorID
GROUP BY Autores.Nome;
