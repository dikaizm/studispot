export default function Subscribe() {
    return (
        <form>   
              <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg className="w-6 h-6" viewBox="0 0 448 352" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M392 16H56C33.9086 16 16 33.9086 16 56V296C16 318.091 33.9086 336 56 336H392C414.091 336 432 318.091 432 296V56C432 33.9086 414.091 16 392 16Z" stroke="darkgray" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M80 80L224 192L368 80" stroke="darkgray" strokeWidth="28" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                  
                </div>
                <input type="search" id="search" className="block w-full p-3 pl-14 text-sm text-gray-900 border border-spotBlue rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Masukkan email..." required />
                <button type="submit" className="text-white absolute right-1 bottom-1 top-1 bg-spotBlue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2">Langganan</button>
              </div>
        </form>
    )
}