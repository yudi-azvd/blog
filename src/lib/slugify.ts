// Na verdade essa função não faz um slugify de verdade
// Ela deveria aceitar "Um subtítulo com complicação"
// e cuspir "um-subtitulo-com-complicacao"
// sem acentos, cedilhas, ou caracteres especiais

const slugify = (str: string) => str.replace(/^.*\d{4}-\d{2}-\d{2}-/, '')

export default slugify
