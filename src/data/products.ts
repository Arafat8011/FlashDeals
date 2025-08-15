export interface Product {
  id: number
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999, image: '/images/laptop.jpg' },
  { id: 2, name: 'Smartphone', price: 699, image: '/images/smartphone.jpg' },
  { id: 3, name: 'Headphones', price: 199, image: '/images/headphones.jpg' },
  { id: 4, name: 'Monitor', price: 199, image: '/images/monitor.jpg' },
]
