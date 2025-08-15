export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-blue-600">FlashDeals</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">Cart</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
