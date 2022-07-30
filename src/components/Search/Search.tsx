import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { setSearch } from '../../features/navigationSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

// type Props = {};

const Search = (): JSX.Element => {
	const [query, setQuery] = useState<string>('');

	const dispatch = useAppDispatch();

	const navigation = useNavigate();

	return (
		<form
			className="flex w-1/2 mb-4 items-stretch"
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(setSearch(query));
				navigation('../', { replace: false });
			}}
		>
			<input
				type="text"
				className="py-4 px-6 bg-sc-gray text-slate-300 font-sans font-normal text-sm flex-grow outline-none focus:ring focus:ring-inset focus:ring-gray-800 transition-all"
				placeholder="Поиск"
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
			/>
			<button className="py-2 px-6 bg-sc-gray text-white text-xl hover:bg-gray-700 outline-none focus:ring focus:ring-inset focus:ring-gray-800 transition-all">
				<FaSearch />
			</button>
		</form>
	);
};

export default Search;
