export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')
   
    if(!is_curl) return
  

    let t1 = `\x1b[1;33m  Your IP: ${c.ip} \n Your City: ${c.geo.city} \x1b[0m`
    
  
    return new Response(t1)

}
