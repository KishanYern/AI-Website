export default function Tooltip({ message, children }) {
    return (
    <div class="group relative flex">
        {children}
        <div className="scale-0 transition-all rounded gap-0 bg-blue-400 p-2 text-white group-hover:scale-100 absolute top-0 flex items-center justify-center flex-col">
            <span class="text-2xl font-mate">{message.title}</span> <br />
            <span class="text-base font-mate pb-7">{message.text}</span>
        </div>
    </div>
    )
}