import Link from 'next/link'
export default function Home(){
  const items = [
    {id:1,title:'Smartphone - Samsung A12',price:'$120',loc:'Harare'},
    {id:2,title:'Laptop - HP ProBook',price:'$450',loc:'Bulawayo'},
    {id:3,title:'Designer Jacket',price:'$60',loc:'Harare'},
    {id:4,title:'Groceries Bundle',price:'$25',loc:'Mutare'},
    {id:5,title:'Office Chair',price:'$35',loc:'Harare'},
    {id:6,title:'Electric Kettle',price:'$18',loc:'Bulawayo'}
  ]
  return (
    <div className="container">
      <section className="hero">
        <h1>Latest Listings</h1>
        <p className="meta">Browse current listings from local sellers across Zimbabwe.</p>
      </section>
      <section>
        <div className="card-grid">
          {items.map(it=>(
            <article key={it.id} className="card">
              <div style={{height:140,background:'#fff',borderRadius:6,border:'1px solid #ebedf0'}}></div>
              <h3 style={{marginTop:10}}>{it.title}</h3>
              <div className="meta">{it.loc}</div>
              <div className="price">{it.price}</div>
              <div style={{marginTop:10}}><Link href="/post-ad" className="btn">Contact Seller</Link></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
