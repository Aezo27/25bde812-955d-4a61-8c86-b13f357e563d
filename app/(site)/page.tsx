import Image from 'next/image'
import Product from '../components/product/Product'

export default function Home() {
  return (
    <main className="min-h-screen back bg-gray-100 py-20">
      <Product/>
    </main>
  )
}
