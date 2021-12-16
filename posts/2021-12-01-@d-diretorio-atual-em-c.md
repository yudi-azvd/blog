---
title: Como acessar o diretório atual em C, REAFZER TÍTULO
date: '2021-12-01'
tags: ['c']
excerpt: 'Uma informação muito útil'
---

Aprendizados:

- `getcwd`
- `strcat`
- `strstr`

Para a disciplina de Estrutura de Dados 2, eu tenho um
[repositório](https://github.com/yudi-azvd/eda2/) com uma estrutura relativamente
complexa para um "projeto" em C. Esse repositório vive no meu computador na
pasta `/home/yudi/<vários diretórios>/eda2/resources` e com o seguinte conteúdo:

```
├── ... outros arquivos como .gitignore, README.md, etc
├── 00-revisao/
├── 01-sorting/
├── 02-hash/
├── 04-trees/
├── 05-heap/
├── 06-graph
│   └── list-und-graph
│       ├── listundgraph.h
│       └── _tests
│           ├── listundgraph.test.cpp
│           └── ...
└── resources
    └── algs4-data
        ├── tinyG.txt
        ├── tinyCG.txt
        └── ... outros vários arquivos com amostras de dados
```

Em `06-graph/list-und-graph/_tests/` existem arquivos de testes que preenchem
os grafos conforme os arquivos de dados na pasta `resources/algs4-data/`.
**Como não estou usando nenhum Makefile, os testes são compilados e executados
de dentro de** `06-graph/list-und-graph/_tests/`.

Os grafos são criados e preenchidos com a função:

```c
ListUndGraph *ListUndGraph_create_from_file(const char *filepath) {
  char full_filepath[PATH_MAX];
  get_res_dir(full_filepath);
  strcat(full_filepath, "/");
  strcat(full_filepath, filepath);
  // agora full_filepath tem o caminho absoluto para o arquivo com dados
}
```

Que funciona como um [construtor](https://pt.wikipedia.org/wiki/Construtor) de
grafo a parir dos dados de um arquivo. O construtor usa a função auxiliar:

```c
void get_res_dir(char *res_dir)
```

Para preencher `res_dir` com o caminho absoluto até `eda2/resources`.

Eu poderia ter simplesmente deixado o caminho absoluto para o diretório `resources/`
como uma string
[hard coded](https://pt.stackoverflow.com/questions/437800/qual-o-significado-do-termo-hard-coded)
no código (exemplo `/home/yudi/uni/eda2/resources`), mas isso traria algumas limitações:

- Se eu mudasse o repositório `eda2` para outro lugar no meu computador, o caminho
já não valeria mais
- Se outra pessoa baixasse meu repositório no computador dela, o caminho já não
valeria mais

Ou eu poderia passar o caminho relativo do arquivo para a função
`ListUndGraph_create_from_file`, mas isso trás outra inconveniência: eu teria que
ficar "calculando" o caminho relativo do arquivo que chama o construtor para
o arquivo de dado e isso é muito chato.

Por isso, a estratégia adotada é que o construtor `ListUndGraph_create_from_file`
recebe o caminho relativo para o arquivo a partir de `resources/` e a função
`get_res_dir` se responsabiliza de montar o caminho absoluto até `resources/`.
Concatenando as duas informações, tem-se o caminho absoluto para o arquivo
desejado.

Assim, o construtor pode ser chamado de qualquer lugar do repositório sem o
programador ter que ficar se preocupando com a quantidade de `../` que teria que
colocar no nome do arquivo.

```c
#include <unistd.h>
#include <linux/limits.h>
#include <string.h>

// Preenche RES_DIR com "/.../eda2/resources".
// "..." é o caminho absoluto até "eda2/".
//
// RES_DIR deve ser um buffer com PATH_MAX bytes.
void get_res_dir(char *res_dir)
{
  getcwd(res_dir, PATH_MAX);
  const char *base_dir_name = "eda2";
  char *base_ptr = strstr(res_dir, base_dir_name);
  *(base_ptr + strlen(base_dir_name)) = '\0';
  const char *res = "/resources";
  strcat(res_dir, res);
}
```
