import React from 'react'

function Contentcard({number}) {
  return (
    <div className='contentcard'>
        <img src="https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Os4JlAWUTLka11pnwNHNqlc1H2CxkQsMIkp60RH3qYkXH7BCKcmlmHDQnlAeMiddo9zeJfitMnJHDmK07f4D-DhJeY4FmGTXmIBaWSX-jWjH-fS2JClaHgzM20an3SAiNr5lizlBneclWvlgMcVfKsaGcdi9tl0BBW6ddP4wbIPry5c7u~9kyi8MsT0CXQ~g7cUMWSBpEQRrn56IW-ftQTaJp9qtRlSip0VFVORe33VoUTeL8ipGY3CZlu-4odsJbBheGhWntLPRUxSO9iCjVoBHdDkTeXsZ8Xq1fwOgQ5MRJAW9r4FxWoCf27~NbsRg1ln1juweyRHYBA-oTISwvA__" alt="subimg" />
        <div className='content'>
            <h3>Subheading {number}</h3>
            <p className='p1'>Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.</p>
            <p className='p2'>FUCT NEWS | DD/MM/YYYY</p>
        </div>
    </div>
  )
}

export default Contentcard
