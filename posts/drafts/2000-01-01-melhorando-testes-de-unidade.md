---
title: Melhorando Testes de unidade
tags: ['testes', 'c']
excerpt: 'Compilado dos meus achados sobre PWA revirando a internet'
---

## Contexto

[Calculadora em C](https://github.com/yudi-azvd/c-calculator). No arquivo
`evaluate.test.cpp` existe o seguinte teste.


## Teste

- explicar em alto nível como funciona a calculdora.
- epxlicar o teste


```cpp
TEST_CASE("evaluate 0", "[evaluate]") {
  char* data;
  char* result;
  t_list* list;

  char expression[] = "3*(8+4)/2";

  list = tokenize(expression);

  evaluate(list, &result);
  REQUIRE(string(result) == "18.000000");

  clear(list);
  free(list);

  free(result);
}
```

Na época que eu escrevi esse teste pela primeira vez, minha intenção era um teste
de unidade. A unidade, nesse caso, é a função `evaluate`.

Mas do jeito que está, esse teste na realidade não é um teste de unidade. Esse
teste depende do funcionamento correto da função `tokenize`.

Como ficou depois de reescrever:

```cpp
TEST_CASE("evaluate 1", "[evaluate]") {
  char* data;
  char* result;
  t_list* list;

  char expression[] = "-30.0 * ( 8 + 4 ) / 2";
  list = create_char_list_from(expression);

  evaluate(list, &result);
  REQUIRE(string(result) == "-180.0000");

  clear(list);
  free(list);
  free(result);
}
```


## Valor de olhar para o passado

Nunca jogue fora os seus códigos. Dá sempre pra melhorar alguma coisa e usar
uma escolha pobre que vc fez no passado para aprender algo novo.
