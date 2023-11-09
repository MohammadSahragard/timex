import Categories from "@/components/home/categories/Categories";
import Collection from "@/components/home/collections/Collections";
import HighlightWatches from "@/components/home/highlights-watches/HighlightWatches";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HighlightWatches />
      <Categories />
      <Collection />
    </div>
  );
};