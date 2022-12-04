import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  hearts: number;
}

export default function Item({
  title,
  price,
  hearts,
  id,
}: ItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="flex cursor-pointer justify-between px-4 pt-5">
        <div className="flex space-x-4">
          <div className="h-20 w-20 rounded-md bg-gray-400" />
          <div className="flex flex-col pt-2">
            <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            <span className="text-xs text-gray-500">black</span>
            <span className="mt-1 font-medium text-gray-900">{price} ₩</span>
          </div>
        </div>
        <div className="flex items-end justify-end space-x-2">
          <div className="flex items-center space-x-0.5 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>{hearts}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
