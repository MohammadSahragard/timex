import Categories from "@/components/home/categories/Categories";
import HighlightWatches from "@/components/home/highlights-watches/HighlightWatches";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HighlightWatches />
      <Categories />
    </div>
  );
};