import { useState } from 'react';

// type Props = {};

const Search = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  return (
    <input
      type="text"
      className="py-4 px-6 bg-sc-gray text-slate-300 font-sans font-normal text-sm w-1/2 mb-4"
      placeholder="Поиск"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
      }}
    />
  );
};

export default Search;
