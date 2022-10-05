export default async(r, c) => {

  let html = `
  Kyit.org's help page...\n
  curl kyit.org/help+linux\n
  curl kyit.org/help+network\n
  `
  
  return new Response(html)

}
