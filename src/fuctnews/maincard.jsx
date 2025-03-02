import React from 'react'
function Maincard({title,content}) {
  return (
    <div className='outer'>
      <img src="https://s3-alpha-sig.figma.com/img/9b92/834d/ba5db2760928a8f3f665c5a65b4b8020?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HXsW6AXLqR-i0Pz4D0KHi1mNP6Jn8VBjpTJwCd7MxhhIF3jLVbioV4OzqVfqz0hqdtyP38IdRU2zWXwvHojWAdPPbOhanziajE1vWGV8dgSWgimGMZWOIQWH7RPTMyaWbbgqJW4gX8IamndAWm5ZzgxMJqadumnZhy38eJYuABDpbhgp6bQ99XyaJ9cOaoI3z-QuHYhZ5jEh7D2riZl3Tl0yuENVOQMBhwwhs1B3TKiaYK7u-JIbkbiWATijziwRZHlV6pVlDuCx9RcpSu4FhbGQ-ss5OZIkKi5ObjB7qKNpRQOo9MrvKw57~1mXQFClpMYxP7TeamwSqr5HTfBUbg__" alt="mainimage"  />
      <div className='maincard'>
        <h5>TIN NỔI BẬT</h5>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Maincard
