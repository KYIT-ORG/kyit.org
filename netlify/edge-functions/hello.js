// export default () => new Response("Hello kyit.org");


export default async(request, context) => {
  
  let ua = request.headers['user-agent']

  console.log(ua, request.method)
  
  return context.json({ ua })

}
