export const nameImage = (str: string) => {
  const letters = str?.split(" ").map((parts: string) => parts[0].toUpperCase())
  if(letters) {
    return letters.join("")
  }
}