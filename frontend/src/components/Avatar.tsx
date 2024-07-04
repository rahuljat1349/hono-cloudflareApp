
export const Avatar = ({ name, size }: { name: string, size : "small" | "big" }) => {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center w-${
          size == "small" ? 6 : 10
        } h-${
          size == "small" ? 6 : 10
        } overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
      >
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {name[0]}
        </span>
      </div>
    </>
  );
};