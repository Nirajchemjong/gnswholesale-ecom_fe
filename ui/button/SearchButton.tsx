import SearchIcons from "../../src/assets/icons/SearchIcons";
const { SearchIcon } = SearchIcons;
const SearchButton = () => {

    const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const searchValue = e.target.value;
        // Handle search input change
        console.log("Search value:", searchValue);
    }

    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = e.target.value;
        // Handle category change
        console.log("Selected category:", category);
    }

    return (
        <div className="w-100 mx-auto flex flex-col sm:flex-row rounded-full bg-white p-2 sm:p-3 shadow-sm border border-gray-200">
            <div className="flex items-center w-full">
                <SearchIcon className="mr-2 text-gray-400 flex-shrink-0" />
                <input
                    type="text"
                    name="Search"
                    id="Search"
                    className="flex-1 bg-transparent outline-none text-sm sm:text-base placeholder-gray-500"
                    placeholder="Search products"
                    onChange={handleOnSearch}
                />
            </div>
            <div className="flex items-center mt-2 sm:mt-0 sm:ml-4 sm:border-l sm:border-gray-200 sm:pl-4">
                <select 
                    className="bg-transparent outline-none cursor-pointer text-sm sm:text-base text-gray-700 font-medium"
                    onChange={handleCategoryChange}
                >
                    <option value="all">All categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home">Home & Garden</option>
                    <option value="toys">Toys</option>
                </select>
            </div>
        </div>
    )
}

export default SearchButton