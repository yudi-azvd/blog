---
title: Como acessar o diretório atual em C
date: '2021-12-01'
tags: ['c']
excerpt: 'Uma informação muito útil'
---


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
