import { useParams } from 'react-router-dom';

// just a simple hook to get an integer page value from url
const usePage = (): number => {
	const { page: pageStr } = useParams();
	const page = pageStr ? Number(pageStr) : 1;

	return page;
};

export default usePage;
