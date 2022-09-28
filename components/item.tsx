import Link from "next/link";

interface ItemProps {
  title: string;
  id: number;
  price: number;
  comments: number;
  hearts: number;
}

export default function Item({
  title,
  price,
  comments,
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
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>
            <span>{comments}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
