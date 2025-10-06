export default function Listings(){
  const items = [
    {id:1,title:'Smartphone - Samsung A12',price:'$120',loc:'Harare',desc:'Good condition'},
    {id:2,title:'Laptop - HP ProBook',price:'$450',loc:'Bulawayo',desc:'Lightly used'},
  ]
  return (
    <div className="container">
      <h1>All Listings</h1>
      <div className="card-grid">
        {items.map(it=>(
          <div key={it.id} className="card"><h3>{it.title}</h3><div className="meta">{it.loc}</div><div className="price">{it.price}</div><p>{it.desc}</p></div>
        ))}
      </div>
    </div>
  )
}
