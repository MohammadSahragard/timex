import Categories from "@/components/home/categories/Categories";
import Collection from "@/components/home/collections/Collections";
import HighlightWatches from "@/components/home/highlights-watches/HighlightWatches";
import WeekenderArchive from "@/components/home/weekender-archive/WeekenderArchive";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HighlightWatches />
      <Categories />
      <Collection />
      <WeekenderArchive />
    </div>
  );
};