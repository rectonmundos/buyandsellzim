import './styles/global.css'
export const metadata = { title: 'BuyAndSellZim' }
export default function RootLayout({ children }){
  return (
    <html lang="en"><body>
      <header className="site-header"><div className="container nav"><div className="brand"><img src="/logo-icon.svg" alt="logo" width="40" height="40"/> <strong>Buy<span className="accent">AndSell</span>Zim</strong></div><nav className="nav-links"><a href="/">Home</a><a href="/listings">Listings</a><a href="/post-ad">Post Ad</a><a href="/users">Users</a></nav></div></header>
      <main>{children}</main>
      <footer className="site-footer"><div className="container">Contact: info@buyandsellzim.co.zw • WhatsApp: +263 773 151 367</div></footer>
    </body></html>
  )
}
