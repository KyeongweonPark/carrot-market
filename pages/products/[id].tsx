import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { cls } from "@libs/client/utils";
import { Product, User } from "@prisma/client";
import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import useSWR, { useSWRConfig } from "swr";
import Layout from "../../components/layout";

interface ProductWithUser extends Product {
  user: User;
}

interface ItemDetailResponse {
  ok: boolean;
  product: ProductWithUser;
  relatedProducts: Product[];
  isLiked: boolean;
}

const ItemDetail: NextPage = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const { data, mutate: boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/products/${router.query.id}` : null
  );
  const [toggleFav] = useMutation(`/api/products/${router.query.id}/fav`);
  const onFavClick = () => {
    if (!data) return;
    boundMutate((prev) => prev && { ...data, isLiked: !data.isLiked }, false);
    // mutate("/api/users/me", (prev: any) => ({ ok: false }), false);
    toggleFav({});
  };

  return (
    <Layout canGoBack>
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex cursor-pointer items-center space-x-3 border-t border-b py-3">
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">
                {data?.product?.user?.name}
              </p>
              <Link href={`/users/profiles/${data?.product?.user?.name}`}>
                <p className="text-xs font-medium text-gray-500">
                  View profile &rarr;
                </p>
              </Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">
              {data?.product?.name || <Skeleton count={3} />}
            </h1>
            <span className="mt-3 block text-2xl text-gray-900">
              {data?.product?.price} ₩
            </span>
            <p className="my-6 text-base text-gray-700">
              {data?.product?.description}
            </p>

            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 rounded-md bg-orange-500 py-3 font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                Talk to seller
              </button>
              <button
                onClick={onFavClick}
                className={cls(
                  "flex items-center justify-center rounded-md p-3",
                  data?.isLiked
                    ? "text-red-500 hover:text-red-600"
                    : "text-gray-400 hover:text-gray-500"
                )}
              >
                {data?.isLiked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {data?.relatedProducts.map((product) => (
              <Link key={product.id} href={`/products/${product?.id}`}>
                <div className="cursor-pointer">
                  <div className="mb-4 h-56 w-full bg-slate-300" />
                  <h3 className="-mb-1 text-gray-700">{product.name}</h3>
                  <span className="text-xs font-medium text-gray-900">
                    {product.price}₩
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ItemDetail;
