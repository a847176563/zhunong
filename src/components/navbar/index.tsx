import { Search } from "lucide-react";
export const NavBar = () => {
  return (
    <>
      <div className="fixed w-full h-12 bg-[#47fe34] flex top-0 justify-between items-center text-[#fff] z-50">
        <div className={" ml-4 bg-white text-[#45a43bfd] font-bold text-2xl rounded-xl px-2"}>火星集市</div>
        <div className={"-ml-2"}>
          <a href="" className={'mr-2'}>首页</a>
          <a href="" className={'text-xl font-blod'}>短视频</a>
        </div>
        <div className="">
          <Search className={" absolute text-[white] top-3 ml-2" }/>
          <input type="text" placeholder="搜索" className={"bg-[#ffffff8d] text-white rounded-2xl border-transparent border-opacity-50 opacity-85 mr-4 w-28 text-center py-1"} />
        </div>
      </div>
    </>
  );
};
