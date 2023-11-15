import Categories from "@/components/pages/home/categories/Categories";
import Collection from "@/components/pages/home/collections/Collections";
import HighlightWatches from "@/components/pages/home/highlights-watches/HighlightWatches";
import PopularWatches from "@/components/pages/home/popular-watches/PopularWatches";
import WeekenderArchive from "@/components/pages/home/weekender-archive/WeekenderArchive";

export default function Home() {
  return (
    <div className='min-h-screen overflow-hidden'>
      <HighlightWatches />
      <Categories />
      <Collection />
      <WeekenderArchive />
      <PopularWatches />
    </div>
  );
};