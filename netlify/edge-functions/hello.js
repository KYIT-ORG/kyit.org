// export default () => new Response("Hello kyit.org");


export default async(request, context) => {

  console.log(request, '~~~\n\n\n', context)
  
  return context.json({ request })

}
