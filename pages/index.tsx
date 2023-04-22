export default function Home() {
  return (
    <div className={"bg-slate-800 h-screen text-white"}>
      <div className="p-8 flex flex-col justify-center">
        <div>
          <ul>
            <li>what you say</li>
            <li>where you are</li>
            <li>what you do</li>
            <li>how you move</li>
            <li className="font-bold">matters</li>
          </ul>
          <div className="pt-5 text-slate-300 text-xs">coming soon to a computer screen near you</div>
        </div>
      </div>
    </div>
  )
}