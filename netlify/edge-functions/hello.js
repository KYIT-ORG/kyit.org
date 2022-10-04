// export default () => new Response("Hello kyit.org");


export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')

    //console.log(r.headers, '\n\n@@@\n\n', c, '\n\n@@@\n\n')

    //return new Response(is_curl ? 'old school' : 'new school')
    
    if(!is_curl) return
  
    //let t = '\033[32m This is red text \033[0m'
    //let t = 'hello 333'
    let t = '\x1b[31msfsf\x1b[0m'
  
    return new Response(t)

}
