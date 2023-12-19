import { fullProduct } from '../../interface';
import { sanityClient } from '../../lib/sanity';
import ImageGallery from '@/app/components/ImageGallery';
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
          images,
          price,
          name,
          description,
          "slug": slug.current,
          "categoryName": category->name,
          price_id
      }`;
  const data = await sanityClient.fetch(query);
  console.log(data);
  return data;
}

async function ProductPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data: fullProduct = await getData(params.slug);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 md:px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <ImageGallery images={data.images} />

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {data.categoryName}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.name}
              </h2>

              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <Button className="rounded-full gap-x-2">
                  <span className="text-sm">4.2</span>
                  <Star className="w-5 h-5" />
                </Button>

                <span className="text-sm text-gray-500 transition duration-100 underline hover:text-black">
                  56 Ratings
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-gray-800 md:text-2xl">
                    ${data.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through">
                    ${data.price + 30}
                  </span>
                </div>
                <span className="text-sm text-gray-500">
                  Incl. Vat plus shipping costs
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6" />
                <span className="text-sm">2-4 Day Shipping</span>
              </div>

              <div className="flex gap-2">
                <Button>Add To Bag</Button>
                <Button variant={'secondary'}>Checkout Now</Button>
              </div>

              <p className="mt-12 text-base text-gray-500 tracking-wide">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductPage;
