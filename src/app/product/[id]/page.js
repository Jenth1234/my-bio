// import { useRouter } from 'next/router';

// export default function Product() {
//   const router = useRouter();
//   const { id } = router.query;

//   // Mock product data
//   const product = {
//     1: { name: 'Product 1', description: 'This is a great product.' },
//     2: { name: 'Product 2', description: 'This product is even better.' },
//     3: { name: 'Product 3', description: 'The best product you can buy.' }
//   }[id];

//   if (!product) return <div>Product not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 px-4">
//       <main className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm">
//         <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
//         <p className="text-gray-700 mb-6">{product.description}</p>
//         <a href={`https://your-payment-link.com/${id}`} className="block p-4 bg-green-500 text-white rounded-lg text-center hover:bg-green-600">
//           Buy Now
//         </a>
//       </main>
//     </div>
//   );
// }
