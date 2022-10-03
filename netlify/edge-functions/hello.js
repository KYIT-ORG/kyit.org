// export default () => new Response("Hello kyit.org");


export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')

    console.log(r.headers, '\n\n@@@\n\n', c, '\n\n@@@\n\n')

    return new Response(is_curl ? 'old school' : 'new school')

}
