import Link from "next/link";
function DetailsPage() {
  return (
    <div className=" ">
      <div className="">
        <div className="relative bg-white rounded-lg shadow-md">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-zinc-600">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Create New Product
            </h3>
            <button
              type="button"
              className="text-zinc-400 bg-transparent hover:bg-zinc-200 hover:text-zinc-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-zinc-600 dark:hover:text-white"
              data-modal-toggle="crud-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="price"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="$2999"
                  required=""
                />
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label
                  for="category"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select category</option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="GA">Gaming/Console</option>
                  <option value="PH">Phones</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Product Description
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-600 dark:border-zinc-500 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Add new product
            </button>
          </form>
        </div>
      </div>
      <Link href={"/carrito/detalles/pago"} className="bg-blue-500 text-white text-center py-2 px-4">
      Pasar al pagar</Link>
    </div>
  );
}

export default DetailsPage;
