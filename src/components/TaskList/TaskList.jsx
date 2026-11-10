

const TaskList = () => {
  return (
    <div 
    id = "tasklist"
    className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
        <div className="shrink-0 h-full w-75 bg-red-400 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
                <h4 className="text-sm">4 Dec 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima necessitatibus vitae eos voluptatum corrupti.</p>
        </div>

        <div className="shrink-0 h-full w-75 bg-green-400 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
                <h4 className="text-sm">4 Dec 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima necessitatibus vitae eos voluptatum corrupti.</p>
        </div>

        <div className="shrink-0 h-full w-75 bg-blue-400 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
                <h4 className="text-sm">4 Dec 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima necessitatibus vitae eos voluptatum corrupti.</p>
        </div>

        <div className="shrink-0 h-full w-75 bg-yellow-400 p-5 rounded-xl">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-600 px-3 py-1 text-sm rounded">High</h3>
                <h4 className="text-sm">4 Dec 2026</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Make a Youtube video</h2>
            <p className="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A minima necessitatibus vitae eos voluptatum corrupti.</p>
        </div>


    </div>
  )
}

export default TaskList 