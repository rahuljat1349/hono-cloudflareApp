import { Avatar } from "./Avatar";

interface blogCardProps {
  title: string;
  content: string;
  authorName: string;
  publishedDate: string;
}
const BlogCard = ({
  title,
  content,
  authorName,
  publishedDate,
}: blogCardProps) => {
  return (
    <>
      <div className="p-4 border-b-[1px] flex flex-col gap-2 border-solid border-gray-200 hover:bg-gray-100 duration-200 cursor-pointer">
        <div className="flex gap-1 items-center">
          <div className="font-medium">
            <Avatar size="small" name={authorName} />
          </div>
          <div className="font-semibold text-gray-700">{authorName}</div>
            &#x2022;
          <div className=" text-sm text-gray-400    ">{publishedDate}</div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-[1px]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-500">{content.slice(0, 150) + "..."}</div>
        </div>
        {/*  */}
        <div className="text-sm text-gray-400 pt-2">
            {Math.ceil(content.length / 100) } mins read
        </div>
      </div>
    </>
  );
};

export default BlogCard;


