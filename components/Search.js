export default function Search() {
    return (
        <form className="mx-auto max-w-[670px] pt-8 md:pt-10">
        <div className="flex">
        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
        <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-3 md:py-4 pl-5 w-28 md:w-32 text-sm font-medium text-center bg-gray-100 border border-spotBlue text-spotBlue rounded-l-full hover:bg-gray-200" type="button">Semua<svg aria-hidden="true" className="w-5 h-5 ml-3 md:ml-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Shopping</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Images</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">News</a>
                </li>
                <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Finance</a>
                </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-3 md:p-4 w-full z-20 text-sm text-gray-800 bg-white rounded-r-full border-l-gray-100 border-l-2 border border-spotBlue placeholder-gray-400" placeholder="Pelajari hal baru..." required />
            <button type="submit" className="absolute top-0 right-0 p-3 md:p-4 text-sm font-medium text-white bg-spotBlue rounded-r-full border border-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"><svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
        </div>
    </div>
</form>
    )
}