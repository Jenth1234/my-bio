// src/app/page.js
import SearchBar from './components/Search'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-green-100 flex flex-col items-center justify-center py-5 px-3">
      <main className="bg-blue-100 rounded-lg shadow-md p-4 w-full max-w-xs md:max-w-sm lg:max-w-md border-2 border-blue-300 border-opacity-50">
        <h1 className="text-2xl font-bold mb-4">Chào mừng đến với Cửa Hàng của Chúng Tôi</h1>
        <p className="text-gray-700 mb-6">Tìm kiếm các sản phẩm tốt nhất cho bạn!</p>

        {/* Thanh Tìm Kiếm */}
        <SearchBar />

        {/* Danh Mục Chính */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Danh Mục Chính</h2>
          <div className="overflow-x-auto">
            <ul className="flex space-x-4">
              <li className="flex-shrink-0 w-32">
                <a
                  href="https://shopee.vn/products/clothing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300"
                >
                  {/* <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Quần Áo"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  /> */}
                  Quần Áo
                </a>
              </li>
              <li className="flex-shrink-0 w-32">
                <a
                  href="https://shopee.vn/products/jewelry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300"
                >
                  {/* <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Trang Sức"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  /> */}
                  Trang Sức
                </a>
              </li>
              <li className="flex-shrink-0 w-32">
                <a
                  href="https://shopee.vn/products/bags"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300"
                >
                  {/* <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Túi"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  /> */}
                  Túi
                </a>
              </li>
              <li className="flex-shrink-0 w-32">
                <a
                  href="https://shopee.vn/products/accessories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300"
                >
                  {/* <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Phụ Kiện"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  /> */}
                  Phụ Kiện
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Các Sản Phẩm Theo Danh Mục */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Sản Phẩm Theo Danh Mục</h2>

          {/* Quần Áo */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Quần Áo</h3>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                <a
                  href="https://shopee.vn/product/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Áo Sơ Mi"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Áo Sơ Mi</div>
                  <div className="text-gray-600">$25.00</div>
                </a>
                <a
                  href="https://shopee.vn/product/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Quần Jean"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Quần Jean</div>
                  <div className="text-gray-600">$40.00</div>
                </a>
                {/* Thêm nhiều sản phẩm quần áo nếu cần */}
              </div>
            </div>
          </div>

          {/* Trang Sức */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Trang Sức</h3>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                <a
                  href="https://shopee.vn/product/3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Dây Chuyền"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Dây Chuyền</div>
                  <div className="text-gray-600">$50.00</div>
                </a>
                <a
                  href="https://shopee.vn/product/4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Nhẫn"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Nhẫn</div>
                  <div className="text-gray-600">$30.00</div>
                </a>
                {/* Thêm nhiều sản phẩm trang sức nếu cần */}
              </div>
            </div>
          </div>

          {/* Túi */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Túi</h3>
            <div className="overflow-x-auto">
              <div className="flex space-x-4">
                <a
                  href="https://shopee.vn/product/5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Túi Xách"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Túi Xách</div>
                  <div className="text-gray-600">$60.00</div>
                </a>
                <a
                  href="https://shopee.vn/product/6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-blue-200 text-white rounded-lg text-center hover:bg-blue-300 w-32 flex-shrink-0"
                >
                  <Image
                    src="http://res.cloudinary.com/dbdl1bznw/image/upload/v1725783412/f65uhnz29a3uoxswnn5c.jpg"
                    alt="Túi Đeo Vai"
                    width={300}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <div className="text-sm font-medium mb-1">Túi Đeo Vai</div>
                  <div className="text-gray-600">$70.00</div>
                </a>
                {/* Thêm nhiều sản phẩm túi nếu cần */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
