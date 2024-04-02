import { Video, Home, MessageSquareMore, LibraryBig, User } from "lucide-react";
export const Footer = () => {
  return (
    <div className={"flex w-full fixed h-20 bg-white bottom-0 justify-center"}>
      <div
        className={
          "flex items-center justify-center mr-[40%] relative bottom-2"
        }
      >
        <div className="mr-[40%]">
          <div
            className={"w-10 h-10 flex items-center justify-center flex-col "}
          >
            <Home />
          </div>
          首页
        </div>
        <div>
          <div
            className={"w-10 h-10 flex items-center justify-center flex-col "}
          >
            <MessageSquareMore />
          </div>
          广场
        </div>
      </div>
      <div
        className={
          "flex items-center justify-center flex-col absolute  bottom-0"
        }
      >
        <div
          className={
            "w-20 h-20 rounded-full bg-[#47fe34] flex items-center justify-center flex-col "
          }
        >
          <Video className={"text-[white] w-12 h-12"} />
        </div>
        <p className={"text-sm text-grey mt-1"}>短视频</p>
      </div>
      <div className={"flex items-center justify-center relative bottom-2"}>
        <div className="mr-[40%]">
          <div
            className={"w-10 h-10 flex items-center justify-center flex-col "}
          >
            <LibraryBig />
          </div>
          收藏
        </div>
        <div>
          <div
            className={"w-10 h-10 flex items-center justify-center flex-col "}
          >
            <User />
          </div>
          我的
        </div>
      </div>
    </div>
  );
};
