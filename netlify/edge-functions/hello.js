// export default () => new Response("Hello kyit.org");


export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')

    //console.log(r.headers, '\n\n@@@\n\n', c, '\n\n@@@\n\n')

    //return new Response(is_curl ? 'old school' : 'new school')
    
    if(!is_curl) return
  
    //let t = '\033[32m This is red text \033[0m'
    //let t = 'hello 333'
    let t1 = '\x1b[31maaaaaa\x1b[0m'
    
    let t2 = '\x1b[23mzzzzzz\x1b[0m'
  
    return new Response(`${t1} \n\n\n ${t2}`)

}
