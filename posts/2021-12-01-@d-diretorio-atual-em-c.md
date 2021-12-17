---
title: Como acessar o diretório atual em C, REFAZER TÍTULO
date: '2021-12-01'
tags: ['c', 'sistema-de-arquivos']
excerpt: 'Uma informação muito útil'
---

## Uma introdução sobre o que vamos aprender

Tenho que escrever mais.

Aprendizados:

- `getcwd`
- `strcat`
- `strstr`

## Poblema

Para a disciplina de Estrutura de Dados 2 (EDA2), eu tenho um
[repositório](https://github.com/yudi-azvd/eda2/) com uma estrutura relativamente
complexa para um "projeto" em C. Esse repositório vive no meu computador na
pasta `/home/yudi/<vários diretórios>/eda2/`, mais ou menos com o seguinte conteúdo:

```
├── ... outros arquivos como .gitignore, README.md, etc
├── 00-revisao/
├── 01-sorting/
├── 02-hash/
├── 04-trees/
├── 05-heap/
├── 06-graph
│   ├── _exercises/
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

Em um dos exercícios do livro, eu tinha que criar um
"[construtor](https://pt.wikipedia.org/wiki/Construtor)" que recebe o caminho
de um arquivo para criar e preencher o grafo, com uma assinatura assim:

```c
ListUndGraph *ListUndGraph_create_from_file(const char *filepath)
```

Que é chamada nos arquivos em `06-graph/list-und-graph/_tests/` ou
em `06-graph/_exercises/`.

### Primeiras soluções

A primeira solução que pensei foi a de passar o caminho relativo para o construtor,
algo como `"../../../../resources/algs4-data/tinyG.txt"`. A quantidade de `../`
varia de acordo com o lugar de onde `ListUndGraph_create_from_file` é chamado.
Essa é uma solução viável, mas um tanto incoveniente. O código cliente fica feio
com muitos `../` e é chato para o programador ficar "calculando" essa quantidade.

Outra solução seria passar o caminho absoluto para o construtor. No meu computador,
por exemplo, esse caminho poderia ser
`"/home/yudi/uni/eda2/resources/algs4-data/tinyG.txt"`. Essa solução, entretanto,
traz mais restrições:

- Se por acaso eu precisar mudar o repositório de lugar no meu computador, esse
  caminho absoluto já não valeria mais
- Se outra pessoa baixar esse repositório no computador dela, esse caminho absoluto
  faria menos sentido ainda. Ela teria que ter um username igual a `yudi` e
  baixar o repositório em `~/uni/`
- Essa solução polui o projeto com informações do sistema de arquivos que estão
  fora do repositório e não importam pra ele.

### Uma solução melhor

_Ao meu ver pelo menos._

Para o cliente, seria interessante se a chamada do construtor fosse algo assim:

```c
ListUndGraph *g = ListUndGraph_create_from_file("algs4-data/tinyG.txt");
```

Assim o construtor recebe apenas o _caminho relativo_ para o arquivo a partir de
`resources/` e ele se encarrega de resolver o _caminho absoluto_ até a pasta
`resources/` ou de chamar alguém que sabe fazê-lo.

Vamos optar por criar a função `void get_res_dir(char *res_dir)` que preenche
`res_dir` com o caminho absoluto até `resources/` e é usada pelo construtor. Como
bônus, ela ainda pode ser usada por outras funções de qualquer lugar do repositório
e sua lógica pode ser reaproveitada em outros projetos.

Como vamos colocar `get_res_dir` em seu próprio arquivo de cabeçalho (`.h`), ele
precisa ser incluído por quem quer usá-lo. Infelizmente, o problema da quantidade
`../` volta aqui na hora de usar `#include "../../../get_res_dir.h"`. Isso pode
ser resolvido com um Makefile ou com um gerador de build system. Configurando
essas ferramentas apropriadamente, a compilação lá no final aconteceria mais
ou menos assim:

```sh
# essa quantidade de "../" é apenas para ilustração.
gcc -I"../../../../get_res_dir.h" listundgraph.test.cpp -o listundgraph.test.out
```

Assim seria possível usar a função apenas com

```c
#include "get_res_dir.h"
```

Eu teria que pesquisar mais pra configurar essas ferramentas apropriadamente, mas
durante o curso de EDA2 eu não achei necessário fazer o setup de Make ou CMake
para esses exercícios simples ~por preguiça ou falta de paciência pra aprender~.
Ainda assim, vale ressaltar que em um projeto C/C++ de verdade essa estratégia
seria mais adequada.

### Super pseudocódigo

```cpp
void get_res_dir(char* res_dir) {
  // pegar caminho absoluto do diretório onde o programa está sendo executado
  //    exemplo: "/home/yudi/uni/eda2/06-graph/list-und-graph/_tests/"
  // pegar a substring do caminho absoluto até "eda2"
  //   substr: "/home/yudi/uni/eda2/"
  // concatenar a substring com "resources/"
  //   resultado: "/home/yudi/uni/eda2/resources/"
  // (esse resultado deve estar em res_dir no final da função)
}
```

### Implementação

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
