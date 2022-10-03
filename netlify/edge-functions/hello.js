// export default () => new Response("Hello kyit.org");


export default async(request, context) => {

  return context.json(request)

}
