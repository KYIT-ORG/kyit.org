export default async(r, c) => {
  
  let abc = `
  <!DOCTYPE html>
<html lang="en">

<head>

    <title>{{ title }}</title>
    
    

</head>

<body style="background: #333; color: #000;">

    <header>
        <a href="/">Know Your IT</a>
    </header>
    
   
    <main>

        <h1>At edge...</h1>


    </main>

    <footer> &copy; 2021 KYIT.org</footer>
</body>

</html>
  `
  
//     let ua = r.headers.get('user-agent')

//     let is_curl = ua.includes('curl')

//     console.log(r.headers, '\n\n@@@\n\n', c, '\n\n@@@\n\n')

    return new Response(abc, {
    
      headers: { "content-type": "text/html" }
    })

}
