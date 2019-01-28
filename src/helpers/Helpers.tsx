// tslint:disable-next-line: one-variable-per-declaration
export function handleShuffle(arr: [] | any) {
  const newArr = arr.slice()
  for (let i = newArr.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1))
    ;[newArr[i], newArr[rand]] = [newArr[rand], newArr[i]]
  }
  return newArr
}

export function handleSlice(arr: [] | any, begin: number, end: number) {
  return [...arr.slice(begin, end)]
}

export function handleFilterNames(arr: [], str: string, prop: string) {
  return arr.filter((i: any) => i[prop].startsWith(str))
}
