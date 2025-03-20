import React from 'react'
<<<<<<< Updated upstream

function Contentcard({title,content,date}) {
  return (
    <div className='contentcard'>
        <img src="https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Os4JlAWUTLka11pnwNHNqlc1H2CxkQsMIkp60RH3qYkXH7BCKcmlmHDQnlAeMiddo9zeJfitMnJHDmK07f4D-DhJeY4FmGTXmIBaWSX-jWjH-fS2JClaHgzM20an3SAiNr5lizlBneclWvlgMcVfKsaGcdi9tl0BBW6ddP4wbIPry5c7u~9kyi8MsT0CXQ~g7cUMWSBpEQRrn56IW-ftQTaJp9qtRlSip0VFVORe33VoUTeL8ipGY3CZlu-4odsJbBheGhWntLPRUxSO9iCjVoBHdDkTeXsZ8Xq1fwOgQ5MRJAW9r4FxWoCf27~NbsRg1ln1juweyRHYBA-oTISwvA__" alt="subimg" />
=======
import './contentcard.css'
function Contentcard({title,content,date,onClick}) {
  // Function to extract the content of the <h2> tag
  const extractH2Content = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h2 = doc.querySelector("h2");
    return h2 ? h2.textContent : null;
  };
  const extractH1Content = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const h2 = doc.querySelector("h1");
    return h2 ? h2.textContent : null;
  };
  const h2Content = extractH2Content(content);
  const h1Content = extractH1Content(content);
  return (
    <div className='contentcard' onClick={onClick} style={{ cursor: 'pointer' }}>
        <img src={title} alt="subimg" />
>>>>>>> Stashed changes
        <div className='content'>
            <h3>{h1Content}</h3>
            <p className='p1'>{h2Content}</p>
            <p className='p2'>Created at:{date}</p>
        </div>
    </div>
  )
}

export default Contentcard
