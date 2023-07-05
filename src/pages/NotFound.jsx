import BackButton from '../components/BackButton'

function NotFound({ title = "Not Found ☹", desc = "The page you want doesn't exists" }) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen">
      <p className=" text-2xl  font-medium">️{ title }</p>
      <p className=" text-gray-500">{ desc }</p>
      <BackButton to="/" />
    </div>
  )
}
export default NotFound