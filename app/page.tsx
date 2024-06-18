import Feed from "@/components/Feed";
import News from "@/components/News";
import Sidebar from "@/components/Sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();
  console.log(user);
  
  return (
    <div className="md:pt-20 pt-14 ">
      <div className="md:max-w-6xl mx-auto flex justify-between gap-8">
         {/* Sidebar */}
         <Sidebar user={user}/>
         {/* feed */}
         <Feed user={user}/>
         {/* news */}
         <News/>
      </div>
    </div>
  );
}
