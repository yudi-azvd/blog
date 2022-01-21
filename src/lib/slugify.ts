const slugify = (str: string) => str.replace(/^.*\d{4}-\d{2}-\d{2}-/, '')

export default slugify
