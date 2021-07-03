import {Pagination } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategoryImages, setPage} from "../../redux/categories/categoryAction";
import './pagination';


const ImagePagination = () => {
    const dispatch = useDispatch()
    let activePage = useSelector((state) => state.category.page);
    const selectedCatId = useSelector((state) => state.category.selectedCatId);
    const categoryImages = useSelector((state) => state.category.categoryImages);
   
    const onPageCgange = (page) => {
        dispatch(setPage(page))
        
        dispatch(fetchCategoryImages(page, selectedCatId))
        console.log({activePage});

    }
   
let items = [];


for (let number = 1; number <= categoryImages.length; number++) {
    items.push(
        <Pagination.Item key={number} active={number === activePage} onClick={() =>onPageCgange(number)}>
        {number}
        </Pagination.Item>,
    );
}

return (
  <div className="pagination">
    <Pagination size="lg">{items}</Pagination>
  </div>
);

}

export default ImagePagination
