// export default () => new Response("Hello kyit.org");


export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')

    console.log(is_curl)

    return new Response(is_curl ? 'old school' : 'new school')

}
