import Tooltip from "@/components/Tooltip";
import Image from "next/image";
import TableAction from "./modals/TableAction";

interface TableProps {
  products: Array<string>,
  total: number,
}

const ProductTable: React.FC<TableProps> = ({ products, total }) => {
  return (
    <div className="flex flex-col mt-6">
      <div className="inline-block min-w-full py-2 align-middle">
        <div className="overflow-hidden border border-gray-200 dark:border-gray-600 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[10%]"
                >
                  Picture
                </th>

                <th
                  scope="col"
                  className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[30%]"
                >
                  <button className="flex items-center gap-x-3 focus:outline-none">
                    <span>Name</span>
                  </button>
                </th>

                <th
                  scope="col"
                  className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[25%]"
                >
                  Brand
                </th>

                <th
                  scope="col"
                  className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400 w-[15%]"
                >
                  Stock
                </th>

                <th scope="col" className="relative py-3.5 px-4">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-600 dark:bg-gray-800">
              {products.map((item: any) => (
                <tr key={item.id}>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="w-12 h-12">
                      <Image
                        src={item.thumbnail}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="object-cover h-full w-full"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                    <div>
                      <h2 className="font-medium text-gray-800 dark:text-white ">
                        {item.title}
                      </h2>
                    </div>
                  </td>
                  <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                    <div className="text-sm font-semibold">
                      {item.brand}
                    </div>
                  </td>
                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="group relative w-48">
                      <div className=" h-1.5 bg-blue-200 overflow-hidden rounded-full">
                        <div
                          className="bg-blue-500 h-1.5"
                          style={{ width: (item.stock / 200) * 100 + "%" }}
                        ></div>
                      </div>
                      <Tooltip text={item.stock} />
                    </div>
                  </td>

                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <TableAction id={item.id} name={item.title}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!total &&
            <div className="bg-white dark:bg-gray-800">
            <h3 className="py-4 text-center">No item found</h3>
          </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
