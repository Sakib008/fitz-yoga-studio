import Hero from '@/components/home/Hero';
import ScheduleTicker from '@/components/home/ScheduleTicker';
import ClassCategories from '@/components/home/ClassCategories';
import Instructors from '@/components/home/Instructors';
import BentoGrid from '@/components/home/BentoGrid';

export default function Home() {
  return (
    <>
      <Hero />
      <ScheduleTicker />
      <ClassCategories />
      <Instructors />
      <BentoGrid />
    </>
  );
}
