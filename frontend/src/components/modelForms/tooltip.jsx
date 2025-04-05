export default function Tooltip({ message, children }) {
    return (
        <div class="group relative flex">
            {children}
            <div className="scale-0 transition-all rounded gap-0 bg-gray-800 p-2 text-white group-hover:scale-100 absolute top-0 flex items-center justify-center flex-col opacity-95 shadow-lg border border-gray-600">
                <span class="text-2xl font-mate text-blue-300">{message.title}</span> <br />
                <span class="text-base font-mate pb-7 text-gray-200">{message.text}</span>
                <div className="absolute -bottom-1 w-4 h-4 bg-gray-800 transform rotate-45 border-b border-r border-gray-600"></div>
            </div>
        </div>
    )
}