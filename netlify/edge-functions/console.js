export default async(r, c) => {
  
    let ua = r.headers.get('user-agent')

    let is_curl = ua.includes('curl')
   
    if(!is_curl) return
  

    let t1 = `\x1b[1;33m\n
    Your IP: ${c.ip} \n
    Your City: ${c.geo.city} - ${c.subdivision.name} \n
    Your Country: ${c.geo.country.name} \n
    \x1b[0m`
    
  
    return new Response(t1)

}
