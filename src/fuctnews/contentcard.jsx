import React from 'react'
import './contentcard.css'
function Contentcard({title,content,date}) {
  return (
    <div className='contentcard'>
        <img src="https://s3-alpha-sig.figma.com/img/222c/c630/37460d83213fc820abe67c0bb92fb1cb?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=udGc83gIQ2NzLw9-J40ZwyJgH3G7PeS7k7MpQmU6PgS7yEJDc0lWsPD6nbUm84h7AenBN8~TQ6rljH8sSeczKsJuIN4DPsQKKzmPnQk-yfnx5Hext39m2bSllrCZvIsl7MRFCqLljFYVlnvqKNSWAmhsQ2lt3B5ApFsLeaOuQJ357mJd3qCJkeVw5UbNBXYTG4NrcQ~aMWvTW4eT7VaQAs~VuRUWQlKkMRm16mH7VaFiRqUO~CZPo1eVlmaAsZCODskSCLgfuU0orNOZzloU0vaaT2eJ8MtXsMnNfMXZd9vBSa86o15sH04vGQuc~t98yqlqCZIdOSfnYDS3PyoEkg__" alt="subimg" />
        <div className='content'>
            <h3>{title}</h3>
            <p className='p1'>{content}</p>
            <p className='p2'>{date}</p>
        </div>
    </div>
  )
}

export default Contentcard
