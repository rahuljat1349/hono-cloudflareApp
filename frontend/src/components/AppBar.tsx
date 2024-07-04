import { Avatar } from './Avatar'

const AppBar = () => {
  return (
    <>
      <div className="w-full px-6 py-3 flex justify-between items-center mb-2 border-b-[2px] border-solid border-gray-100">
        <div>Logo</div>
        <Avatar size="big" name="Rahul Dudi" />
      </div>
    </>
  );
}

export default AppBar