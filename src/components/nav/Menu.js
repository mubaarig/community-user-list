import React from 'react';
console.clear()

function Hamburger(props) {
  const {children} = props
  const [toggle,setToggle] = React.useState(true)
  const [effect,setEffect] = React.useState('')
  const handleClick = e=>{
    setToggle(!toggle)
  }
  React.useEffect(()=>{
    if (toggle) {
      setEffect('slideOutLeft fadeOut')
    } else {
      setEffect('slideInLeft fadeIn')
    }
  }, [toggle])
  return (
    <div>
      <label className="menu">
        <input type="checkbox" checked={toggle} onClick={handleClick} />
        <div>
          <span></span>
          <span></span>
        </div>
      </label>
      <div className={`animated faster ${effect}`}>{children}</div>
    </div>
  )
}

const list = [
  {icon:'\u{1f4dd}',name:'My Blog',url:'https://www.techcycle.me'},
  {icon:'\u{1f4dc}',name:'My Portfolio',url:'https://mjunaidi.github.io'},
  {icon:'\u{1f4bb}',name:'My Dev Tools',url:'https://www.mjunaidi.com'},
]
function App(props) {
  return (
    <div className="container-fluid">
      <div className="pt-2 text-center">
        <Badge danger pill className="mr-2">CSS</Badge>
        <Badge dark pill className="mr-2">React JS</Badge>
        <Badge info pill className="mr-2">Bootstrap 4</Badge>
        <Badge light pill>{todate()}</Badge>
        <h1>ReactJS: Animated Hamburger Menu</h1>
        <p className="lead">The animation is pure CSS</p>
        <p className="lead"><A href="https://codepen.io/aaroniker/pen/GLyzaG" blank className="mr-3">Main Reference</A></p>
        <p className="lead">List animation is powered by <A href="https://daneden.github.io/animate.css" blank>Animate CSS</A></p>
      </div>
      <hr/>
      <div className="text-center">
        <Hamburger>
          <div className="list-group">
            {
              list.map((e,i)=>{
                const {icon,name,url} = e
                return (
                  <A key={i} href={url} blank className="list-group-item list-group-item-action shadow h3 btn-next"><span className="mr-3">{icon}</span>{name}</A>
                )
              })
            }
          </div>
        </Hamburger>
      </div>
    </div>
  )
}

/* Util */
function trace(value,size) {
  if (typeof(size)==='number'&&size>0) {
    console.log(JSON.stringify(value,null,size))
  } else {
    console.log(value)
  }
}

function todate() {
  return (new Date()).toISOString().split('T')[0]
}

function lipsum(n=10,dot=false) {
  if (typeof(n)!=='number'||(typeof(n)==='number'&&n<1)) n=10
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'vivamus', 'et', 'accumsan', 'augue', 'duis', 'eget', 'nunc', 'id', 'sodales', 'finibus', 'vestibulum', 'sagittis', 'magna', 'nec', 'rutrum', 'volutpat', 'risus', 'tincidunt', 'justo', 'non', 'gravida', 'tortor', 'enim', 'in', 'urna', 'ut', 'vel', 'metus', 'pellentesque', 'porttitor', 'vitae', 'nisi', 'nullam', 'faucibus', 'condimentum', 'quam', 'imperdiet', 'class', 'aptent', 'taciti', 'sociosqu', 'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra', 'inceptos', 'himenaeos', 'interdum', 'malesuada', 'fames', 'ac', 'ante', 'primis', 'curabitur', 'nibh', 'quis', 'iaculis', 'cras', 'mollis', 'eu', 'congue', 'leo']
  const count = Math.floor(Math.random()*n+1)
  const sentence = []
  const indexes = (new Array(count)).fill(0).map(index=>Math.floor(Math.random()*words.length))
  indexes.forEach((index,i)=>{
    const word = words[index]
    if (i===0)
      sentence.push(word.charAt(0).toUpperCase()+word.substr(1))
    else 
      sentence.push(word)
  })
  if (dot) return sentence.join(' ').concat('.')
  return sentence.join(' ')
}

function PreCode(props) {
  const {children,value,size=2} = props
  if (typeof(value)==='string') {
    return (
      <div><pre><code>{value.trim()}</code></pre></div>
    ) 
  }
  if (typeof(value)==='object' || typeof(value)==='number' || typeof(value)==='boolean') {
    return (
      <div><pre><code>{JSON.stringify(value,null,size)}</code></pre></div>
    )
  }
  if (typeof(children)==='string') {
    return (
      <div><pre><code>{children.trim()}</code></pre></div>
    )
  }
  return (
    <div><pre><code>{JSON.stringify(children,null,size)}</code></pre></div>
  )
}

function Button(props) {
  const {children, className='', outline=false, sm=false, lg=false, block=false, disabled=false, shadow=false, label='', title='', button=true, submit=false, reset=false, onClick} = props
  const classNames = ['btn',className]
  Object.keys(props).forEach(e=>{
    if (['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark', 'link'].indexOf(e)>=0) {
      classNames.push(`btn-${outline?'outline-':''}${e}`)
    }
    if (['h1','h2','h3','h4','h5','h6'].indexOf(e)>=0) classNames.push(e)
  })
  if (sm) classNames.push('btn-sm')
  if (lg) classNames.push('btn-lg')
  if (block) classNames.push('btn-block')
  if (shadow) classNames.push('shadow')
  let type = 'button'
  if (submit) type = 'submit'
  else if (reset) type = 'reset'
  return (
    <button className={classNames.join(' ')} onClick={onClick} disabled={disabled} type={type} title={title}>{label||children}</button>
  )
}

function Badge(props) {
  const {children,className='',pill,title='',shadow=false} = props
  const classNames = ['badge',className]
  if (pill) {
    classNames.push('badge-pill')
  }
  Object.keys(props).forEach(e=>{
    if (['primary','secondary','info','success','warning','danger','light','dark'].indexOf(e)>=0) {
      classNames.push(`badge-${e}`)
    }
    if (['h1','h2','h3','h4','h5','h6'].indexOf(e)>=0) {
      classNames.push(e)
    }
  })
  if (shadow) classNames.push('shadow')
  return (
    <span className={classNames.join(' ')} title={title}>{children}</span>
  )
}

function A(props) {
  const {href='',label='',className='',children,color,target='',title='',shadow=false,outline=false,sm=false,lg=false,blank=false} = props
  const id = `link${Date.now()}${(new Array(6)).fill(0).map(e=>Math.floor(Math.random()*10)).join('')}`
  const classNames = [id,className]
  const style = {}
  if (typeof(color)==='string'&&color.length>0) style.color = color
  if (shadow) classNames.push('shadow')
  let isBtn = false
  Object.keys(props).forEach(e=>{
    if (['primary','secondary','info','success','warning','danger','light','dark'].indexOf(e)>=0) {
      if (outline) classNames.push(`btn btn-outline-${e}`)
      else classNames.push(`btn btn-${e}`)
      isBtn = true
    }
    if (['h1','h2','h3','h4','h5','h6'].indexOf(e)>=0) classNames.push(e)
  })
  if (isBtn) {
    if (sm) classNames.push('btn-sm')
    if (lg) classNames.push('btn-lg')
  }
  return (
    <>
      <style>{`#${id}{position:relative;text-decoration:none;}#${id}:hover{text-decoration:none;}#${id}:before{content:"";position:absolute;width:100%;height:.2rem;bottom:0;left:0;background-color:currentColor;visibility:hidden;transform:scaleX(0);transition:all 0.3s ease-in-out 0s;-webkit-transform:scaleX(0);-webkit-transition:all 0.3s ease-in-out 0s;}#${id}:hover:before{visibility:visible;-webkit-transform:scaleX(1);transform:scaleX(1);}`}</style>
      <a id={id} href={href} className={classNames.join(' ')} style={style} target={target||blank?'_blank':''} title={title||!target&&blank?'Open in New Tab':''}>{label||children}</a>
    </>
  )
}

function Callout(props) {
  const {title='',children,className='',shadow=false} = props
  const classNames = ['callout']
  Object.keys(props).forEach(e=>{
    if (['primary','secondary','info','success','warning','danger','light','dark'].indexOf(e)>=0) {
      classNames.push(`callout-${e}`)
    }
  })
  if (shadow) {
    classNames.push('shadow')
  }
  return (
    <div className={classNames.join(' ')}>
      {
        typeof(title)==='string'&&title.length>0&&
        <h5>{title}</h5>
      }
      <p>{children}</p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);